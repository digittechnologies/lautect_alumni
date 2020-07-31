<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\app_setting;
use App\home_page;
use App\event_tb;
use App\about;
use App\home_body;
use App\people_commitee;
use App\interview;

class AboutController extends Controller
{
    public function index()
    {
 
     
     $settings = app_setting::all();
    //  $home_page = home_page::all();
    //  $event_page = event_tb::all();
    //  $image_cat = image_category::all();
     $about = about::join('about_category','abouts.about_cat_id','=','about_category.id')
                     ->select('abouts.*','about_category.cat_name')
                     ->where('about_category.id', '=', '3')
                     ->get();
    $header =home_body::select('home_body.*')
                     ->where('home_body.id', '=', 6)
                     ->first();
   
    $interview =interview::select('interviews.*')                  
                     ->get();  

    $committee =people_commitee::select('people_commitees.*')
                     ->where('people_commitees.category_id', '=', 1)
                     ->get();  
    $committee3 =people_commitee::select('people_commitees.*')
                     ->where('people_commitees.category_id', '=', 1)
                     ->where('people_commitees.role_id', '=', 3)
                     ->get();
    $committee2 =people_commitee::select('people_commitees.*')
                     ->where('people_commitees.category_id', '=', 1)
                     ->where('people_commitees.role_id', '=', 2)
                     ->get();
    $committee1 =people_commitee::select('people_commitees.*')
                     ->where('people_commitees.category_id', '=', 1)
                     ->where('people_commitees.role_id', '=', 1)
                     ->get();
 
     return view('about',['settings'=>$settings[0], 'about'=> $about, 'header'=> $header, 'committee'=>$committee, 'committee3'=>$committee3, 'committee2'=>$committee2, 'committee1'=>$committee1,  'interview'=>$interview]);


    }
}