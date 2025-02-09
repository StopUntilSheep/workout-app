<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workout extends Model
{
    use HasFactory;

    protected $table = 'workouts';

    protected $fillable = ['date', 'workout_type_id'];

    public function exercises()
    {
        return $this->hasMany(WorkoutExercise::class);
    }

    public function workoutType()
    {
        return $this->belongsTo(WorkoutType::class);
    }
}
