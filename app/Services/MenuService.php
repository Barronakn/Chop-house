<?php
namespace App\Services;

use App\Contracts\MenuInterface;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MenuService implements MenuInterface
{
    public function validateMenu(Request $request)
    {
        return Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'food' => 'required|string|max:100',
            'desc' => 'required|string|max:255',
            'price' => 'required|integer',
            'category' => 'required|string|max:100'
        ]);
    }

    public function storeMenuImage(Request $request)
    {
        $imagePath = $request->file('image');
        $imageName = time() . '.' . $imagePath->getClientOriginalExtension();
        $imagePath->storeAs('public/images/menus', $imageName);

        return 'storage/images/menus/' . $imageName;
    }

    public function createMenu(array $data)
    {
        Menu::create($data);
    }

    public function updateMenu(int $id, array $data)
    {
        $menu = Menu::findOrFail($id);
        $menu->update($data);
    }

    public function deleteMenu(int $id)
    {
        Menu::findOrFail($id)->delete();
    }

    public function getMenu(int $id)
    {
        return Menu::findOrFail($id);
    }

    public function getAllMenus()
    {
        return Menu::all();
    }
}
