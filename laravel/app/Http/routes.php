<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


    Route::get('/', function () {
        return view('welcome');
    });



    Route::resource('/db', 'Actions'); //actions to work with page table

    Route::get('/db/menu/{menu}','Actions@menu');

    Route::resource('/contact', 'ContactUsController'); //actions to work with contactus table

    Route::resource('/user', 'UserController'); //actions to work with User table


    Route::resource('/sign', 'NewsLetterController'); //actions to work with Signups table

    Route::resource('/prom', 'PromotionController'); //actions to work with Promotions table





