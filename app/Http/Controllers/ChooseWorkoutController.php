<?php

namespace App\Http\Controllers;

use App\Models\WorkoutType;
use Inertia\Inertia;
use Inertia\Response;

class ChooseWorkoutController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('ChooseWorkout', [
            'workouts' => WorkoutType::get()
        ]);
    }
}
