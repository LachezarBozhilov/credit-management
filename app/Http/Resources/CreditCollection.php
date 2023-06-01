<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CreditCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return $this->collection->map(function ($item) {
            return [
                'id' => $item->id,
                'name' => $item->name,
                'amount' => $item->amount,
                "monthly_payment" => round($item->amount / $item->duration,2),
                "amount_paid" => $item->amount_paid,
                'duration' => $item->duration,
                'created_at' => $item->created_at->diffForHumans(),
                'updated_at' => $item->updated_at->diffForHumans(),
            ];
        });
    }
}
