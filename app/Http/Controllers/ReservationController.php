<?php
namespace App\Http\Controllers;

use App\Contracts\ReservationInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ReservationController extends Controller
{
    protected $reservationInterface;

    public function __construct(ReservationInterface $reservationInterface)
    {
        $this->reservationInterface = $reservationInterface;
    }

    public function index()
    {
        $booking = $this->reservationInterface->getAllReservations();
        return Inertia::render("Admin/Reservation", [
            'booking' => $booking
        ]);
    }

    public function store(Request $request)
    {
        $validate = $this->reservationInterface->validateReservation($request);

        if ($validate->fails()) {
            return Redirect::back()->withErrors($validate)->withInput();
        }

        $data = $request->only(['name', 'email', 'date_time', 'person', 'request']);
        $this->reservationInterface->createReservation($data);

        return redirect()->route('home');
    }
}
