<?php

namespace App\Http\Controllers;

use App\Contracts\MenuInterface;

class DeleteMenuController extends Controller
{
    protected $menuInterface;

    public function __construct(MenuInterface $menuInterface)
    {
        $this->menuInterface = $menuInterface;
    }

    public function delete($id)
    {
        $this->menuInterface->deleteMenu($id);

        return redirect()->route('menu');
    }
}
