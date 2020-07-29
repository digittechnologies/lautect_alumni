<?php
Route::group([
    'middleware' => 'api',
], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');

    //start auth
    Route::get('getauth', 'ApiController@getauth');
    Route::post('addauth', 'ApiController@addauth');
    Route::post('authupdate', 'UserApiController@updateauth');
    Route::post('authdelete', 'UserApiController@deleteauth');

    //end auth
//search
Route::post('searchauth', 'UserApiController@searchauth');
//search
    //About
    Route::post('addaboutus', 'ApiController@addaboutus');
    Route::get('getaboutcat', 'ApiController@getaboutcat');
    Route::get('getaboutus', 'ApiController@getaboutus');
    Route::post('aboutupdate', 'UserApiController@updateabout');
    Route::post('aboutdelete', 'UserApiController@deleteabout');
    //start user_cat
    Route::post('addusercat', 'ApiController@addusercat');
    Route::get('getusercat', 'ApiController@getusercat');
    Route::post('usercatupdate', 'UserApiController@updateusercat');
    Route::post('usercatdelete', 'UserApiController@deleteusercat');
    //end user_cat
    //start member_cat
    Route::post('addmembercat', 'ApiController@addmembercat');
    Route::get('getmembercat', 'ApiController@getmembercat');
    Route::post('membercatupdate', 'UserApiController@updatemembercat');
    Route::post('membercatdelete', 'UserApiController@deletemembercat');
    //end member_cat
    //start association
    Route::post('addasso', 'ApiController@addasso');
    Route::get('getasso', 'ApiController@getasso');
    Route::post('assoupdate', 'UserApiController@updateasso');
    Route::post('assodelete', 'UserApiController@deleteasso');
    //end asso

    

    Route::get('getsettingapp', 'ApiController@getsettingapp');
    Route::post('addsettingapp', 'ApiController@addsettingapp');
    Route::post('updatesettingapp', 'ApiController@updatesettingapp');

    Route::get('gethomeheader', 'ApiController@gethomeheader');
    Route::post('addhomeheader', 'ApiController@addhomeheader');
    Route::post('updatehomeheader', 'ApiController@updatehomeheader');
    Route::post('addheader', 'ApiController@addheader');
    Route::post('headerdelete', 'UserApiController@deleteheader');

    Route::get('getevent', 'ApiController@getevent');
    Route::post('addevent', 'ApiController@addevent');
    Route::post('eventupdate', 'UserApiController@updateevent');
    Route::post('eventdelete', 'UserApiController@deleteevent');

    Route::get('geteventsch', 'ApiController@geteventsch');
    Route::post('addeventsch', 'ApiController@addeventsch');
 Route::post('eventschupdate', 'UserApiController@updateeventsch');
    Route::post('eventschdelete', 'UserApiController@deleteeventsch');

    Route::get('getcareer', 'ApiController@getcareer');
    Route::post('addcareer', 'ApiController@addcareer');
    Route::post('careerupdate', 'UserApiController@updatecareer');
    Route::post('careerdelete', 'UserApiController@deletecareer');

    Route::get('getcareercat', 'ApiController@getcareercat');
    Route::post('addcareercat', 'ApiController@addcareercat');
    Route::post('careercatupdate', 'UserApiController@updatecareercat');
    Route::post('careercatdelete', 'UserApiController@deletecareercat');

    //gallery
    Route::get('getgallerycat', 'ApiController@getgallerycat');
    Route::post('addgallerycat', 'ApiController@addgallerycat');
    Route::post('gallerycatupdate', 'UserApiController@updategallerycat');
    Route::post('gallerycatdelete', 'UserApiController@deletegallerycat');
//gallery
    Route::get('getgallery', 'ApiController@getgallery');
    Route::post('addgallery', 'ApiController@addgallery');
    Route::post('galleryupdate', 'UserApiController@updategallery');
    Route::post('gallerydelete', 'UserApiController@deletegallery');
//category
    Route::get('getcat', 'ApiController@getcat');
    Route::post('addcat', 'ApiController@addcat');
    Route::post('catupdate', 'UserApiController@updatecat');
    Route::post('catdelete', 'UserApiController@deletecat');
//people
    Route::get('getpeople', 'ApiController@getpeople');
    Route::post('addpeople', 'ApiController@addpeople');
    Route::post('peopleupdate', 'UserApiController@updatepeople');
    Route::post('peopledelete', 'UserApiController@deletepeople');
//news category
    Route::get('getnewcat', 'ApiController@getnewcat');
    Route::post('addnewcat', 'ApiController@addnewcat');
    Route::post('newcatupdate', 'UserApiController@updatenewcat');
    Route::post('newcatdelete', 'UserApiController@deletenewcat');
//news
    Route::get('getnews', 'ApiController@getnews');
    Route::post('addnews', 'ApiController@addnews');
    Route::post('newupdate', 'UserApiController@updatenews');
    Route::post('newdelete', 'UserApiController@deletenews');
//interview
    Route::get('getinterview', 'ApiController@getinter');
    Route::post('addinterview', 'ApiController@addinter');
    Route::post('interviewupdate', 'UserApiController@updateinterview');
    Route::post('interviewdelete', 'UserApiController@deleteinterview');

    //user and profile
    Route::get('userprofile/{id}', 'UserApiController@userprofile');
    Route::post('userupdate', 'UserApiController@updateuser');
    Route::post('userdelete', 'UserApiController@deleteuser');
    Route::get('getmember', 'ApiController@getmember');
    Route::get('getadmin', 'ApiController@getadmin');
});