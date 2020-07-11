<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class about extends Model
{
    //
    protected $fillable = [
        'about_name','title','content','images','year'
    ];
}
