import React from 'react';
import { PageTitel } from '../componant';
import { Footer, Header } from '../scetion';
import   { Helmet, HelmetProvider } from 'react-helmet-async';

const SendPg = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ارسال </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />
            <PageTitel pageName="تم استقبال البيانات" />
            <div className='scetion-padding text-center'>
                <div className='container'>
                    <div className="row">
                        <h1 className='text-dark mb-4'>اذا واجهك اي اخطاء لا تتردد في التواصل مع مطور الموقع </h1>
                        <div className='fs-5 mt-2 fw-bold'>
                            <p >01025402633</p>
                            <p>medomano771@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </HelmetProvider>
    );
}

export default SendPg;
