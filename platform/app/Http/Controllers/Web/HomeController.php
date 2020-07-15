<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\app_setting;
use App\home_page;
use App\event_tb;
use App\about;

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
    $president = about::join('about_category','abouts.about_cat_id','=','about_category.id')
                    ->select('abouts.*','about_category.cat_name')
                    ->where('about_category.id', '=', '1')
                    ->first();
    $responsibilities = about::join('about_category','abouts.about_cat_id','=','about_category.id')
                    ->select('abouts.*','about_category.cat_name')
                    ->where('about_category.id', '=', '2')
                    ->get();

    // return $responsibilities;

    return view('index',['settings'=>$settings[0], 'home'=> $home_page, 'event'=>$event_page, 'president'=> $president, 'responsibilities'=> $responsibilities]);
   }
}

