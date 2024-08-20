<?php
namespace App\Services;

use App\Contracts\ReservationInterface;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReservationService implements ReservationInterface
{
    public function validateReservation(Request $request)
    {
        return Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'date_time' => 'required|date',
            'person' => 'required|string|max:255',
            'request' => 'required|string|max:255'
        ]);
    }

    public function createReservation(array $data)
    {
        Reservation::create($data);
    }

    public function getAllReservations()
    {
        return Reservation::all();
    }
}
