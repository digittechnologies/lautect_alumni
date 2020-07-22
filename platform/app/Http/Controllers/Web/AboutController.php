<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\app_setting;
use App\home_page;
use App\event_tb;
use App\about;

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
                     
    //  $responsibilities = about::join('about_category','abouts.about_cat_id','=','about_category.id')
    //                  ->select('abouts.*','about_category.cat_name')
    //                  ->where('about_category.id', '=', '2')
    //                  ->get();
    
 
    // $gallery = gallery::join('image_categories','galleries.image_cat_id','=','image_categories.id')
    //                  ->select('galleries.*','image_categories.image_cate_name','image_categories.about')                   
    //                  ->get();
 
     // return $responsibilities;
 
     return view('about',['settings'=>$settings[0], 'about'=> $about]);
    }
}
