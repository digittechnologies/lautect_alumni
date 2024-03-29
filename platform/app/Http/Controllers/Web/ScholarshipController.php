<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\app_setting;
use App\home_page;
use App\event_tb;
use App\about;
use App\User;
use App\home_body;
class ScholarshipController extends Controller
{
    public function index()
    {
 
        $settings = app_setting::all();     
        $header =home_body::select('home_body.*')
                         ->where('home_body.id', '=', 11)
                         ->first();
     
         return view('pages.scholarship',['settings'=>$settings[0], 'header'=> $header]);
    }
}
