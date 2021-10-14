<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prof extends Model
{
    use HasFactory;
    /* campos que podem ser gravados no db */
    protected $fillable = ['fullname', 'cpf', 'email', 'phone', 'street', 'num', 'complement', 'cep', 'neighborhood', 'city', 'district', 'ibge_code', 'avatarURL'];
    
    /* campos visiveis para api */
    protected $visible = ['fullname', 'city', 'avatarURL', 'rating']; 

    /* campo virtual a resposta da api */
    protected $appends = ['rating'];


    /* Monta a URL do avatar do usuario */
    public function getAvatarURLAttribute(string $src){
        return config('app.url') . '/' . $src;
    }

    /* cria valor randomico para rating */
    public function getRatingAttribute(){
        return mt_rand(1, 5);
    }

    /* Busca professor por código ibge no db */
    static public function searchIbgeCode(int $ibge_code){
       return self::where('ibge_code', $ibge_code)->limit(6)->get();
    }

    /* Retorna a quantidade de professores no db */
    static public function amountIbgeCode(int $ibge_code){
        $amount = self::where('ibge_code', $ibge_code)->count();

        return $amount > 6 ? $amount - 6 : 0;
    }
}
