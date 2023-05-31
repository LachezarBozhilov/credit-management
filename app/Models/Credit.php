<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Credit extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'amount', 'duration'];

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function remainingDebt()
    {
        return $this->amount - $this->payments()->sum('amount');
    }

    public function totalPayments()
    {
        return $this->payments()->sum('amount');
    }

    public function isFullyPaid()
    {
        return $this->remainingDebt() <= 0;
    }
}
