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
use App\people_commitee;

class CommiteeController extends Controller
{
    public function index()
    {
 
        
        $settings = app_setting::all();     
        $header =home_body::select('home_body.*')
                         ->where('home_body.id', '=', 12)
                         ->first();
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
     
         return view('pages.commitee',['settings'=>$settings[0], 'header'=> $header, 'committee3'=>$committee3, 'committee2'=>$committee2, 'committee1'=>$committee1]);

    }
}
