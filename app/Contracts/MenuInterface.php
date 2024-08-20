<?php

namespace App\Contracts;

use Illuminate\Http\Request;

interface MenuInterface
{
    public function validateMenu(Request $request);
    public function storeMenuImage(Request $request);
    public function createMenu(array $data);
    public function updateMenu(int $id, array $data);
    public function deleteMenu(int $id);
    public function getMenu(int $id);
    public function getAllMenus();
}
