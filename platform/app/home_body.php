<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class home_body extends Model
{
    protected $table= 'home_body';
    protected $fillable = [
        'id','name','title','content','image','status','updated_by','updated_at'
    ];
}
