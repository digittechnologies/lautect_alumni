<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class people_commitee extends Model
{
    //
    protected $fillable = [
        'p_name', 'p_about', 'created_by','updated_by','p_position','link_id','p_image','category_id'
    ];
}
