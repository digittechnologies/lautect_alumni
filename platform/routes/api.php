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
    //start user_cat
    Route::post('addusercat', 'ApiController@addusercat');
    Route::get('getusercat', 'ApiController@getusercat');
    //end user_cat
    //start member_cat
    Route::post('addmembercat', 'ApiController@addmembercat');
    Route::get('getmembercat', 'ApiController@getmembercat');
    //end member_cat
    //start association
    Route::post('addasso', 'ApiController@addasso');
    Route::get('getasso', 'ApiController@getasso');
    //end asso

    Route::get('getmember', 'ApiController@getmember');
    Route::get('getadmin', 'ApiController@getadmin');

    Route::get('getsettingapp', 'ApiController@getsettingapp');
    Route::post('addsettingapp', 'ApiController@addsettingapp');
    Route::post('updatesettingapp', 'ApiController@updatesettingapp');

    Route::get('gethomeheader', 'ApiController@gethomeheader');
    Route::post('addhomeheader', 'ApiController@addhomeheader');
    Route::post('addheader', 'ApiController@addheader');

    Route::get('getevent', 'ApiController@getevent');
    Route::post('addevent', 'ApiController@addevent');

    Route::get('geteventsch', 'ApiController@geteventsch');
    Route::post('addeventsch', 'ApiController@addeventsch');

    Route::get('getcareer', 'ApiController@getcareer');
    Route::post('addcareer', 'ApiController@addcareer');

    Route::get('getcareercat', 'ApiController@getcareercat');
    Route::post('addcareercat', 'ApiController@addcareercat');

    //gallery
    Route::get('getgallerycat', 'ApiController@getgallerycat');
    Route::post('addgallerycat', 'ApiController@addgallerycat');

    Route::get('getgallery', 'ApiController@getgallery');
    Route::post('addgallery', 'ApiController@addgallery');

    Route::get('getcat', 'ApiController@getcat');
    Route::post('addcat', 'ApiController@addcat');
    Route::get('getpeople', 'ApiController@getpeople');
    Route::post('addpeople', 'ApiController@addpeople');

    Route::get('getnewcat', 'ApiController@getnewcat');
    Route::post('addnewcat', 'ApiController@addnewcat');
    Route::get('getnews', 'ApiController@getnews');
    Route::post('addnews', 'ApiController@addnews');

    Route::get('getinterview', 'ApiController@getinter');
    Route::post('addinterview', 'ApiController@addinter');

    //userprofile
    Route::get('userprofile/{id}', 'UserApiController@userprofile');
    Route::post('userupdate', 'UserApiController@updateuser');
    Route::post('userdelete', 'UserApiController@deleteuser');
});