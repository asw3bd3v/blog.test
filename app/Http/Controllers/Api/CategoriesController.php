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

    public function show($id) {
        $category = Category::where('id', $id)->get();

        return $category;
    }

    public function posts(Request $request, $id) {
        $perPage = $request->get('perPage', 15);
        $category = Category::where('id', $id)->firstOrFail();
        $posts = $category->posts()->where('status', 1)->paginate($perPage);

        return $posts;
    }

}
