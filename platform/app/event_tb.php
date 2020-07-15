<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class event_tb extends Model
{
    //
    protected $fillable = [
        'id','event_name','subject','content','address','start_time','start_date','created_by','end_time','end_date','event_image','status','created_at','
        updated_at','decription'
    ];
    
}
