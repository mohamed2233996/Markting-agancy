import React from 'react';
import { ConctInfo, ConctInputs, Footer, Header, Maps } from '../scetion';
import { PageTitel } from '../componant';
import   { Helmet, HelmetProvider } from 'react-helmet-async';

const ConectPg = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>تواصل معنا</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />
            <main>
                <PageTitel pageName="تواصل معنا" />
                <ConctInfo
                    conctinfoGmail="Medomano771@gmail.com"
                    conctinfoPhone="01025402633"
                    conctinfoLocation="Shopra Blola"
                    conctinfoFacebook="Mhamed Gamal"
                />
                <ConctInputs />
                <Maps />
            </main>
            <Footer />
        </HelmetProvider>
    );
}

export default ConectPg;
