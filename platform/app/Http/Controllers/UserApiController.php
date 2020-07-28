<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\association;
use App\authentication;
use App\User;
use App\user_category;
use App\member_category;
use App\app_setting;
use Image;
use App\about;
use App\app_category;
use App\blog;
use App\blogs_category;
use App\career_category;
use App\career;
use App\event_schedule;
use App\event_tb;
use App\gallery;
use App\home_page;
use App\image_category;
use App\interview;
use App\people_commitee;
class UserApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function userprofile($id)
    {
        return response()->json(
            
            User::where('id',$id)->first()
           
          );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function searchauth(Request $request)
    {
        //
        $s=$request->search;
    //    return $request;
  return  authentication::where('matric_no',$s)->orWhere('fullname',$s)->get();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateuser(Request $request)
    {
        // $upid= auth()->user()->id;
        // $request->merge(['updated_by'=>$upid]);
     $id=$request->id;
      $user =User::where('id',$id)->update($request->all());
      return $user;
        // $user=DB::table('users')
        // ->where('id', $id)
        // ->update(['status' =>'T']); 
        // return $trash;
            // if($trash){
            //     return '
            //         "success":"true"
            //     ';
            // }
    }


    public function deleteuser(Request $request)
    {
       
     $id=$request->id;
      $user =User::where('id',$id)->delete();
      return $user;
      
    }

    public function updateauth(Request $request)
    {
      
     $id=$request->id;
      $user =authentication::where('id',$id)->update($request->all());
      return $user;
       
    }


    public function deleteauth(Request $request)
    {
       
     $id=$request->id;
      $user =authentication::where('id',$id)->delete();
      return $user;
      
    }


    public function deleteheader(Request $request)
    {
       
     $id=$request->id;
      $header =home_page::where('id',$id)->delete();
      return $header;
      
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
