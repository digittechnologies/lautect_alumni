<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class event_schedule extends Model
{
    //
    protected $fillable = [
        'schedule_name','title','content','start_date','start_time','end_time','end_date','speaker','created_by'
    ];
}
