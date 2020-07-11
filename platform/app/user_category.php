<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class user_category extends Model
{
    //
    protected $fillable = [
        'cat_name', 'about', 'created_by'
    ];
}
