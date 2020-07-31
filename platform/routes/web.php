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

Route::get('/about', 'Web\AboutController@index');

Route::POST('/add-user', 'AuthController@login2')->name('add-user');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/members', 'Web\MemberController@index')->name('members');
Route::get('/events', 'Web\EventController@index')->name('events');
Route::get('/eventsDetails/{id}', 'Web\EventController@details')->name('eventsDetails');
Route::get('/gallery', 'Web\GalleryController@index')->name('gallery');

Route::get('/job', 'Web\JobController@index')->name('job');
Route::get('/scholarship', 'Web\ScholarshipController@index')->name('scholarship');
Route::get('/news', 'Web\NewsController@index')->name('news');
Route::get('/commitee', 'Web\CommiteeController@index')->name('commitee');

Route::get('/contactus', 'Web\ContactUsController@index')->name('contactus');
