import React from 'react';
import "./about2.css"
import { BsCheck } from "react-icons/bs";
import about2Img from "../../assets/imges/about2img.png"
import { BsFillCaretRightFill } from "react-icons/bs";

const About2 = () => {
    return (
        <div className='scetion-padding about2'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6">
                    <h2 className='about-top-titel'>أحصل على أفضل خطة إبداعية للإنطلاق والنمور</h2>
                        <p className='about-text-1'>خبرة أكثر من 10 سنوات في مساعدة العملاء للوصول الى اهدافهم ونتائجهم المطلوبة</p>
                        <p className='about-text-2'>«لكن يجب أن أشرح لك كيف ولدت كل هذه الفكرة الخاطئة المتمثلة في إدانة السرور ومدح الألم ، وسأقدم لك وصفًا كاملاً للنظام ، وأشرح التعاليم الفعلية للمستكشف العظيم للحقيقة ، الباني البارع. السعادة البشرية. لا أحد يرفض أو يكره أو يتجنب المتعة نفسها ، لأنها متعة ، ولكن لأن أولئك الذين لا يعرفون كيفية السعي وراء المتعة</p>
                        <ul className='list-unstyled p-0'>
                            <li className='about-item'><span className='about-item-icon'><BsCheck /></span>الباني البارع. السعادة البشرية. لا أحد يرفض أو يكره أو يتجنب</li>
                            <li className='about-item'><span className='about-item-icon'><BsCheck /></span>وصفًا كاملاً للنظام ، وأشرح التعاليم الفعلية للمستكشف العظيم للحقيقة</li>
                            <li className='about-item'><span className='about-item-icon'><BsCheck /></span>لأنها متعة ، ولكن لأن أولئك الذين لا يعرفون كيفية السعي وراء المتعة</li>
                        </ul>
                        <div className="video-link">
                            <a className='video-a' href="https://www.youtube.com/">
                                <BsFillCaretRightFill />
                            </a>
                            <p className='fs-4 fw-bold m-0 pe-3'>فديو تعريفي</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className='img-fluid' src={about2Img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About2;
