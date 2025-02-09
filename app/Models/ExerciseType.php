<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExerciseType extends Model
{
    use HasFactory;

    protected $table = 'exercise_types';

    protected $fillable = ['name'];

    public function exercises()
    {
        return $this->hasMany(WorkoutExercise::class);
    }
}
