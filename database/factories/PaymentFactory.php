<?php

namespace Database\Factories;

use App\Models\Credit;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class PaymentSeederFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    { 
        $creditIds = Credit::pluck('id')->toArray();
        
        return [
            'credit_id' => $this->faker->randomElement($creditIds),
            'amount' => $this->faker->numberBetween(10, 1000),
        ];
    }
}
