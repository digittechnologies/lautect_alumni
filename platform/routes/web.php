<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'Web\HomeController@index');

Route::get('/about', function () {
    return view('about');
});

Route::POST('/add-user', 'AuthController@login2')->name('add-user');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
