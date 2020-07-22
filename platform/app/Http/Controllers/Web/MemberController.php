<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\app_setting;
use App\home_page;
use App\event_tb;
use App\about;
use App\User;

class MemberController extends Controller
{
       
    public function index()
    {
 
    $settings = app_setting::all();        
     $users = User::join('member_categories','Users.user_cat_id','=','member_categories.id')
                     ->select('users.*','member_categories.member_cat_name')
                    //  ->where('about_category.id', '=', '3')
                     ->get();

    $count_users = User::join('member_categories','Users.user_cat_id','=','member_categories.id')
                     ->select('users.*','member_categories.member_cat_name')
                    //  ->where('about_category.id', '=', '3')
                     ->count();
                     
   
            return view('pages.members',['settings'=>$settings[0], 'users'=>$users, 'countU'=>$count_users]);
    } 

}
