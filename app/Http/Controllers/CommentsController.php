<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;
use Auth;

class CommentsController extends Controller
{
    public function store(Request $request) {
        $this->validate($request, [
            'message' => 'required'
        ]);

        $comment = new Comment();
        $comment->text = $request->get('message');
        $comment->user_id = Auth::user()->id;
        $comment->post_id = $request->get('post_id');
        $comment->save();
        
        return redirect()->back()->with('status', 'Ваш комментарий будет скоро добавлен!');
    }
}
