<?php

namespace App\Http\Controllers;

use App\Http\Resources\CreditCollection;
use App\Http\Resources\CreditResource;
use App\Models\Credit;
use Illuminate\Http\Request;
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


    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'amount' => 'required|numeric|max:80000',
            'duration' => "required",
        ]);
        $creditCheck = Credit::where("name", $request->name)->get()->sum("amount");
        if ($creditCheck) {
            $creditAmountCheck = $creditCheck + $request->amount;
            if ($creditAmountCheck > 80000) {
                return to_route('credits.create')->with(
                    
                        "message","Failed to create credit. Credit holder cannot have total credit bigger than 80 000 user previous credits amount: " . $creditCheck                       
                   
                );
            }
        }
        $credit = new Credit();

        $credit->name = $request->name;
        $credit->amount = $request->amount;
        $credit->duration = $request->duration;
        $credit->amount_paid = 0;
        $credit->save();

        if ($credit) {
            return to_route('credits.index')->with("message", "Successfully created Credit");
        }
        return to_route('credits.create', ["message" => ["errors" => "Failed to create payment"]]);
    }
}
