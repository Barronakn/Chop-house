import React from 'react';

const SectionNameTwo = ({name}) => {
    return (
        <div className="flex flex-row items-center gap-3">
        <div className="bg-orange-550 w-10 h mb-3"></div>
            <div>
                <h2 className="text-xl mb-3 font-serif text-orange-550">
                    {name}
                </h2>
            </div>
            <div className="bg-orange-550 w-10 h mb-3"></div>
        </div>
    );
};

export default SectionNameTwo;
