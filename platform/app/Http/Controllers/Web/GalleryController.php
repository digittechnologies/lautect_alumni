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
use App\gallery;
use App\image_category;


class GalleryController extends Controller
{
    public function index()
    {
        $image_cat = image_category::all();
        $settings = app_setting::all();     
        $header =home_body::select('home_body.*')
                         ->where('home_body.id', '=', 9)
                         ->first();
                        
        $gallery = gallery::join('image_categories','galleries.image_cat_id','=','image_categories.id')
                            ->select('galleries.*','image_categories.image_cate_name','image_categories.about')                   
                            ->get();                        
                         
     
         return view('pages.gallery',['settings'=>$settings[0], 'header'=> $header, 'galleries'=>$gallery,'image_cat'=>$image_cat]);
        }

}
