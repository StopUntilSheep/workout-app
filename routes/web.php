<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('ChooseWorkout');
});

Route::get('/choose-exercise', function () {
    return Inertia::render('ChooseExercise');
});

Route::get('/exercise', function () {
    return Inertia::render('Exercise');
});
