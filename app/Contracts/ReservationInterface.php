<?php
namespace App\Contracts;

use Illuminate\Http\Request;

interface ReservationInterface
{
    public function validateReservation(Request $request);
    public function createReservation(array $data);
    public function getAllReservations();
}
