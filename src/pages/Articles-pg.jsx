import React from 'react';
import   { Helmet, HelmetProvider } from "react-helmet-async";
import { Footer, Header } from '../scetion';
import { ArticlesCard, PageTitel, SideLinks } from '../componant';
import articleImg1 from "../assets/imges/artic 1.jpg";
import articleImg2 from "../assets/imges/artic 2.jpg";
import articleImg3 from "../assets/imges/artic 3.jpg";

const ArticlesPg = () => {

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>المدونة</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />
            <main>
                <PageTitel pageName="المدونة" />
                <div className='scetion-padding full-articles' style={{ background: "#ededed" }}>
                    <div className='container'>
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <SideLinks />
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6 mt-3">
                                        <ArticlesCard
                                            artlink="/نصائح-للشركات-الناشئة"
                                            scr={articleImg1}
                                            titel="نصائح للشركات الناشئة"
                                            data="29 مارس، 2025 "
                                            contComent="..لا توجد تعليقات"
                                        />
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <ArticlesCard
                                            artlink="/نصائح-للشركات-الناشئة"
                                            scr={articleImg2}
                                            titel="نصائح للشركات الناشئة"
                                            data="27 مارس، 2023 "
                                            contComent="..لا توجد تعليقات"
                                        />
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <ArticlesCard
                                            artlink="/نصائح-للشركات-الناشئة"
                                            scr={articleImg3}
                                            titel="نصائح للشركات الناشئة"
                                            data="27 مارس، 2023 "
                                            contComent="..لا توجد تعليقات"
                                        />
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <ArticlesCard
                                            artlink="/نصائح-للشركات-الناشئة"
                                            scr={articleImg1}
                                            titel="نصائح للشركات الناشئة"
                                            data="27 مارس، 2023 "
                                            contComent="..لا توجد تعليقات"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </HelmetProvider>
    );
}

export default ArticlesPg;
