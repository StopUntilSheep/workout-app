<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkoutExercise extends Model
{
    use HasFactory;

    protected $table = 'workout_exercises';

    protected $fillable = ['workout_id', 'exercise_type_id', 'weight', 'reps'];

    public function workout()
    {
        return $this->belongsTo(Workout::class);
    }

    public function exerciseType()
    {
        return $this->belongsTo(ExerciseType::class);
    }
}
