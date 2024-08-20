<?php

namespace App\Http\Controllers;

use App\Contracts\MenuInterface;
use Inertia\Inertia;

class AllMenuController extends Controller
{
    protected $menuInterface;

    public function __construct(MenuInterface $menuInterface)
    {
        $this->menuInterface = $menuInterface;
    }

    public function all()
    {
        $menus = $this->menuInterface->getAllMenus();
        return Inertia::render('Admin/AllMenu', [
            'menus' => $menus
        ]);
    }
}
