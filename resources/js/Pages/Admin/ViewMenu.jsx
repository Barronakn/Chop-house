
const ViewMenu = ({menu}) => {
    return (
        <div className="flex flex-col gap-10 pt-28 justify-center items-center">
            <h2 className="text-center text-4xl uppercase">View Menu</h2>
            <h3>{menu.category}</h3>
            <div className="flex flex-row items-center gap-5">
                <div>
                    <img src={menu.image_path} alt={menu.food} />
                </div>
                <div>
                    <div className="flex flex-row justify-between font-bold pb-1">
                        <h4 className="text-xl">{menu.food}</h4>
                        <span className="text-orange-550 text-2xl">{menu.price} €</span>
                    </div>
                    <hr className="py-1" />
                    <p className="italic text-sm text-gray-600">
                    {menu.desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ViewMenu;
