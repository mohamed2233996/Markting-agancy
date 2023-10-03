import React from 'react';
import './email.css'
import { Link } from 'react-router-dom';

const Email3inbuts = (props) => {
    return (
        <div className='scetion-padding email-scetion'>
            <div className='container text-center'>
                <h3 className='text-light'>{props.titel}</h3>
                <h2 className='text-light fs-1 p-2 my-2'>{props.titel2}</h2>
                <form className='email-form d-flex flex-column justify-content-center flex-nowrap align-items-center p-5' action="">
                    <input className='input-m mb-3' type="email" placeholder={props.placeholder1} />
                    <input className='input-m mb-3' type="email" placeholder={props.placeholder2} />
                    <input className='input-m' type="email" placeholder={props.placeholder3} />
                    <Link className='btn-blue-dark fs-5 w-50 mt-4' to={"/send"} >{props.doing}</Link>
                </form>
            </div>
        </div>
    );
}

export default Email3inbuts;
