<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

$navigation = [
    ['label' => 'Dashboard', 'href' => 'dashboard', 'key' => 'dashboard'],
    ['label' => 'Map', 'href' => 'map', 'key' => 'map'],
    ['label' => 'Records', 'href' => 'records', 'key' => 'records'],
];


Route::get('/', function () use ($navigation) {
    return Inertia::render('Dashboard', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
          'navigation' => $navigation,
        'current' => 'dashboard',
    ]);
});

Route::get('/map', function () use ($navigation) {
    return Inertia::render('Map/Index', [
        'navigation' => $navigation,
        'current' => Route::currentRouteName(),
    ]);
})->middleware(['auth'])->name('map');

Route::get('/records', function () use ($navigation) {
    return Inertia::render('Records/Index', [
        'navigation' => $navigation,
        'current' => Route::currentRouteName(),
    ]);
})->middleware(['auth'])->name('records');


Route::get('/dashboard', function () use ($navigation) {
    return Inertia::render('Dashboard', [
        'navigation' => $navigation,
        'current' => Route::currentRouteName(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
