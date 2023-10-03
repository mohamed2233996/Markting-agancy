import React from 'react';
import './features.css'
import priseImg1 from '../../assets/imges/prise1.png'
import priseImg2 from '../../assets/imges/prise2.png'
import priseImg3 from '../../assets/imges/prise3.png'
import FeaturesImg1 from '../../assets/imges/Features.png'

const Features = () => {
    return (
        <div className='scetion-padding Features'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <div className='features-card text-center'>
                            <img className='img-fluid' src={priseImg1} alt="" />
                            <h3>ترتيب البحث</h3>
                            <p>الباني البارع. السعادة البشرية. لا أحد يرفض أو يكره أو يتجنب المتعة نفسها</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className='features-card text-center'>
                            <img className='img-fluid' src={priseImg2} alt="" />
                            <h3>تحسين الموقع</h3>
                            <p>الباني البارع. السعادة البشرية. لا أحد يرفض أو يكره أو يتجنب المتعة نفسها</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className='features-card text-center'>
                            <img className='img-fluid' src={priseImg3} alt="" />
                            <h3>الاحتفاظ بالعملاء</h3>
                            <p>الباني البارع. السعادة البشرية. لا أحد يرفض أو يكره أو يتجنب المتعة نفسها</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-120">
                    <div className="col-lg-6">
                    <h1 className='about-top-titel'>تفصلك خطوات قليلة عن الحصول على عمل إلكتروني إحترافي</h1>
                        <p className='about-text-1'>خبرة أكثر من 10 سنوات في مساعدة العملاء للوصول الى اهدافهم ونتائجهم المطلوبة</p>
                        <p className='about-text-2'>«لكن يجب أن أشرح لك كيف ولدت كل هذه الفكرة الخاطئة المتمثلة في إدانة السرور ومدح الألم ، وسأقدم لك وصفًا كاملاً للنظام ، وأشرح التعاليم الفعلية للمستكشف العظيم للحقيقة ، الباني البارع. السعادة البشرية. لا أحد يرفض أو يكره أو يتجنب المتعة نفسها ، لأنها متعة ، ولكن لأن أولئك الذين لا يعرفون كيفية السعي وراء المتعة</p>
                        <a className='btn-orang fs-3 mt-2' href="#">عن الشركة</a>
                    </div>
                    <div className="col-lg-6">
                        <img className='img-fluid' src={FeaturesImg1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
