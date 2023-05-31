<?php

use App\Http\Controllers\CreditController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
    return Inertia::render("Auth/Login", [
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
// users
Route::get('users', [UserController::class, 'index'])->name('users');
// Route::get('credits/create', [CreditController::class, 'create'])->name('credits.create');
// Route::post('credits', [CreditController::class, 'store'])->name('credits.store');
// Route::get('users/{user}/edit' ,[CreditController::class, 'edit'])->name("credits.edit");
// Route::put('users/{user}' ,[CreditController::class, 'update'])->name("credits.update");
// Route::delete('users/{user}' ,[CreditController::class, 'delete'])->name("credits.delete");
// credits
Route::get('credits', [CreditController::class, 'index'])->name('credits');
Route::get('credits/create', [CreditController::class, 'create'])->name('credits.create');
Route::post('credits', [CreditController::class, 'store'])->name('credits.store');
// Route::get('users/{user}/edit' ,[CreditController::class, 'edit'])->name("credits.edit");
// Route::put('users/{user}' ,[CreditController::class, 'update'])->name("credits.update");
// Route::delete('users/{user}' ,[CreditController::class, 'delete'])->name("credits.delete");


// payments
Route::get('payments', [PaymentController::class, 'index'])->name('payments');
Route::get('payments/create', [PaymentController::class, 'create'])->name('payments.create');
Route::post('payments', [PaymentController::class, 'store'])->name('payments.store');
// Route::get('users/{user}/edit' ,[CreditController::class, 'edit'])->name("credits.edit");
// Route::put('users/{user}' ,[CreditController::class, 'update'])->name("credits.update");
// Route::delete('users/{user}' ,[CreditController::class, 'delete'])->name("credits.delete");


require __DIR__ . '/auth.php';
