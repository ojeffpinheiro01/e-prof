<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ViaCEP {
    /* Consulta CEP no via cep */
    public function search(string $cep){
        $url = sprintf('https://viacep.com.br/ws/%s/json/', $cep);
        $res = Http::get($url);

        if($res->failed()){
            return false;
        }

        $data = $res->json();

        if (isset($data['erro']) && $data['erro'] === true) {
            return false;
        }

        return $data;

    }
}