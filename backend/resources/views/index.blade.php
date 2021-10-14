@extends('app')

@section('title', 'Página inicial')

@section('content')
<h1>Lista de professores</h1>

<table class="table">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Telefone</th>
            <th scope="col">Ações</th>
        </tr>
    </thead>

    <tbody>
        @forelse ($profs as $prof)
        <tr>
            <th scope="row">{{ $prof->id }}</th>
            <td>{{ $prof->fullname }}</td>
            <td>{{ $prof->phone }}</td>
            <td>
                <a href="{{ route('profs.edit', $prof) }}" class="btn btn-primary">✏️</a>
                <a href="{{ route('profs.destroy', $prof) }}"
                        class="btn btn-danger" onclick="return confirm('Deseja excluir esse professor?')">🗑️</a>
            </td>
        </tr>

        @empty
        <tr>
            <th scope="row"></th>
            <td>Nenhum registro cadastrado</td>
            <td></td>
            <td></td>
        </tr>

        @endforelse
    </tbody>
</table>

<a href='{{ route("profs.create") }}' class='btn btn-success'>NOVO PROFESSOR</a>
@endsection