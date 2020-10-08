<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller {

    public function index(Request $request) {
        $perPage = $request->get('perPage', 15);
        //$posts = Post::all();
        $posts = Post::paginate($perPage);

        return $posts;
    }

    public function show($id) {
        $post = Post::where('id', $id)->firstOrFail();

        return $post;
    }

    public function store(Request $request) {
        $validation = Validator::make($request->all(), [
            'title' => 'required',
            'content' => 'required',
            'date' => 'required',
            'image' => 'nullable|image'
        ]);
        
        if ($validation->fails()) {
            $errors = $validation->messages()->toJson();
            return response()->json(["errors" => $errors]);
        }

        $post = Post::add($request->all());

        $post->uploadImage($request->file('image'));
        $post->setCategory($request->get('category_id'));
        $post->setTags($request->get('tags'));
        $post->toggleStatus($request->get('status'));
        $post->toggleFeatured($request->get('is_featured'));

        return response()->json([ "status" => 1, "message" => "Data save success." ]);
    }
    
    public function update(Request $request, $id) {
        $validation = Validator::make($request->all(), [
            'title' => 'required',
            'content' => 'required',
            'date' => 'required',
            'image' => 'nullable|image'
        ]);
        
        if ($validation->fails()) {
            $errors = $validation->messages()->toJson();
            return response()->json(["errors" => $errors]);
        }

        $post = Post::find($id);
        $post->edit($request->all());
        $post->uploadImage($request->file('image'));
        $post->setCategory($request->get('category_id'));
        $post->setTags($request->get('tags'));
        $post->toggleStatus($request->get('status'));
        $post->toggleFeatured($request->get('is_featured'));

        return response()->json([ "status" => 1, "message" => "Data save success." ]);
    }

}
