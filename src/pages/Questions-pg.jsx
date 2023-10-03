import React from 'react';
import { Footer, Header, QuestionsS, About2 } from '../scetion';
import { Email3inbuts, PageTitel } from '../componant';
import   { Helmet, HelmetProvider } from 'react-helmet-async';

const QuestionsPg = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>الاسئلة الشائعة</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />
            <main>
                <PageTitel pageName="الاسئلة الشائعة" />
                <QuestionsS />
                <Email3inbuts
                    titel="طلب دعم فني"
                    titel2="لم تجد إجابة سؤالك؟ أرسل لنا وسنساعدك"
                    doing="احصل الان!"
                    placeholder1= "اسمك الثلاثي"
                    placeholder2="البريد الالكتروني"
                    placeholder3="الموقع الالكتروني"
                />
                <About2 />
            </main>
            <Footer />
        </HelmetProvider>
    );
}

export default QuestionsPg;
