<?php

namespace App\Http\Controllers;

use App\Contracts\MenuInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AddMenuController extends Controller
{
    protected $menuInterface;

    public function __construct(MenuInterface $menuInterface)
    {
        $this->menuInterface = $menuInterface;
    }

    public function add()
    {
        return Inertia::render("Admin/AddMenu");
    }

    public function store(Request $request)
    {
        $validate = $this->menuInterface->validateMenu($request);

        if ($validate->fails()) {
            return Redirect::back()->withErrors($validate)->withInput();
        }

        $data = $request->only(['food', 'desc', 'price', 'category']);

        if ($request->hasFile('image')) {
            $data['image_path'] = $this->menuInterface->storeMenuImage($request);
        }

        $this->menuInterface->createMenu($data);

        return redirect()->route('menu');
    }
}
