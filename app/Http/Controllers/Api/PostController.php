<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;
use App\Category;
use App\Tag;

class PostController extends Controller {

    public function index() {
        $posts = Post::all();

        return $posts;
    }

    public function show($id) {
        $post = Post::where('id', $id)->firstOrFail();

        return $post;
    }

    public function tag($slug) {
        $tag = Tag::where('slug', $slug)->firstOrFail();
        $posts = $tag->posts()->where('status', 1)->paginate(2);

        return view('pages.list', ['posts' => $posts]);
    }

    public function category($slug) {
        $category = Category::where('slug', $slug)->firstOrFail();
        $posts = $category->posts()->where('status', 1)->paginate(2);
        return view('pages.list', ['posts' => $posts]);
    }

}
