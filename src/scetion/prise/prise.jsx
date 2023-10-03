import React from 'react';
import './prise.css'
import priseImg1 from '../../assets/imges/prise1.png'
import priseImg2 from '../../assets/imges/prise2.png'
import priseImg3 from '../../assets/imges/prise3.png'
import { AiOutlineDoubleLeft } from "react-icons/ai";

const Prise = () => {
    return (
        <div className='scetion-padding prise'>
            <div className='container'>
                <h1 className='text-center mb-4 bold'>الخطط والاسعار</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 mt-3 mt-lg-0">
                        <div className="prise-card">
                            <div className="mark card-color-1">حصري</div>
                            <img className='img-fluid' src={priseImg1} alt="" />
                            <p className="prise-top-text">
                                <span className='prise-nm card-color-1'>89.99</span>
                                جنية في الشهر
                            </p>
                            <ul className='prise-list'>
                                <li>تسويق في السوشيال ميديا</li>
                                <li>3.100 كلمة مفتاحية</li>
                                <li>بناء الروابط</li>
                                <li>10 تحسينات مجانية</li>
                                <li>5 مجلات</li>
                            </ul>
                            <a className='prise-btn card-color-1' href="/">اختر الخطة
                        <AiOutlineDoubleLeft /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3 mt-lg-0">
                        <div className="prise-card">
                            <div className="mark card-color-2">اقتصادي</div>
                            <img className='img-fluid' src={priseImg2} alt="" />
                            <p className="prise-top-text">
                                <span className='prise-nm card-color-2'>89.99</span>
                                جنية في الشهر
                            </p>
                            <ul className='prise-list'>
                                <li>تسويق في السوشيال ميديا</li>
                                <li>3.100 كلمة مفتاحية</li>
                                <li>بناء الروابط</li>
                                <li>10 تحسينات مجانية</li>
                                <li>5 مجلات</li>
                            </ul>
                            <a className='prise-btn card-color-2' href="/">اختر الخطة
                        <AiOutlineDoubleLeft /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3 mt-lg-0">
                        <div className="prise-card">
                            <div className="mark card-color-3">حصري</div>
                            <img className='img-fluid' src={priseImg3} alt="" />
                            <p className="prise-top-text">
                                <span className='prise-nm card-color-3'>89.99</span>
                                جنية في الشهر
                            </p>
                            <ul className='prise-list'>
                                <li>تسويق في السوشيال ميديا</li>
                                <li>3.100 كلمة مفتاحية</li>
                                <li>بناء الروابط</li>
                                <li>10 تحسينات مجانية</li>
                                <li>5 مجلات</li>
                            </ul>
                            <a className='prise-btn card-color-3' href="/">اختر الخطة
                        <AiOutlineDoubleLeft /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prise;
