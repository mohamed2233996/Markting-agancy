import React from 'react';
import {Header, Intro, About, About2, Freeprise, Services, Prise, Articles, Footer} from "../scetion/index"
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Homepg = () => {
    return (
        <HelmetProvider>
            <Helmet>
            <meta charSet="utf-8" />
                <title>الصفحه الرئسية</title>
            </Helmet>
            <Header />
            <Intro />
            <About />
            <Freeprise />
            <About2 />
            <Services />
            <Prise />
            <Articles />
            <Footer />
        </HelmetProvider>
    );
}

export default Homepg;
