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

}
