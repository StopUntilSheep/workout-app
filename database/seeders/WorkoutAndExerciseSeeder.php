<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\WorkoutType;
use App\Models\ExerciseType;

class WorkoutAndExerciseSeeder extends Seeder
{
    public function run(): void
    {
        WorkoutType::insert([
            ['name' => 'Push'],
            ['name' => 'Pull'],
            ['name' => 'Legs'],
        ]);

        ExerciseType::insert([
            ['name' => 'Deadlift'],
            ['name' => 'Bench Press'],
            ['name' => 'Push Ups'],
            ['name' => 'Squats'],
            ['name' => 'Pull Ups'],
        ]);
    }
}
