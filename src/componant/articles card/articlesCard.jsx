import React from 'react';
import './articlesCard.css'
import { Link } from 'react-router-dom';

const ArticlesCard = (props) => {
    return (
        <article className='p-0 w-100 overflow-hidden card'>
            <Link className='img-div card-img-top' to={props.artlink}>
                <img className='w-100 ' src={props.scr} alt="" />
            </Link>
            <div>
                <Link to={props.artlink} className='text-link d-block fs-3 my-2'>{props.titel}</Link>
                <Link to={props.artlink} className='text-link d-block '>المزيد..</Link>
            </div>
            <div className='data'>
                <span>{props.data}</span>
                <span>{props.contComent}</span>
            </div>
        </article>
    );
}

export default ArticlesCard;
