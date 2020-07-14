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
use App\event_tb;
use App\gallery;
use App\home_page;
use App\image_category;
use App\interview;
use App\people_commitee;

class ApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addcareer(Request $request)
    {
        // return $request;
        $id= auth()->user()->id;
        $request->merge(['created_by'=>$id]);
        $datas=$request->formdata;
        $request->merge(['car_name'=>$datas['car_name']]);
        $request->merge(['title'=>$datas['title']]);
        $request->merge(['content'=>$datas['content']]);
        $request->merge(['location'=>$datas['location']]);
        $request->merge(['information'=>$datas['information']]);
        $request->merge(['address'=>$datas['address']]);
       
        $request->merge(['address'=>$datas['address']]);
        $request->merge(['car_cat_id'=>$datas['car_cat_id']]);
        //   return $request;
            if ($request->image){
                $file=$request->image;
                $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
                Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
                $request->merge(['car_image'=>$filename]);
                // $apps->logo = $filename;
               
            }
    //    return $request;
            $u=career::create($request->all());
            if ($u) {
                return response()->json(['success' => 'You have successfully'], 200);
            }
          
            //  return $apps;
           return response()->json(['error' => 'Not save'], 200);
            
    }
    public function getcareer()
    {
        return response()->json(
            
          career::orderBy('careers.id','desc')->join('career_categories','careers.car_cat_id','=','career_categories.id')
          ->select('careers.*', 'career_categories.car_cat_name')->get()
         
        );
       
    }
    public function addcareercat(Request $request)
    {
        // return $request;
       
        $id= auth()->user()->id;
        $request->merge(['created_by'=>$id]);
    //    return $request;
            $u=career_category::create($request->all());
            if ($u) {
                return response()->json(['success' => 'You have successfully'], 200);
            }
          
            //  return $apps;
           return response()->json(['error' => 'Not save'], 200);
            
    }
    public function getcareercat()
    {
        return response()->json(
            
         career_category::orderBy('id','desc')->get()
         
        );
       
    }
    public function addevent(Request $request)
    {
        // return $request;
       
        $datas=$request->formdata;
        $request->merge(['event_name'=>$datas['event_name']]);
        $request->merge(['subject'=>$datas['subject']]);
        $request->merge(['content'=>$datas['content']]);
        $request->merge(['start_date'=>$datas['start_date']]);
        $request->merge(['start_time'=>$datas['start_time']]);
        $request->merge(['end_time'=>$datas['end_time']]);
        $request->merge(['end_date'=>$datas['end_date']]);
        $request->merge(['address'=>$datas['address']]);
        //   return $request;
            if ($request->image){
                $file=$request->image;
                $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
                Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
                $request->merge(['event_image'=>$filename]);
                // $apps->logo = $filename;
               
            }
    //    return $request;
            $u=event_tb::create($request->all());
            if ($u) {
                return response()->json(['success' => 'You have successfully'], 200);
            }
          
            //  return $apps;
           return response()->json(['error' => 'Not save'], 200);
            
    }
    public function getevent()
    {
        return response()->json(
            
          event_tb::orderBy('id','desc')->get()
         
        );
       
    }
    public function addeventsch(Request $request)
    {
        // return $request;
       
        $id= auth()->user()->id;
        $request->merge(['created_by'=>$id]);
    //    return $request;
            $u=event_schedule::create($request->all());
            if ($u) {
                return response()->json(['success' => 'You have successfully'], 200);
            }
          
            //  return $apps;
           return response()->json(['error' => 'Not save'], 200);
            
    }
    public function geteventsch()
    {
        return response()->json(
            
          event_schedule::orderBy('event_schedules.id','desc')->join('event_tbs','event_schedules.event_id','=','event_tbs.id')
          ->select('event_schedules.*', 'event_tbs.event_name')->get()
         
        );
       
    }
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
                Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
                $request->merge(['home_image'=>$filename]);
                // $apps->logo = $filename;
               
            }
    //    return $request;
            $u=home_page::create($request->all());
            if ($u) {
                return response()->json(['success' => 'You have successfully'], 200);
            }
          
            //  return $apps;
           return response()->json(['error' => 'Not save'], 200);
            
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
                Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
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
    public function addsettingapp(Request $request)
    {
       
        $datas=$request->formdata;
         
    
        $apps = new app_setting;
            if ($request->image ){
                $file=$request->image;
                $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
                Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
              
                $apps->logo = $filename;
               
            }
           
            $apps->app_name = $datas['app_name'];
            $apps->short_name = $datas['short_name'];
            $apps->email2 = $datas['email2'];
         $apps->email1 =  $datas['email1'];
       
        $apps->address =  $datas['address'];
         $apps->phone_number =  $datas['phone_number'];
         $apps->facebook =  $datas['facebook'];
         $apps->instagram =  $datas['instagram'];
         $apps->youtube =  $datas['youtube'];
         $apps->linkedin =  $datas['linkedin'];
         $apps->twitter =  $datas['twitter'];
         $apps->url =  $datas['url'];
        $apps->save();
            
            
           return response()->json(['success' => 'You have successfully uploaded an image'], 200);
            
    }
    public function updatesettingapp(Request $request)
    {
        
        $id= auth()->user()->id;
        $datas=$request->formdata;
        $apps=app_setting::where('id','=',$datas['id'])->first();
       
          
            if ($request->image){
                $file=$request->image;
                $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
                Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
              
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
         $apps->url =  $datas['url'];
        $apps->save();
            
          
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
