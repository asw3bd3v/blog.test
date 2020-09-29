<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Category;
use App\Tag;

class HomeController extends Controller {

    public function index() {
        $posts = Post::paginate(5);
        
        // Для примера (используется в AppServiceProvider.php)
        // Получаем только id
        //$popularPosts = Post::orderBy('views', 'desc')->take(3)->pluck('id')->all();
        //$popularPosts = Post::orderBy('views', 'desc')->take(3)->get();

        return view('pages.index', [
            'posts' => $posts
        ]);
    }

    public function show($slug) {
        $post = Post::where('slug', $slug)->firstOrFail();

        return view('pages.show', compact('post'));
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
