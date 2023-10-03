import React from 'react';
import "./conctInfo.css"
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome, AiOutlineFacebook } from "react-icons/ai";

const ConctInfo = (prpos) => {
    return (
        <div className="conctInfo scetion-padding"  style={{background:"#ededed"}}>
            <div className="container text-center">
                <p className='fs-5'>خدمات الاعمال</p>
                <h2 className='fs-1'>أفضل حلول وخدمات الأعمال الإلكترونية</h2>
                <div className="row mt-5">
                    <div className="col-lg-3 mb-5">
                        <div className='conectinfo-card'>
                            <div className='conecticon-div color-1'>
                                <AiOutlineMail />
                            </div>
                            <p className='conctinfo-text'>{prpos.conctinfoGmail}</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-5">
                        <div className='conectinfo-card'>
                            <div className='conecticon-div color-2'>
                                <AiOutlinePhone />
                            </div>
                            <p className='conctinfo-text'>{prpos.conctinfoPhone}</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-5">
                        <div className='conectinfo-card'>
                            <div className='conecticon-div color-3'>
                                <AiOutlineHome />
                            </div>
                            <p className='conctinfo-text'>{prpos.conctinfoLocation}</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-5">
                        <div className='conectinfo-card'>
                            <div className='conecticon-div color-4'>
                                <AiOutlineFacebook />
                            </div>
                            <p className='conctinfo-text'>{prpos.conctinfoFacebook}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConctInfo;
