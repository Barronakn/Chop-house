import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";
import React from "react";

const AllMenu = ({ menus }) => {
    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this menu?")) {
            try {
                const resp = await Inertia.delete(`/delete/menu/${id}`);

                if (resp.errors) {
                    console.error("L'erreur est:", resp.errors);
                } else {
                    Inertia.visit("/all/menu");
                }
            } catch (error) {
                console.error("L'erreur est:", error);
            }
        }
    };

    return (
        <div className="flex flex-col gap-10 pt-28 justify-center items-center max-w-5xl mx-auto">
            <h2 className="text-center text-4xl uppercase">Menu</h2>
            <div className="h-4">
                <Button content="Add Menu" link="/add/menu" />
            </div>
            <table className="border-collapse border">
                <thead>
                    <tr className="border">
                        <th className="border p-3">Nᵒ</th>
                        <th className="border p-3">Image</th>
                        <th className="border p-3">Food Name</th>
                        <th className="border p-3">Category</th>
                        <th className="border p-3">Price</th>
                        <th className="border p-3">Description</th>
                        <th className="border p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {menus.map((menu, index) => (
                        <tr
                            key={index}
                            className={`border ${
                                index % 2 == 0 ? "bg-white" : "bg-slate-200"
                            }`}
                        >
                            <td className="border p-3">{menu.id}</td>
                            <td className="border p-3">
                                <img
                                    src={`../../../../${menu.image_path}`}
                                    alt={menu.food}
                                />
                            </td>
                            <td className="border p-3">{menu.food}</td>
                            <td className="border p-3">{menu.category}</td>
                            <td className="border p-3">{menu.price}€</td>
                            <td className="border p-3">{menu.desc}</td>
                            <td className="p-3 flex flex-row gap-3 text-white pt-7">
                                <a
                                    className="px-5 py-2 rounded-md hover:bg-green-700 bg-green-600"
                                    href={`/view/menu/${menu.id}`}
                                >
                                    View
                                </a>
                                <a
                                    className="px-5 py-2 rounded-md hover:bg-blue-700 bg-blue-600"
                                    href={`/edit/menu/${menu.id}`}
                                >
                                    Update
                                </a>
                                <button
                                    className="px-5 py-2 rounded-md hover:bg-red-700 bg-red-600"
                                    onClick={() => handleDelete(menu.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllMenu;
