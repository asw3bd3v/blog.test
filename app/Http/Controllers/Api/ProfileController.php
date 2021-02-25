<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use function response;

class ProfileController extends Controller {

    public function show() {
        return Auth::user();
    }

    public function update(Request $request, $id) {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                        "status" => 0,
                        "message" => 'User not found'
            ]);
        }

        $validation = $this->validator($request->all());

        if ($validation->fails()) {
            $errors = $validation->messages()->toJson();
            return response()->json([
                        "status" => 0,
                        "errors" => $errors
            ]);
        }

        $user->edit($request->all()); // сохраняем name, email
        $user->generatePassword($request->get('password'));

        $user->uploadAvatar($request->file('avatar'));

        return response()->json([
                    "status" => 1,
                    "message" => "User update success."
        ]);
    }

    protected function validator(array $data) {
        return Validator::make($data, [
                    'name' => 'required',
                    'email' => [
                        'nullable',
                        'email',
                        Rule::unique('users')->ignore(Auth::user()->id)
                    ],
                    'avatar' => 'nullable|image'
        ]);
    }

}
