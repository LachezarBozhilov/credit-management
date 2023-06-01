# Introduction

Credits management app created with laravel , react and inertia

# How to run it

1. Using docker

-   doker-compose -f doker/docker-compose up
-   open http://localhost:8080

2. Manualy running it

-   composer install
-   cp .env.example .env
-   change the .env to suit your environment
-   php artisan key:generate
-   php artisan migrate:fresh --seed
-   npm install
-   npm run dev
-   Open localhost

## Requirements

1. Form for creating a new loan with the following fields:

    - name of the borrower
    - amount in BGN
    - term from 1 to 12 months

2. List of all credits in tabular form. Each credit is located on a new line in the table, and for each credit the name of the borrower, the amount, the term and the monthly installment are visible.

3. Form for entering a new payment for a given loan. It has to contain:
    - a drop-down menu from which to select the credit on which the payment will be made
    - amount in BGN

Conditions:

-   Show credits list on startup
-   Each credit should have a unique identification code
-   One borrower cannot have loans with a total value of more than BGN 80,000.
-   Paying on credit should reduce the amount owed
-   If a payment is attempted that exceeds the remaining amount due, only the amount owed should be withdrawn and the user notified
-   Visual design is irrelevant
-   You can write procedurally or object-oriented
-   You can use a database of your choice
