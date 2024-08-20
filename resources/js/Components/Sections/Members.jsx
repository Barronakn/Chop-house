import React from 'react';
import Member from '../Member';
import member1 from '/resources/img/team-1.jpg';
import member2 from '/resources/img/team-2.jpg';
import member3 from '/resources/img/team-3.jpg';
import member4 from '/resources/img/team-4.jpg';

const Members = () => {
    return (
        <div className='flex flex-col xl:gap-0 gap-6 xl:flex-row justify-between pt-10'>
            <Member picture={member1} name="Alex Martinez" desc="Image du chef des repas d'entrée" designation="Chef des repas d'entrée" />
            <Member picture={member2} name="Henry DuPont" desc="Image du chef des repas du jour" designation="Chef des repas du jour" />
            <Member picture={member3} name="Pat Mendez" desc="Image du chef des repas du menu" designation="Chef des repas du menu" />
            <Member picture={member4} name="Jack Wide" desc="Image du chef des repas légers" designation="Chef des repas légers" />
        </div>
    );
};

export default Members;
