<?php
namespace App\Http\Controllers;

use App\Contracts\MenuInterface;
use Inertia\Inertia;

class MenuController extends Controller
{
    protected $menuInterface;

    public function __construct(MenuInterface $menuInterface)
    {
        $this->menuInterface = $menuInterface;
    }

    public function index()
    {
        $menus = $this->menuInterface->getAllMenus();
        return Inertia::render("Menus", [
            'menus' => $menus
        ]);
    }
}
