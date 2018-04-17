<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

class UserController extends BaseController
{
	public function login(){
		$data = ["data"=>"phu chinh"];
		return response()->json($data);
	}
}
