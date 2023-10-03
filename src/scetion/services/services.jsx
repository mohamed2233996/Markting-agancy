import React from 'react';
import "./services.css"
import servicesImg1 from "../../assets/imges/services 1.png"
import servicesImg2 from "../../assets/imges/services 2.png"
import servicesImg3 from "../../assets/imges/services 3.png"
import servicesImg4 from "../../assets/imges/services 4.png"
import servicesImg5 from "../../assets/imges/services 5.png"
import servicesImg6 from "../../assets/imges/services 6.png"

const Services = () => {
    return (
        <div className='scetion-padding services'>
            <div className='container'>
                <h1 className='text-center mb-4 bold'>خدماتنا</h1>
                <div className="row">
                    <div className="service-box p-2  col-md-6 col-lg-4">
                        <img className='img-fluid' src={servicesImg1} alt="" />
                        <h3 className='mb-3'>الدعم الفني</h3>
                        <p>تقوم مركز تطبيق بإصلاح أحادية المشاريع وتسهيل عملية طلب خدمة فنية لأغراض الجودة</p>
                    </div>
                    <div className="service-box p-2  col-md-6 col-lg-4">
                        <img className='img-fluid' src={servicesImg2} alt="" />
                        <h3 className='mb-3'>مهام السيو الشهرية</h3>
                        <p>تقدم شركة محطات الماء للبترول والصيانة بأعلي عمل لخدمتكم ، فإذا كنت ترغب في استضافة </p>
                    </div>
                    <div className="service-box p-2  col-md-6 col-lg-4">
                        <img className='img-fluid' src={servicesImg3} alt="" />
                        <h3 className='mb-3'>سيو داخلي</h3>
                        <p>تقدم مكافحة المصابين والطبيبون بأجود أفضل من خلال التزويد للمستشار عن طريق فوري، حيث نقدمافضل خدمه ممكنه</p>
                    </div>
                    <div className="service-box p-2  col-md-6 col-lg-4">
                        <img className='img-fluid' src={servicesImg4} alt="" />
                        <h3 className='mb-3'>سيو خارجي</h3>
                        <p>تقدم مكافحة المبانى والأثاث بطريقة تصورية تضمين في جودة عملية حيادية من أجل استغلال الافضل</p>
                    </div>
                    <div className="service-box p-2  col-md-6 col-lg-4">
                        <img className='img-fluid' src={servicesImg5} alt="" />
                        <h3 className='mb-3'>بناء الروابط</h3>
                        <p>تقوم مركز تطبيق بإصلاح أحادية المشاريع وتسهيل عملية طلب خدمة فنية لأغراض الجودة</p>
                    </div>
                    <div className="service-box p-2  col-md-6 col-lg-4">
                        <img className='img-fluid' src={servicesImg6} alt="" />
                        <h3 className='mb-3'>تصدر البحث</h3>
                        <p>تقوم مركز تطبيق بإصلاح أحادية المشاريع وتسهيل عملية طلب خدمة فنية لأغراض الجودة</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
