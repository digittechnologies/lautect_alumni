<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class career extends Model
{
    //
    protected $fillable = [
        'car_cat_id','car_name','created_by','title','content','location','address','car_image','information','updated_by'
    ];
    
}
