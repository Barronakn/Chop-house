import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";

const AddMenu = ({ errors }) => {
    const [data, setData] = useState({
        image: null,
        food: "",
        desc: "",
        price: "",
        category: "Breakfast",
    });

    const { image, food, desc, price, category } = data;

    const csrf = () => fetch("/sanctum/csrf-cookie");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setData({ ...data, image: files[0] });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await csrf();

            const formData = new FormData();
            formData.append("image", image);
            formData.append("food", food);
            formData.append("desc", desc);
            formData.append("price", price);
            formData.append("category", category);

            const resp = await Inertia.post("/add/menu", formData);

            if (resp.errors) {
                console.error("L'erreur est:", resp.errors);
            } else {
                setData({
                    image: null,
                    food: "",
                    desc: "",
                    price: "",
                    category: "Breakfast",
                });
                Inertia.visit("/all/menu");
            }
        } catch (error) {
            console.error("L'erreur est:", error);
        }
    };

    return (
        <div className="flex flex-col gap-10 pt-28 justify-center items-center">
            <h2 className="text-center text-4xl uppercase">Add Menu</h2>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 w-full max-w-4xl"
                encType="multipart/form-data"
            >
                <div className="upload">
                    {errors && errors.image && (
                        <span className="text-red-500">{errors.image}</span>
                    )}
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
                    {errors && errors.food && (
                        <span className="text-red-500">{errors.food}</span>
                    )}
                    <input
                        className="border-gray-300 resize-none rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border focus:outline-none focus:ring-orange-400 focus:border-opacity-30 w-full"
                        type="text"
                        name="food"
                        id="food"
                        placeholder="Food Name"
                        onChange={handleChange}
                        value={food}
                    />
                </div>
                <div>
                    {errors && errors.desc && (
                        <span className="text-red-500">{errors.desc}</span>
                    )}
                    <input
                        className="border-gray-300 resize-none rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border focus:outline-none focus:ring-orange-400 focus:border-opacity-30 w-full"
                        type="text"
                        name="desc"
                        id="desc"
                        placeholder="Description of Food"
                        onChange={handleChange}
                        value={desc}
                    />
                </div>
                <div>
                    {errors && errors.price && (
                        <span className="text-red-500">{errors.price}</span>
                    )}
                    <input
                        className="border-gray-300 resize-none rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border focus:outline-none focus:ring-orange-400 focus:border-opacity-30 w-full"
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Price"
                        onChange={handleChange}
                        value={price}
                    />
                </div>
                <div>
                    {errors && errors.category && (
                        <span className="text-red-500">{errors.category}</span>
                    )}
                    <select
                        id="category"
                        name="category"
                        className="border-gray-300 resize-none rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border focus:outline-none focus:ring-orange-400 focus:border-opacity-30 w-full"
                        onChange={handleChange}
                        value={category}
                    >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                    </select>
                </div>
                <input
                    className="cursor-pointer bg-orange-550 hover:bg-orange-500 py-4 px-16 uppercase rounded-sm text-white w-full"
                    type="submit"
                    value="Add Menu"
                />
            </form>
        </div>
    );
};

export default AddMenu;
