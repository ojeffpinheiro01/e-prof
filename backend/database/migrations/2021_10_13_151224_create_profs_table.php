<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profs', function (Blueprint $table) {
            $table->id();
            $table->string('fullname', 100);
            $table->char('cpf', 11);
            $table->string('email', 100);
            $table->char('phone', 15);
            $table->string('street');
            $table->string('num', 20);
            $table->string('complement', 50)->nullable();
            $table->char('cep', 8);
            $table->string('neighborhood', 50);
            $table->string('city', 50);
            $table->char('district', 2);
            $table->integer('ibge_code');
            $table->string('avatarURL');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profs');
    }
}
