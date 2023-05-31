<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Credit;
use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function store(Request $request)
    {
        // Validate the input

        // Get the selected credit
        $credit = Credit::find($request->credit_id);

        // Check if the payment amount is greater than the remaining debt
        $remainingDebt = $credit->amount - $credit->payments()->sum('amount');
        $paymentAmount = $request->input('amount');
        if ($paymentAmount > $remainingDebt) {
            $paymentAmount = $remainingDebt;
        }

        // Create a new payment
        $payment = new Payment();
        $payment->credit_id = $credit->id;
        $payment->amount = $paymentAmount;
        $payment->save();

        return response()->json(['payment' => $payment], 201);
    }

}
