import React from 'react';
import { About, Footer, Header, Services } from '../scetion';
import { Email, PageTitel } from '../componant';
import   { Helmet, HelmetProvider } from 'react-helmet-async';

const ServicesPg = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>الخدمات</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />
                <main>
                <PageTitel pageName="الخدمات" />
                <Services/>
                <Email titel="هل أنت مستعد للنمو"
                    titel2="تحصل على عرض سعر"
                    doing="ارسال"
                />
                <About />
                </main>
            <Footer />
        </HelmetProvider>
    );
}

export default ServicesPg;

