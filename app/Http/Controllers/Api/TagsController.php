<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Tag;

class TagsController extends Controller {

    public function index() {
        $tags = Tag::all();

        return $tags;
    }

    public function posts(Request $request, $id) {
        $perPage = $request->get('perPage', 15);
        $tag = Tag::where('id', $id)->firstOrFail();
        $posts = $tag->posts()->where('status', 0)->paginate($perPage);

        return $posts;
    }
}
