<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\app_setting;
use App\home_page;
use App\event_tb;
use App\about;

class MemberController extends Controller
{
    public function index()
    {
 
     
    //  $settings = app_setting::all();     
    //  $responsibilities = about::join('about_category','abouts.about_cat_id','=','about_category.id')
    //                  ->select('abouts.*','about_category.cat_name')
    //                  ->where('about_category.id', '=', '2')
    //                  ->get();
 
     // return $responsibilities;
 
     return view('pages.members');
    }
}
