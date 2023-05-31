<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Users/Index', [
            'filters' => Request::all('search'),
            'users' => new UserCollection(
                User::all()
            ),
        ]);
    }


}
