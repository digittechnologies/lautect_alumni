<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class blog extends Model
{
    //
    protected $fillable = [
        'blog_name','blog_title','link','blog_image','category_id','created_by','content1','content2','content3','updated_by'
    ];
}
