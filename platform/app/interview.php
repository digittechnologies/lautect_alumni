<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class interview extends Model
{
    //
    protected $fillable = [
        'inter_name','content','inter_position','created_by','inter_image','link','updated_by'
    ];
}
