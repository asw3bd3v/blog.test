<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Post;
use Auth;
use Carbon\Carbon;

class PostController extends Controller {

    public function index(Request $request) {
        $perPage = $request->get('perPage', 15);
        //$posts = Post::all();
        $posts = Post::with(['category', 'tags'])->orderBy('id', 'desc')->paginate($perPage);

        return $posts->toJson(JSON_UNESCAPED_UNICODE);
    }

    public function show($id) {
        $post = Post::with(['category', 'tags'])->where('id', $id)->get();
        return $post->toJson(JSON_UNESCAPED_UNICODE);
    }

    public function store(Request $request) {
        $validation = Validator::make($request->all(), [
                    'title' => 'required',
                    'content' => 'required',
                    'image' => 'nullable|image'
        ]);

        if ($validation->fails()) {
            $errors = $validation->messages()->toJson();
            return response()->json(["status" => 0, "errors" => $errors]);
        }

        $dateTime = new \DateTime();
        $date = $dateTime->format('d/m/y');
        $post = Post::add(array_merge([], $request->all(), ['date' => $date]));
        $post->user_id = Auth::user()->id;

        $post->uploadImage($request->file('image'));
        $post->setCategory($request->get('category_id'));

        $tags = $request->get('tags');
        if (is_string($tags)) {
            $tags = explode(',', $tags);
        }

        $post->setTags($tags);
        $post->toggleStatus($request->get('status'));
        $post->toggleFeatured($request->get('is_featured'));

        return response()->json(["status" => 1, "message" => "Data save success."]);
    }

    public function update(Request $request, $id) {
        $validation = Validator::make($request->all(), [
                    'title' => 'required',
                    'content' => 'required',
                    'image' => 'nullable|image'
        ]);

        if ($validation->fails()) {
            $errors = $validation->messages()->toJson();
            return response()->json(["status" => 0, "errors" => $errors]);
        }

        $post = Post::find($id);
        $post->edit($request->all());
        $post->uploadImage($request->file('image'));
        $post->setCategory($request->get('category_id'));
        
        $tags = $request->get('tags');
        if (is_string($tags)) {
            $tags = explode(',', $tags);
        }
        $post->setTags($tags);
        $post->toggleStatus($request->get('status'));
        $post->toggleFeatured($request->get('is_featured'));

        return response()->json(["status" => 1, "message" => "Data save success."]);
    }

}
