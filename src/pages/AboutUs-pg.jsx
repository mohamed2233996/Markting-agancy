import React from 'react';
import { About2, Features, Contworks, Footer, Header, WorkTeam } from '../scetion';
import { PageTitel } from '../componant';
import {Helmet ,HelmetProvider } from 'react-helmet-async';

const AboutUspg = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>عن الشركة</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />
            <main>
                <PageTitel pageName="عن الشركة" />
                <About2 />
                <Features />
                <Contworks />
                <WorkTeam />
            </main>
            <Footer />
        </HelmetProvider>
    );
}

export default AboutUspg;
