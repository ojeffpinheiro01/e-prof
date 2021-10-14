@extends('app')

@section('title', 'Editar professor')

@section('content')
<h1>Editar professor</h1>
<form action="{{ route('profs.update', $prof)}}" method="POST" enctype="multipart/form-data">
    @method('PUT')
    @include('_form')
    <button type="submit" class="btn btn-primary">ATUALIZAR</button>
</form>
@endsection