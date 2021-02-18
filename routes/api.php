<?php

use Illuminate\Http\Request;

/*
  |--------------------------------------------------------------------------
  | API Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register API routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | is assigned the "api" middleware group. Enjoy building your API!
  |
 */

Route::group([
    'namespace' => 'Api',
        ], function() {
    Route::post('register', 'RegisterController@register');
    Route::post('login', 'LoginController@login');
    Route::get('posts/test', 'PostController@test');

    Route::get('posts/{id}', 'PostController@show');
    Route::get('posts', 'PostController@index');

    Route::get('categories/{id}/posts', 'CategoriesController@posts');
    Route::get('categories/{id}', 'CategoriesController@show');
    Route::get('categories', 'CategoriesController@index');

    Route::get('tags', 'TagsController@index');
});

Route::group([
    'namespace' => 'Api',
    'middleware' => 'auth:api'
        ], function() {
    Route::put('posts/update/{id}', 'PostController@update');
    Route::post('posts/store', 'PostController@store');

    Route::post('logout', 'LoginController@logout');

    Route::get('/user', function(Request $request) {
        return $request->user();
    });
    
    Route::get('/profile', 'ProfileController@show');
    Route::put('/profile/update/{id}', 'ProfileController@update');
});
