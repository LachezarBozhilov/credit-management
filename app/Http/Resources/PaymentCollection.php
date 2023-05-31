<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PaymentCollection extends ResourceCollection
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
                'name' => $item->credit->name,
                'amount' => $item->amount,
                'created_at' => $item->created_at->diffForHumans(),
                'updated_at' => $item->updated_at->diffForHumans(),
            ];
        });
    }
}
