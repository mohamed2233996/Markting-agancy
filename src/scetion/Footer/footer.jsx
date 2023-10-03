import React from 'react';
import "./footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='scetion-padding'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-3">
                        <h3 className='footer-titel'>عن الشركة</h3>
                        <p> هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر</p>
                        <a className="footer-brand color-links-footer" href="#">
                            وكالة ميدو
                        </a>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <h3 className='footer-titel'>روابط مهمه</h3>
                        <ul className=' navbar-nav'>
                            <li className="nav-item active">
                                <Link className="color-links-footer nav-link" to={"/الرئسية"}>الرئسيه</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="color-links-footer nav-link" to={"/عن-الشركة"}>عن الشركه</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="color-links-footer nav-link" to={"/الخدمات"}>الخدمات</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="color-links-footer nav-link" to={"/الاسئله-الشائعة"}>الاسئله الشائعة</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="color-links-footer nav-link" to={"/المدونة"}>المدونه</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="color-links-footer nav-link" to={"/توصل-معنا"}>تواصل معنا</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <h3 className='footer-titel'>تواصل معنا</h3>
                        <div>
                            <p>جمهوريه مصر العربية ,المنوفيه  منوف</p>
                            <p>الهاتف: <span>01025402633</span></p>
                            <p>البريد الالكتروني: <span>medomano771@gmail.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
