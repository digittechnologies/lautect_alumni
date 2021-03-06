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
use App\career;

class JobController extends Controller
{
    public function index()
    {
 
     
        $settings = app_setting::all();     
        $career = career::join('career_categories','careers.car_cat_id','=','career_categories.id')
                                ->select('careers.*','career_categories.car_cat_name')                   
                                ->get();
         $header =home_body::select('home_body.*')
                         ->where('home_body.id', '=', 10)
                         ->first();
     
         return view('pages.job',['settings'=>$settings[0], 'header'=> $header, 'career'=> $career,]);

    }
}
