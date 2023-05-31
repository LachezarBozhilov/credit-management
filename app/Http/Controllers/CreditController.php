<?php

namespace App\Http\Controllers;

use App\Http\Resources\CreditCollection;
use App\Http\Resources\CreditResource;
use App\Models\Credit;
// use App\Models\User;
use Inertia\Inertia;

class CreditController extends Controller
{
    public function index()
    {
        // dd(Credits::all())
        return Inertia::render('Credits/Index', [
            'credits' => new CreditCollection(
                Credit::paginate()
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Credits/Create');
    }
}
