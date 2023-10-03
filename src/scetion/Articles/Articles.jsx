import React from 'react';
import {ArticlesCard} from "../../componant/index"
import articleImg1 from "../../assets/imges/artic 1.jpg"
import articleImg2 from "../../assets/imges/artic 2.jpg"
import articleImg3 from "../../assets/imges/artic 3.jpg"

const Articles = () => {
    return (
        <div className='Articles scetion-padding'>
            <div className='container'>
                <h1 className='text-center mb-4 bold'>من المدونه</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="col-md-4 px-3">
                        <ArticlesCard 
                            artlink="/نصائح-للشركات-الناشئة"
                            scr={articleImg1}
                            titel="نصائح للشركات الناشئة"
                            data="27 مارس، 2023 "
                            contComent="..لا توجد تعليقات"
                        />
                    </div>
                    <div className="col-md-4 px-3">
                        <ArticlesCard 
                            artlink="/نصائح-للشركات-الناشئة"
                            scr={articleImg2}
                            titel="كيف تجعل موقعك ناجحاً"
                            data="27 مارس، 2023 "
                            contComent="..لا توجد تعليقات"
                        />
                    </div>
                    <div className="col-md-4 px-3">
                        <ArticlesCard 
                            artlink="/نصائح-للشركات-الناشئة"
                            scr={articleImg3}
                            titel="ما هي أهمية البطاقات الرسومية"
                            data="27 مارس، 2023 "
                            contComent="..لا توجد تعليقات"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Articles;
