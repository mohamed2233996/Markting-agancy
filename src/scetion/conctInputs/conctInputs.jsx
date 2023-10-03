import React from 'react';
import "./conctInputs.css"
import conctInputsImg from "../../assets/imges/about2img.png"
import { Link } from 'react-router-dom';

const ConctInputs = () => {
    return (
        <div className='conctInputs scetion-padding'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-5">
                        <img className='img-fluid' src={conctInputsImg} alt="" />
                    </div>
                    <div className="col-lg-7">
                        <form className='conctinpouts-form' action="">
                            <input type="text" placeholder='اسمك الكريم'/>
                            <input type="email" placeholder='البريد الالكتروني'/>
                            <input type="number" placeholder='رقم الهاتف'/>
                            <textarea type="text" placeholder='الرسالة'/>
                            <Link className='w-100 btn-blue-dark text-center' to={"/send"}>ارسال</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConctInputs;
