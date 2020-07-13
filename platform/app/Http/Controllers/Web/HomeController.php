<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\app_setting;
use App\home_page;

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

    return view('index',['settings'=>$settings, 'home'=> $home_page]);
   }
}

