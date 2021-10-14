<?php

namespace App\Http\Requests;

use App\Rules\ValidateCep;
use App\Services\ViaCEP;
use Illuminate\Foundation\Http\FormRequest;

class DiaristaRequest extends FormRequest{
    public function __construct(
        public ViaCEP $viaCep
    ){}
    
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(){
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'fullname' => ['required', 'max:100'],
            'cpf' => ['required', 'size:14'],
            'email' => ['required', 'email', 'max:100'],
            'phone' => ['required', 'size:15'],
            'street' => ['required', 'max:255'],
            'num' => ['required', 'max:20'],
            'cep' => ['required', new ValidateCep($this->viaCep)],
            'neighborhood' => ['required', 'max:50'],
            'city' => ['required', 'max:50'],
            'district' => ['required', 'size:2'],
            'avatarURL' => ['image']
        ];

        if ($this->isMethod('post')) {
            $rules['avatarURL'] = ['required', 'image'];
        }

        return $rules;
    }
}