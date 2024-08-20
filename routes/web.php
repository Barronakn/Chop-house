<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AddMenuController;
use App\Http\Controllers\AllMenuController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DeleteMenuController;
use App\Http\Controllers\EditMenuController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\ViewMenuController;
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


    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/about', [AboutController::class, 'index']);
    Route::get('/contact', [ContactController::class, 'index']);
    Route::get('/menu', [MenuController::class, 'index']);
    Route::get('/testimonial', [TestimonialController::class, 'index']);
    Route::get('/services', [ServicesController::class, 'index']);
    Route::get('/booking', [BookingController::class, 'index']);
    Route::post('/booking', [ReservationController::class, 'store']);


    Route::get('/add/menu', [AddMenuController::class, 'add']);
    Route::post('/add/menu', [AddMenuController::class, 'store']);
    Route::get('/delete/menu/{id}', [DeleteMenuController::class, 'delete']);
    Route::delete('/delete/menu/{id}', [DeleteMenuController::class, 'delete']);
    Route::get('/edit/menu/{id}', [EditMenuController::class, 'edit']);
    Route::put('/edit/menu/{id}', [EditMenuController::class, 'update']);
    Route::get('/view/menu/{id}', [ViewMenuController::class, 'view']);
    Route::get('/all/menu', [AllMenuController::class, 'all'])->name('menu');
    Route::get('/reservation', [ReservationController::class, 'index']);



require __DIR__.'/auth.php';
