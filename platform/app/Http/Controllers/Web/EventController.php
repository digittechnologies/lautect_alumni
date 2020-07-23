<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\home_body;
use App\app_setting;

class EventController extends Controller
{
    public function index()
    {
 
     
     $settings = app_setting::all();     
    $header =home_body::select('home_body.*')
                     ->where('home_body.id', '=', 8)
                     ->first();
 
     return view('pages.event',['settings'=>$settings[0], 'header'=> $header]);
    }
}
