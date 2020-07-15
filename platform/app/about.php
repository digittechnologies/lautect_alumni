<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class about extends Model
{
    //
    protected $fillable = [
        'about_cat_id','title','content', 'paragraph_3','paragraph_2','images','year'
    ];
}
