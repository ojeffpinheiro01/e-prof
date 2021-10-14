<?php

namespace App\Http\Controllers;

use App\Http\Requests\DiaristaRequest;
use App\Models\Prof;
use App\Services\ViaCEP;

class ProfController extends Controller{
    public function __construct(
        protected ViaCEP $viaCep
        ){
        
    }

    /* Lista de professores */
    public function index()
    {
        $profs = Prof::get();
        return view('index', [
            'profs' => $profs
        ]);
    }

    /* mostra formulário de criação */
    public function create()
    {
        return view('create');
    }

    /* salva o dado no db */
    public function store(DiaristaRequest $req){
        $data = $req->except('_token');
        $data['avatarURL'] = $req->avatarURL->store('public');

        $data['cpf'] = str_replace(['.', '-'], '', $data['cpf']);
        $data['cep'] = str_replace('-', '', $data['cep']);
        $data['phone'] = str_replace(['(', ')', ' ', '-'], '', $data['phone']);
        $data['ibge_code'] = $this->viaCep->search($data['cep'])['ibge'];


        Prof::create($data);

        return redirect()->route('profs.index');
    }

    /* mostra formulário de edição */
    public function edit(int $id)
    {
        $prof = Prof::findOrFail($id);
        return view('edit', [
            'prof' => $prof
        ]);
    }

    /* atualiza os dados  */
    public function update(int $id, DiaristaRequest $req){
        $prof = Prof::findOrFail($id);
        $data = $req->except(['_token', 'method']);

        $data['cpf'] = str_replace(['.', '-'], '', $data['cpf']);
        $data['cep'] = str_replace('-', '', $data['cep']);
        $data['phone'] = str_replace(['(', ')', ' ', '-'], '', $data['phone']);
        $data['ibge_code'] = $this->viaCep->search($data['cep'])['ibge'];


        if ($req->hasFile('avatarURL')) {
            $data['avatarURL'] = $req->avatarURL->store('public');
        }

        $prof->update($data);

        return redirect()->route('profs.index');
    }


    /* destroi o dado */
    public function destroy(int $id){
        $prof = Prof::findOrFail($id);
        $prof->delete();

        return redirect()->route('profs.index');
    }
}
