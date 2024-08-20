<?php

namespace App\Http\Controllers;
use App\Contracts\MenuInterface;
use Inertia\Inertia;

class HomeController extends Controller
{
    protected $menuInterface;

    public function __construct(MenuInterface $menuInterface)
    {
        $this->menuInterface = $menuInterface;
    }

    public function index()
    {
        $menus = $this->menuInterface->getAllMenus();
        return Inertia::render("Welcome", [
            'menus' => $menus
        ]);
    }
}
