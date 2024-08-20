import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";

const EditMenu = ({ menu }) => {
    const [data, setData] = useState({
        image: menu.image_path,
        food: menu.food,
        desc: menu.desc,
        price: menu.price,
        category: menu.category,
    });

    const { image, food, desc, price, category } = data;

    const csrf = () => fetch("/sanctum/csrf-cookie");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setData({ ...data, [name]: files[0] });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await csrf();

            const formData = {
                image,
                food,
                desc,
                price,
                category,
            };

            const resp = await Inertia.put(`/edit/menu/${menu.id}`, formData);

            if (resp.errors) {
                console.error("L'erreur est:", resp.errors);
            } else {
                Inertia.visit("/all/menu");
            }
        } catch (error) {
            console.error("L'erreur est:", error);
        }
    };

    console.log(data);
    return (
        <div className="flex flex-col gap-10 pt-28 justify-center items-center">
            <h2 className="text-center text-4xl uppercase">Edit Menu</h2>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 w-full max-w-4xl"
                encType="multipart/form-data"
            >
                <div>
                    <button
                        type="button"
                        className="btn-warning relative text-base mb-4 border-dashed border overflow-hidden py-3 px-5 border-gray-300 resize-none rounded-sm text-gray-500 w-full"
                    >
                        <div className="flex flex-row gap-3 justify-center text-xs text-gray-350 items-center">
                            <span>Upload Picture of Food</span>
                        </div>
                        <input
                            className="cursor-pointer w-full h-full absolute opacity-0"
                            type="file"
                            name="image"
                            onChange={handleChange}
                        />
                    </button>
                </div>
                <div>
                    <input
                        className="border-gray-300 resize-none rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border focus:outline-none focus:ring-orange-400 focus:border-opacity-30 w-full"
                        type="text"
                        name="food"
                        id="food"
                        value={food}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        className="border-gray-300 resize-none rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border focus:outline-none focus:ring-orange-400 focus:border-opacity-30 w-full"
                        type="text"
                        name="desc"
                        id="desc"
                        value={desc}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        className="border-gray-300 resize-none rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border focus:outline-none focus:ring-orange-400 focus:border-opacity-30 w-full"
                        type="number"
                        name="price"
                        id="price"
                        value={price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <select
                        id="category"
                        name="category"
                        className="border-gray-300 resize-none rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border focus:outline-none focus:ring-orange-400 focus:border-opacity-30 w-full"
                        value={category}
                        onChange={handleChange}
                    >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                    </select>
                </div>
                <input
                    className="cursor-pointer bg-orange-550 hover:bg-orange-500 py-4 px-16 uppercase rounded-sm text-white w-full"
                    type="submit"
                    value="Edit Menu"
                />
            </form>
        </div>
    );
};

export default EditMenu;
