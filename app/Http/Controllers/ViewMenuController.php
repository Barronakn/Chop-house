<?php

namespace App\Http\Controllers;

use App\Contracts\MenuInterface;
use Inertia\Inertia;

class ViewMenuController extends Controller
{
    protected $menuInterface;

    public function __construct(MenuInterface $menuInterface)
    {
        $this->menuInterface = $menuInterface;
    }

    public function view($id)
    {
        $menu = $this->menuInterface->getMenu($id);
        return Inertia::render("Admin/ViewMenu", [
            'menu' => $menu
        ]);
    }
}
