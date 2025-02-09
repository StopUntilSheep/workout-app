<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkoutType extends Model
{
    use HasFactory;

    protected $table = 'workout_types';

    protected $fillable = ['name'];

    public function workouts()
    {
        return $this->hasMany(Workout::class);
    }
}
