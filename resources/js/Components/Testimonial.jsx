import React from "react";

const Testimonial = ({ avis, client, name, profession }) => {
    return (
        <div className="flex flex-col px-5 pt-5 gap-4 transition-text text-white shadow-xl bg-orange-550 h-72 xl:h-48 hover:bg-white hover:text-black mb-14">
            <p className="text-justify">{avis}</p>
            <div className="flex flex-col xl:flex-row gap-5 justify-start items-center">
                <div className="w-20 h-20">
                    <img className="rounded-full " src={client} alt="Image d'un client" />
                </div>
                <div className="flex flex-col text-justify">
                    <h4 className="text-xl font-bold">{name}</h4>
                    <p>{profession}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
