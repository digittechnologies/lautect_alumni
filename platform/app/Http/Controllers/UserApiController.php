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
        $datas=$request->formdata;
     $id=$datas['id'];
     if ($request->image){
      $file=$request->image;
      $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
     
      // $path= public_path('upload/document/'.$filename);
      // $path = public_path('/upload/document/' . $filename);
      // return $file;
   
  //  $base = base64_decode($file);  
  //  return $base;
  //  $destinationPath = public_path('upload/document/'.$filename);             
  //  file_put_contents($destinationPath, $base);
  //  $users->cv = $base; 
      // return $destinationPath;
      Image::make($file)->resize(440, 300)->save(public_path('/upload/uploads/'.$filename));

      $request->merge(['user_image'=>$filename]);
      $h=User::where('id', '=', $id)->first();
     
      $h->user_image = $request->user_image;
      $h->save();
  }
      $user =User::where('id',$id)->update($datas);
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
    


    public function updateusercat(Request $request)
    {
      
     $id=$request->id;
    //  $aid= auth()->user()->id;
    //  $request->merge(['updated_by'=>$aid]);
      $user =user_category::where('id',$id)->update($request->all());
      return $user;
       
    }


    public function deleteusercat(Request $request)
    {
       
     $id=$request->id;
      $user =user_category::where('id',$id)->delete();
      return $user;
      
    }
    public function updateabout(Request $request)
    {
      
        $datas=$request->formdata;
     $id=$datas['id'];
        // $request->merge(['about_cat_id'=>$datas['about_cat_id']]);
        $request->merge(['title'=>$datas['title']]);
        $request->merge(['content'=>$datas['content']]);
        $request->merge(['year'=>$datas['year']]);
          
            if ($request->image){
                $file=$request->image;
                $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
                Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
                $request->merge(['images'=>$filename]);
                // $apps->logo = $filename;
                DB::table('abouts')->where('id', $id)->update(['images' =>$filename]); 
            }
    //    return $request;
      $user =about::where('id',$id)->update($datas);
      return $user;
       
    }


    public function deleteabout(Request $request)
    {
       
     $id=$request->id;
      $user =about::where('id',$id)->delete();
      return $user;
      
    }

    public function updateeventsch(Request $request)
    {
      
     $id=$request->id;
    //  $aid= auth()->user()->id;
    //  $request->merge(['updated_by'=>$aid]);
      $user =event_schedule::where('id',$id)->update($request->all());
      return $user;
       
    }


    public function deleteeventsch(Request $request)
    {
       
     $id=$request->id;
      $user =event_schedule::where('id',$id)->delete();
      return $user;
      
    }
    public function updateevent(Request $request)
    {
      
     
     $datas=$request->formdata;
     $request->merge(['event_name'=>$datas['event_name']]);
     $request->merge(['subject'=>$datas['subject']]);
     $request->merge(['content'=>$datas['content']]);
     $request->merge(['start_date'=>$datas['start_date']]);
     $request->merge(['start_time'=>$datas['start_time']]);
     $request->merge(['end_time'=>$datas['end_time']]);
     $request->merge(['end_date'=>$datas['end_date']]);
     $request->merge(['address'=>$datas['address']]);
     $id=$datas['id'];

     //   return $request;
         if ($request->image){
             $file=$request->image;
             $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
             Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
             $request->merge(['event_image'=>$filename]);
             // $apps->logo = $filename;
             $u=event_tb::where('id',$id)->first();
             $u->event_image=$filename;
             $u->save();
         }
 //    return $request;
      $user =event_tb::where('id',$id)->update($datas);
      return $user;
       
    }


    public function deleteevent(Request $request)
    {
       
     $id=$request->id;
      $user =event_tb::where('id',$id)->delete();
      return $user;
      
    }
    public function updatemembercat(Request $request)
    {
      
     $id=$request->id;
      $user =member_category::where('id',$id)->update($request->all());
      return $user;
       
    }


    public function deletemembercat(Request $request)
    {
       
     $id=$request->id;
      $user =member_category::where('id',$id)->delete();
      return $user;
      
    }

    public function updateasso(Request $request)
    {
      
     $id=$request->id;
      $user =association::where('id',$id)->update($request->all());
      return $user;
       
    }


    public function deleteasso(Request $request)
    {
       
     $id=$request->id;
      $user =association::where('id',$id)->delete();
      return $user;
      
    }

    public function updatecareer(Request $request)
    {
      
        $aid= auth()->user()->id;
        $request->merge(['updated_by'=>$aid]);
        $datas=$request->formdata;
        $id=$datas['id'];
        $request->merge(['car_name'=>$datas['car_name']]);
        $request->merge(['title'=>$datas['title']]);
        $request->merge(['content'=>$datas['content']]);
        $request->merge(['location'=>$datas['location']]);
        $request->merge(['information'=>$datas['information']]);
        $request->merge(['address'=>$datas['address']]);
       
        $request->merge(['address'=>$datas['address']]);
        // $request->merge(['car_cat_id'=>$datas['car_cat_id']]);
        //   return $request;
            if ($request->image){
                $file=$request->image;
                $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
                Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
                $request->merge(['car_image'=>$filename]);
                // $apps->logo = $filename;
                $u=career::where('id',$id)->first();
                $u->car_image=$filename;
                $u->save();
            }
    //    return $request;
    $user =career::where('id',$id)->update($datas);
    $u=career::where('id',$id)->first();
    $u->updated_by=$aid;
    $u->save();
     
      return $user;
       
    }


    public function deletecareer(Request $request)
    {
       
     $id=$request->id;
      $user =career::where('id',$id)->delete();
      return $user;
      
    }
    public function updatecareercat(Request $request)
    {
      
     $id=$request->id;
     $aid= auth()->user()->id;
     $request->merge(['updated_by'=>$aid]);
      $user =career_category::where('id',$id)->update($request->all());
      return $user;
       
    }


    public function deletecareercat(Request $request)
    {
       
     $id=$request->id;
      $user =career_category::where('id',$id)->delete();
      return $user;
      
    }

    public function updategallery(Request $request)
    {
      
        // $datas=$request->formdata;
        // // $request->merge(['image_cat_id'=>$datas['image_cat_id']]);
        // $request->merge(['image_name'=>$datas['image_name']]);
        // $request->merge(['video'=>$datas['video']]);
        // $id=$datas['id'];
        //     if ($request->image){
        //         $file=$request->image;
        //         $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
        //         Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
        //         $request->merge(['file'=>$filename]);
        //         // $apps->logo = $filename;
        //         DB::table('galleries')->where('id', $id)->update(['file' =>$filename]); 


        //     }
      //  return $request;
      $user =gallery::where('id',$request->id)->update($request->all());
      return $user;
       
    }


    public function deletegallery(Request $request)
    {
       
     $id=$request->id;
      $user =gallery::where('id',$id)->delete();
      return $user;
      
    }

    public function updategallerycat(Request $request)
    {
      
     $id=$request->id;
      $user =image_category::where('id',$id)->update($request->all());
      return $user;
       
    }


    public function deletegallerycat(Request $request)
    {
       
     $id=$request->id;
      $user =image_category::where('id',$id)->delete();
      return $user;
      
    }

    public function updatecat(Request $request)
    {
      
     $id=$request->id;
      $user =app_category::where('id',$id)->update($request->all());
      return $user;
       
    }


    public function deletecat(Request $request)
    {
       
     $id=$request->id;
      $user =app_category::where('id',$id)->delete();
      return $user;
      
    }
    public function updatepeople(Request $request)
    {
        $datas=$request->formdata;
        $id=$datas['id'];
        // $request->merge(['category_id'=>$datas['category_id']]);
        $request->merge(['p_name'=>$datas['name']]);
        $request->merge(['p_about'=>$datas['about']]);
        $request->merge(['p_position'=>$datas['position']]);
        $request->merge(['link_id'=>$datas['link_id']]);
        $aid= auth()->user()->id;
        $request->merge(['updated_by'=>$aid]);
            if ($request->image){
                $file=$request->image;
                $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
                Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
                $request->merge(['p_image'=>$filename]);
                // $apps->logo = $filename;
                DB::table('people_commitees')->where('id', $id)->update(['p_image' =>$filename]); 
               
            }
      $user =people_commitee::where('id',$id)->update($datas);
      DB::table('people_commitees')->where('id', $id)->update(['updated_by' =>$aid]); 

      return $user;
       
    }


    public function deletepeople(Request $request)
    {
       
     $id=$request->id;
      $user =people_commitee::where('id',$id)->delete();
      return $user;
      
    }

    public function updatenews(Request $request)
    {
      
     
     $datas=$request->formdata;
     $id=$datas['id'];
        // $request->merge(['category_id'=>$datas['category_id']]);
        $request->merge(['blog_name'=>$datas['blog_name']]);
        $request->merge(['blog_title'=>$datas['blog_title']]);
        $request->merge(['content1'=>$datas['content1']]);
        $request->merge(['link'=>$datas['link']]);
        $request->merge(['content2'=>$datas['content2']]);
        $request->merge(['content3'=>$datas['content3']]);
        $authid= auth()->user()->id;
     $request->merge(['updated_by'=>$authid]);
            if ($request->image){
                $file=$request->image;
                $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
                Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
                $request->merge(['blog_image'=>$filename]);
                // $apps->logo = $filename;
                DB::table('blogs')->where('id', $id)->update(['blog_image' =>$filename]); 
               
            }

    //    return $request;
            $u=blog::where('id',$id)->update($datas);
            DB::table('blogs')->where('id', $id)->update(['updated_by' =>$authid]); 
      return $u;
       
    }


    public function deletenews(Request $request)
    {
       
     $id=$request->id;
      $user =blog::where('id',$id)->delete();
      return $user;
      
    }
    public function updatenewcat(Request $request)
    {
      
     $id=$request->id;
      $user =blogs_category::where('id',$id)->update($request->all());
      return $user;
       
    }


    public function deletenewcat(Request $request)
    {
       
     $id=$request->id;
      $user =blogs_category::where('id',$id)->delete();
      return $user;
      
    }

    public function updateinterview(Request $request)
    {
      
     
     $datas=$request->formdata;
     $id=$datas['id'];
     $request->merge(['inter_name'=>$datas['inter_name']]);
     $request->merge(['inter_position'=>$datas['inter_position']]);
     $request->merge(['content'=>$datas['content']]);
     $request->merge(['link'=>$datas['link']]);
    
     $authid= auth()->user()->id;
     $request->merge(['updated_by'=>$authid]);
         if ($request->image){
             $file=$request->image;
             $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
             Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
             $request->merge(['inter_image'=>$filename]);
             DB::table('interviews')->where('id', $id)->update(['inter_images' =>$filename]); 
             
            
         }
 //    return $request;
         $u=interview::where('id',$id)->update($datas);
         DB::table('interviews')->where('id', $id)->update(['updated_by' =>$authid]); 
        
      return $u;
       
    }


    public function deleteinterview(Request $request)
    {
       
     $id=$request->id;
      $user =interview::where('id',$id)->delete();
      return $user;
      
    }
}

