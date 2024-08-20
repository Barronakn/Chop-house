<?php
namespace App\Http\Controllers;

use App\Contracts\MenuInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EditMenuController extends Controller
{
    protected $menuInterface;

    public function __construct(MenuInterface $menuInterface)
    {
        $this->menuInterface = $menuInterface;
    }

    public function edit($id)
    {
        $menu = $this->menuInterface->getMenu($id);
        return Inertia::render('Admin/EditMenu', [
            'menu' => $menu
        ]);
    }

    public function update(Request $request, $id)
    {
        $data = $request->only(['food', 'desc', 'price', 'category']);

        if ($request->hasFile('image')) {
            $data['image_path'] = $this->menuInterface->storeMenuImage($request);
        }

        $this->menuInterface->updateMenu($id, $data);

        return redirect('/all/menu')->with('success', 'Menu updated successfully');
    }
}
