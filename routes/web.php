<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('locale')->group(function () {
    Route::get('/', \App\Http\Controllers\HomeController::class);

    Route::post('/set-locale', \App\Http\Controllers\SetLocaleController::class);
    //...
    Route::middleware('auth')->group(function () {
        Route::get('/dashboard', \App\Http\Controllers\DashboardController::class);
        Route::resource('/products', \App\Http\Controllers\ProductController::class);
        Route::resource('/categories', \App\Http\Controllers\CategoryController::class);
    });

    // other routes
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
