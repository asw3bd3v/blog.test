<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;
use Auth;

class AuthController extends Controller {

    // по сути выполняем обычную операцию создания нового пользователя
    public function register(Request $request) {
        $validation = Validator::make($request->all(), [
                    'name' => 'required',
                    'email' => 'required|email|unique:users',
                    'password' => 'required'
        ]);

        if ($validation->fails()) {
            $errors = $validation->messages()->toJson();
            return response()->json(["status" => 0, "errors" => $errors]);
        }

        $user = User::add($request->all());

        $user->generatePassword($request->get('password'));

        return response()->json(["status" => 1, "message" => "User success register"]);
    }

    public function login(Request $request) {
        $validation = Validator::make($request->all(), [
                    'email' => 'required|email',
                    'password' => 'required'
        ]);

        if ($validation->fails()) {
            $errors = $validation->messages()->toJson();
            return response()->json(["status" => 0, "errors" => $errors]);
        }

        if (Auth::attempt([
                    'email' => $request->get('email'),
                    'password' => $request->get('password')
                ])) {
            return response()->json(["status" => 1, "message" => "User success auth"]);
        }

        return response()->json(["status" => 0, "message" => "Wrong login or password"]);
    }

    public function logout() {
        Auth::logout();

        return response()->json(["status" => 1, "message" => "User success logout"]);
    }
    
    public function isAuth() {
        return 1;
    }

}
