<?php

namespace App\Http\Controllers;

use App\Http\Resources\CreditCollection;
use App\Http\Resources\PaymentCollection;
use App\Http\Resources\PaymentResource;
use App\Models\Credit;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function index()
    {
        // dd(Credits::all())
        return Inertia::render('Payments/Index', [
            'payments' => new PaymentCollection(
                Payment::paginate()
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Payments/Create', [
            "credits" => new CreditCollection(
                Credit::all()
            ),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'amoung' => 'required|unique:posts|max:255',
            'credit_id' => 'required',
            
        ]);

        $credit = Credit::find($request->credit_id);
        // dd($credit, $request);
        
        $remainingDebt = $credit->amount - $credit->payments()->sum('amount');
        $paymentAmount = $request->amount;
        if ($paymentAmount > $remainingDebt) {
            $paymentAmount = $remainingDebt;
        }
      
        $payment = new Payment();
        $payment->credit_id = $credit->id;
        $payment->amount = $paymentAmount;
        $payment->save();

        // return redirect()->route("")
        return redirect()->route('payments')->with('status', 'Profile updated!');
    }
}
