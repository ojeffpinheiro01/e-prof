@extends('app')

@section('title', 'Novo professor')

@section('content')
    <h1>Adicionar novo professor</h1>

    <form action="{{ route('profs.store')}}" method="POST" enctype="multipart/form-data">
        @include('_form')

        <button type="submit" class="btn btn-primary">Salvar</button>
    </form>
@endsection