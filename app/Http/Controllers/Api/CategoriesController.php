<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Category;

class CategoriesController extends Controller {

    public function index() {
        $categories = Category::all();

        return $categories;
    }

}
