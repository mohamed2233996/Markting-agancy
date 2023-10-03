import React from 'react';
import "./WorkTeam.css"
import { TeamCard } from '../../componant';
import teamImg1 from "../../assets/imges/11.png"
import teamImg2 from "../../assets/imges/22.png"
import teamImg3 from "../../assets/imges/33.png"

const WorkTeam = () => {
    return (
        <div className='scetion-padding WorkTeam'>
            <div className='container'>
                <h1>فريق العمل</h1>
                <div className="row">
                    <TeamCard 
                    scrImgTeam={teamImg1}
                    name='محمد جمال'
                    joptitel="مطور واجهات مواقع"
                    />
                    <TeamCard 
                    scrImgTeam={teamImg2}
                    name='محمد فايز'
                    joptitel="مطور تطبيقات  "
                    />
                    <TeamCard 
                    scrImgTeam={teamImg3}
                    name='محمد عبد الخالق'
                    joptitel="علي الله"
                    />
                </div>
            </div>
        </div>
    );
}

export default WorkTeam;
