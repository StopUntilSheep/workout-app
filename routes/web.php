<?php

use App\Http\Controllers\ChooseWorkoutController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ChooseWorkoutController::class, 'index']);

Route::get('/choose-exercise', function () {
    return Inertia::render('ChooseExercise');
});

Route::get('/exercise', function () {
    return Inertia::render('Exercise');
});
