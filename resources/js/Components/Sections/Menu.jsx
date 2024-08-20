import { useState } from 'react';
import SectionLastName from "../SectionLastName";
import SectionNameTwo from "../SectionNameTwo";
import image_path from '../../../img/menu-1.jpg';
const Menu = ({ menus }) => {
    const [selectedCategory, setSelectedCategory] = useState('Breakfast');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredMenus = menus.filter(menu => menu.category === selectedCategory);

    return (
        <section id="menu" className="flex flex-col items-center gap-5 mx-10 md:mx-20 xl:mx-32 pb-28">
            <div className="flex flex-col items-center gap-5">
                <SectionNameTwo name="Food Menu" />
                <SectionLastName lastname="Most Popular Items" />
            </div>
            <div className="flex flex-row gap-5 sm:gap-10 md:gap-20 xl:gap-32 border-b border-gray-300 pt-5">
                <div
                    className={`menu-option hover:cursor-pointer border-b-2 pb-3 ${selectedCategory === 'Breakfast' ? 'border-orange-500' : ''}`}
                    onClick={() => handleCategoryChange('Breakfast')}
                >
                    <span className="text-gray-600">Popular</span>
                    <p className="font-bold">Breakfast</p>
                </div>
                <div
                    className={`menu-option hover:cursor-pointer border-b-2 pb-3 ${selectedCategory === 'Lunch' ? 'border-orange-500' : ''}`}
                    onClick={() => handleCategoryChange('Lunch')}
                >
                    <span className="text-gray-600">Special</span>
                    <p className="font-bold">Lunch</p>
                </div>
                <div
                    className={`menu-option hover:cursor-pointer border-b-2 pb-3 ${selectedCategory === 'Dinner' ? 'border-orange-500' : ''}`}
                    onClick={() => handleCategoryChange('Dinner')}
                >
                    <span className="text-gray-600">Lovely</span>
                    <p className="font-bold">Dinner</p>
                </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 py-10">
                {filteredMenus.map((menu, index) => (
                    <div key={index} className="flex flex-row items-center gap-3">
                        <div>
                            <img src={image_path} alt={menu.food} />
                        </div>
                        <div>
                            <div className="flex flex-row gap-5 sm:gap-10 md:gap-20 xl:gap-32 font-bold pb-1">
                                <h4 className="text-md md:text-base xl:text-xl">{menu.food}</h4>
                                <span className="text-orange-550 text-base sm:text-lg md:text-xl xl:text-2xl">{menu.price} €</span>
                            </div>
                            <hr className="py-1" />
                            <p className="italic text-sm text-gray-600">{menu.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Menu;

