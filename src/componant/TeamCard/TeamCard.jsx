import React from 'react';
import './TeamCard.css'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsWordpress} from "react-icons/bs";

const TeamCard = (props) => {
    return (
        <div className="col-lg-4 mt-3 text-center">
            <div className="team-card">
                <img className='team-img mb-3' src={props.scrImgTeam} alt="" />
                <h3 className='team-name'>{props.name}</h3>
                <p  className='team-p'>{props.joptitel}</p>
                <div className='conect-icon'>
                    <a className='team-conct' href=""><BsFacebook /></a>
                    <a className='team-conct' href=""><BsInstagram /></a>
                    <a className='team-conct' href=""><BsTwitter /></a>
                    <a className='team-conct' href=""><BsGithub /></a>
                    <a className='team-conct' href=""><BsWordpress /></a>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
