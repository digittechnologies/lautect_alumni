<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class authentication extends Model
{
    //
   
    protected $fillable = [
        'matric_no','fullname','dept','status'
    ];
}
