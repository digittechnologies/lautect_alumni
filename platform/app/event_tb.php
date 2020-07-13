<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class event_tb extends Model
{
    //
    protected $fillable = [
        'event_name','subject','content','start_date','start_time','end_time','end_date','address','event_image'
    ];
    
}
