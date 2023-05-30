<?php

use App\Http\Controllers\API\CreditController;
use App\Http\Controllers\API\PaymentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('credits')->group(function () {
    Route::get('/', [CreditController::class, 'index']);
    Route::post('/', [CreditController::class, 'store']);
    Route::get('/{credit}', [CreditController::class, 'show']);
    Route::put('/{credit}', [CreditController::class, 'update']);
    Route::delete('/{credit}', [CreditController::class, 'destroy']);
});

Route::prefix('payments')->group(function () {
    Route::post('/', [PaymentController::class, 'store']);
});