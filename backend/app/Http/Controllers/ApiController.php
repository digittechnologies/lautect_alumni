<?php

namespace App\Http\Controllers;

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
use App\career_category;
use App\career;
use App\event_schedule;
use App\event;
use App\gallery;
use App\home_page;
use App\image_category;
class ApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addhomeheader(Request $request)
    {
        // return $request;
      
        $datas=$request->formdata;
        $request->merge(['component1'=>$datas['component1']]);
        $request->merge(['component2'=>$datas['component2']]);
        $request->merge(['component3'=>$datas['component3']]);
          
            if ($request->image){
                $file=$request->image;
                $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
                Image::make($file)->resize(300, 300)->save(public_path('/upload/upload/'.$filename));
                $request->merge(['home_image'=>$filename]);
                // $apps->logo = $filename;
               
            }
    //    return $request;
            $u=home_page::create($request->all());
            if ($u) {
                return response()->json(['success' => 'You have successfully'], 200);
            }
          
            //  return $apps;
           return response()->json(['success' => 'Not save'], 200);
            
    }
    public function gethomeheader()
    {
        return response()->json(
            
          home_page::get()
         
        );
       
    }

    public function addaboutus(Request $request)
    {
        // return $request;
      
        $datas=$request->formdata;
        $request->merge(['about_name'=>$datas['about_name']]);
        $request->merge(['title'=>$datas['title']]);
        $request->merge(['content'=>$datas['content']]);
        $request->merge(['year'=>$datas['year']]);
          
            if ($request->imag){
                $file=$request->imag;
                $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
                // Image::make($file)->resize(300, 300)->save(public_path('/upload/upload/'.$filename));
                $request->merge(['images'=>$filename]);
                // $apps->logo = $filename;
               
            }
    //    return $request;
            $u=about::create($request->all());
            if ($u) {
                return response()->json(['success' => 'You have successfully'], 200);
            }
          
            //  return $apps;
           return response()->json(['success' => 'Not save'], 200);
            
    }
    public function getaboutus()
    {
        return response()->json(
            
          about::get()
         
        );
       
    }
    public function updatesettingapp(Request $request)
    {
        // return $request;
        $id= auth()->user()->id;
        $datas=$request->formdata;
        $apps=app_setting::where('id','=',$datas['id'])->first();
        $currentfile= $apps['logo'];
         
        // return  $user;
          
            if ($request->image != $currentfile){
                $file=$request->image;
                $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
                // Image::make($file)->resize(300, 300)->save(public_path('/upload/upload/'.$filename));
              
                $apps->logo = $filename;
               
            }
            // $user = new user;
            $apps->app_name = $datas['app_name'];
            $apps->short_name = $datas['short_name'];
            $apps->email2 = $datas['email2'];
         $apps->email1 =  $datas['email1'];
         $apps->updated_by =  $id;
        $apps->address =  $datas['address'];
         $apps->phone_number =  $datas['phone_number'];
         $apps->facebook =  $datas['facebook'];
         $apps->instagram =  $datas['instagram'];
         $apps->youtube =  $datas['youtube'];
         $apps->linkedin =  $datas['linkedin'];
         $apps->twitter =  $datas['twitter'];
        $apps->save();
            
            //  return $apps;
           return response()->json(['success' => 'You have successfully uploaded an image'], 200);
            
    }
    public function getsettingapp()
    {
        return response()->json(
            
          app_setting::first()
         
        );
       
    }

    public function getauth()
    {
        return response()->json(
            
            [

         'authcount' =>authentication::count(),
        'auth'=>authentication::inRandomOrder()->limit(20000)
        ->get()
            ]
        );
       
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addusercat(Request $request)
    {
        $authid=auth()->user()->id;
        
         $request->merge(['created_by'=>$authid]);
         $u=user_category::create($request->all());
         if ($u) {
             return "true";
         }
       return "false";
    }

    public function getusercat()
    {
        return user_category::join('users','user_categories.created_by','=','users.id')
        ->select('user_categories.*','users.name')
    ->get();
    }
    
      public function addmembercat(Request $request)
    {
       
         $u=member_category::create($request->all());
         if ($u) {
             return "true";
         }
       return "false";
    }

    public function getmembercat()
    {
        return member_category::get();
    }
    public function addasso(Request $request)
    {
       
         $u=association::create($request->all());
         if ($u) {
             return "true";
         }
       return "false";
    }

    public function getasso()
    {
        return association::get();
    }

    public function getmember()
    {
        return response()->json(
            
            [

        'usercount' =>User::where('user_cat_id','=','1')->count(),
        'user'=>User::join('authentications','users.auth_id','=','authentications.id')
        ->select('users.*','authentications.matric_no')->where('users.user_cat_id','=','1')->inRandomOrder()->limit(20000)
        ->get()
            ]
        );
    }

    public function getadmin()
    {
        return response()->json(
            
            [

        'usercount' =>User::where('user_cat_id','=','2')->count(),
        'user'=>User::where('users.user_cat_id','=','2')->inRandomOrder()->limit(20000)
        ->get()
            ]
        );
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
