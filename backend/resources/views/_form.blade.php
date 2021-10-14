@csrf
<div class="mb-3">
    <label for="fullname" class="form-label">Nome Completo</label>
    <input value="{{ @$prof->fullname }}" type="text" class="form-control" id="fullname" name="fullname" required maxlength="100">
</div>

<div class="mb-3">
    <label for="cpf" class="form-label">CPF</label>
    <input value="{{ @$prof->cpf }}" type="text" class="form-control" id="cpf" name="cpf" required maxlength="14">
</div>

<div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input value="{{ @$prof->email }}" type="email" class="form-control" id="email" name="email" required maxlength="100">
</div>

<div class="mb-3">
    <label for="phone" class="form-label">Telefone</label>
    <input value="{{ @$prof->phone }}" type="text" class="form-control" id="phone" name="phone" required maxlength="15">
</div>

<div class="mb-3">
    <label for="street" class="form-label">Rua</label>
    <input value="{{ @$prof->street }}" type="text" class="form-control" id="street" name="street" required maxlength="255">
</div>

<div class="mb-3">
    <label for="num" class="form-label">Número</label>
    <input value="{{ @$prof->num }}" type="text" class="form-control" id="num" name="num" required maxlength="20">
</div>

<div class="mb-3">
    <label for="complement" class="form-label">Complemento</label>
    <input value="{{ @$prof->complement }}" type="text" class="form-control" id="complement" name="complement" maxlength="50">
</div>

<div class="mb-3">
    <label for="cep" class="form-label">CEP</label>
    <input value="{{ @$prof->cep }}" type="text" class="form-control" id="cep" name="cep" maxlength="8">
</div>

<div class="mb-3">
    <label for="neighborhood" class="form-label">Bairro</label>
    <input value="{{ @$prof->neighborhood }}" type="text" class="form-control" id="neighborhood" name="neighborhood" required maxlength="50">
</div>

<div class="mb-3">
    <label for="city" class="form-label">Cidade</label>
    <input value="{{ @$prof->city }}" type="text" class="form-control" id="city" name="city" required maxlength="50">
</div>

<div class="mb-3">
    <label for="district" class="form-label">Estado</label>
    <input value="{{ @$prof->district }}" type="text" class="form-control" id="district" name="district" required maxlength="2">
</div>

<div class="mb-3">
    <label for="avatarURL" class="form-label">Foto</label>
    <input type="file" class="form-control" id="avatarURL" name="avatarURL">
</div>