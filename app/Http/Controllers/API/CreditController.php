<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Credit;
use Illuminate\Http\Request;

class CreditController extends Controller
{
    public function index()
    {
        $credits = Credit::all();

        return response()->json([
            'credits' => $credits
        ]);
    }

    public function store(Request $request)
    {
        // Validate the input

        // Create a new credit
        $credit = new Credit();
        $credit->name = $request->input('name');
        $credit->amount = $request->input('amount');
        $credit->term = $request->input('term');
        $credit->save();

        return response()->json([
            'credit' => $credit
        ], 201);
    }
}
