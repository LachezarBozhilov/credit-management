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
                Payment::latest()->paginate()
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
            'amount' => 'required',
            'credit_id' => 'required',

        ]);

        $credit = Credit::find($request->credit_id);

        $payment = new Payment();
        $paymentAmount = $request->amount;
        $payment->credit_id = $credit->id;

        if ($paymentAmount > $credit->amount) {
            $payment->amount = $credit->amount;
        } else {
            $payment->amount = $paymentAmount;
        }
        $payment->save();

        $credit->amount_paid += $payment->amount;
        $credit->save();

        // dd($payment);
        if ($payment) {
            return to_route('payments.index')->with("message", "Successfully created Payment");
        }
        return to_route('payments.create', ["message" => ["errors" => "Failed to create payment"]]);
    }
}
