import React from 'react';
import "./intro.css"
import introImg from '../../assets/imges/intro.png'
import { BiChevronLeft } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div className='intro-scetion py-5'>
            <div className='over-back'></div>
            <div className='container'>
                <div className="row mt-120 align-items-center color-light">
                    <div className="order-10 col-lg-6 mt-4">
                        <h1 className='mb-2 fw-bold fs-1'>وكالة ميدو للتسويق</h1>
                        <p className='fs-5 py-2'>مرحبا بك فى وكالة ميدو التسويقيه العامه، نجاحنا منذ سنين عند تطورات كفئة جديدة فى المجال التربوية والتسويق الخارجي الى حدود الشركات الصغيرة والمتوسطة.</p><br/>
                        <div className="btns-link fs-4">
                            <Link to="/عن-الشركة"className="btn-orang ms-3">عن الشركة
                        <BiChevronLeft /></Link>
                            <Link to="/توصل-معنا" className="btn-light-m">اتصل بنا </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <img  className='img-fluid' src={introImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
