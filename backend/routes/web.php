<?php

use App\Http\Controllers\ProfController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ProfController::class, 'index'])->name('profs.index');
Route::get('/prof/create', [ProfController::class, 'create'])->name('profs.create');
Route::post('/prof/create', [ProfController::class, 'store'])->name('profs.store');
Route::get('/prof/{id}/edit', [ProfController::class, 'edit'])->name('profs.edit');
Route::put('/prof/{id}', [ProfController::class, 'update'])->name('profs.update');
Route::get('/prof/{id}', [ProfController::class, 'destroy'])->name('profs.destroy');