<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class blogs_category extends Model
{
    //
    protected $fillable = [
        'blog_cat_name','description'
    ];
}
