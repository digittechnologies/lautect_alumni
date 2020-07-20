<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\app_setting;
use App\home_page;
use App\event_tb;
use App\about;
use App\career;
use App\gallery;
use App\image_category;
use App\home_body;

class HomeController extends Controller
{
 
//    public function __construct()
//    {
//        $this->middleware('auth');
//    }

   /**
    * Show the application dashboard.
    *
    * @return \Illuminate\Contracts\Support\Renderable
    */
   public function index()
   {

    
    $settings = app_setting::all();
    $home_page = home_page::all();
    $event_page = event_tb::all();
    $image_cat = image_category::all();
    $president = home_body::select('home_body.*')
                    ->where('home_body.id', '=', '1')
                    ->first();
                    
    $responsibilities =home_body::select('home_body.*')
                           ->where('home_body.name', '=', 'responsibility')
                           ->get();
   
   $career = career::join('career_categories','careers.car_cat_id','=','career_categories.id')
                    ->select('careers.*','career_categories.car_cat_name')                   
                    ->get();

   $gallery = gallery::join('image_categories','galleries.image_cat_id','=','image_categories.id')
                    ->select('galleries.*','image_categories.image_cate_name','image_categories.about')                   
                    ->get();

    // return $responsibilities;

    return view('index',['settings'=>$settings[0], 'home'=> $home_page, 'event'=>$event_page, 'president'=> $president, 'responsibilities'=> $responsibilities, 'career'=> $career, 'galleries'=>$gallery,'image_cat'=>$image_cat]);
   }
}

