<?php
Route::group([
    'middleware' => 'api',
], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');

    //start auth
    Route::get('getauth', 'ApiController@getauth');
    //end auth
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

    Route::get('getevent', 'ApiController@getevent');
    Route::post('addevent', 'ApiController@addevent');

    Route::get('geteventsch', 'ApiController@geteventsch');
    Route::post('addeventsch', 'ApiController@addeventsch');

    Route::get('getcareer', 'ApiController@getcareer');
    Route::post('addcareer', 'ApiController@addcareer');

    Route::get('getcareercat', 'ApiController@getcareercat');
    Route::post('addcareercat', 'ApiController@addcareercat');

});