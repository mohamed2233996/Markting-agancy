import React from 'react';
import "./side-links.css"
import { Link } from "react-router-dom";

const SideLinks = () => {
    return (
        <div className='side-links text-center'>
            <h3 className="side-titel">التصنيفات</h3>
            <ul className="navbar-nav mb-2 mb-lg-0 p-0">
                <li className="nav-item active">
                    <Link className="nav-link" to={"/الرئسية"}>الرئسيه</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/عن-الشركة"}>عن الشركه</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/الخدمات"}>الخدمات</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/الاسئله-الشائعة"}>الاسئله الشائعة</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/المدونة"}>المدونه</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/توصل-معنا"}>تواصل معنا</Link>
                </li>
            </ul>
        </div>
    );
}

export default SideLinks;
