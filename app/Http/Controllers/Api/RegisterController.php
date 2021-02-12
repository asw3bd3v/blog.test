<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Auth\Events\Registered;

class RegisterController extends Controller {
    /*
      |--------------------------------------------------------------------------
      | Register Controller
      |--------------------------------------------------------------------------
      |
      | This controller handles the registration of new users as well as their
      | validation and creation. By default this controller uses a trait to
      | provide this functionality without requiring any additional code.
      |
     */

use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('guest');
    }
    
    public function register(Request $request)
    {
        $validation = $this->validator($request->all());
        
        if ($validation->fails()) {
            $errors = $validation->messages()->toJson();
            return response()->json(["status" => 0, "errors" => $errors]);
        }

        event(new Registered($user = $this->create($request->all())));

        $this->guard()->login($user);

        return $this->registered($request, $user)
                        ?: redirect($this->redirectPath());
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data) {
        return Validator::make($data, [
                    'name' => 'required',
                    'email' => 'required|email|unique:users',
                    'password' => 'required',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data) {
//        $validation = Validator::make($data, [
//                    'name' => 'required',
//                    'email' => 'required|email|unique:users',
//                    'password' => 'required',
//        ]);
//
//        if ($validation->fails()) {
//            $errors = $validation->messages()->toJson();
//            return response()->json(["status" => 0, "errors" => $errors]);
//        }

        $user = User::add([
                    'name' => $data['name'],
                    'email' => $data['email'],
                    'password' => $data['password']
        ]);

        $user->generatePassword($data['password']);
        $user->generateApiToken();

        return $user;
    }

    protected function registered(Request $request, $user) {
        return response()->json(['data' => $user->toArray()], 201);
    }

}
