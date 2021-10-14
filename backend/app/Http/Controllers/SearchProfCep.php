<?php

namespace App\Http\Controllers;

use App\Models\Prof;
use App\Services\ViaCEP;
use Illuminate\Http\Request;

class SearchProfCep extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $req, ViaCEP $viaCEP){
        $end = $viaCEP->search($req->cep);
        if($end === false){
            return response()->json(['erro' => 'CEP inválido'], 400);
        }

        return [
            'profs' => Prof::searchIbgeCode($end['ibge']),
            'num_profs' => Prof::amountIbgeCode($end['ibge'])];
    }
}
