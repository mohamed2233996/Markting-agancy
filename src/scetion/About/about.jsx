import React from 'react';
import './about.css'
import aboutIcon1 from '../../assets/imges/icon1.png'
import aboutIcon2 from '../../assets/imges/icon2.png'
import aboutIcon3 from '../../assets/imges/icon3.png'
import aboutImg from '../../assets/imges/aboutimg.png'
import { BiChevronLeft } from "react-icons/bi";
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className='scetion-padding'>
            <div className='container'>
                <div className="row text-center">
                    <div className="col-lg-4 p-2">
                        <img src={aboutIcon1} alt="" />
                        <h2>نتائج مضمونه</h2>
                        <p>فريق علوم الحاسبات والكمبيوتر يعد من أشهر المساهمين بأفضل جودة لخدماتهم وذلك حيث تصميم نظام استضافة خدماتهم بالمستوى العالي، وتطوره بشكل سريع ومستقل.</p>
                    </div>
                    <div className="col-lg-4">
                        <img src={aboutIcon2} alt="" />
                        <h2>منصات عالميه</h2>
                        <p>فريق علوم الحاسبات والكمبيوتر يعد من أشهر المساهمين بأفضل جودة لخدماتهم وذلك حيث تصميم نظام استضافة خدماتهم بالمستوى العالي، وتطوره بشكل سريع ومستقل.</p>
                    </div>
                    <div className="col-lg-4">
                        <img src={aboutIcon3} alt="" />
                        <h2>نتائج مضمونه</h2>
                        <p>فريق علوم الحاسبات والكمبيوتر يعد من أشهر المساهمين بأفضل جودة لخدماتهم وذلك حيث تصميم نظام استضافة خدماتهم بالمستوى العالي، وتطوره بشكل سريع ومستقل.</p>
                    </div>
                </div>
                <div className="row mt-4 pt-5">
                    <div className="col-lg-6">
                        <img className='img-fluid' src={aboutImg} alt="" />
                    </div>
                    <div className="col-lg-6 mt-3">
                        <h2 className='about-top-titel'><span>عن الشركة</span>
                        وسع اعمالك مع شركة التسويق الخاصة بنا</h2>
                        <p className='about-text-1'>خبرة أكثر من 10 سنوات في مساعدة العملاء للوصول الى اهدافهم ونتائجهم المطلوبة</p>
                        <p className='about-text-2'>«لكن يجب أن أشرح لك كيف ولدت كل هذه الفكرة الخاطئة المتمثلة في إدانة السرور ومدح الألم ، وسأقدم لك وصفًا كاملاً للنظام ، وأشرح التعاليم الفعلية للمستكشف العظيم للحقيقة ، الباني البارع. السعادة البشرية. لا أحد يرفض أو يكره أو يتجنب المتعة نفسها ، لأنها متعة ، ولكن لأن أولئك الذين لا يعرفون كيفية السعي وراء المتعة</p>
                        <Link className='btn-orang fs-4' to="/عن-الشركة">عن الشركة
                        <BiChevronLeft /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
