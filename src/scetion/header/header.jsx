import React, { useState } from 'react';
import './header.css'
import 'mdb-ui-kit/css/mdb.min.css';
import { BsListNested } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
      // 👇️ toggle isActive state on click
    document.getElementById("navbarToggleExternalContent").classList.toggle("d-block")
        // setIsActive(current => !current);
    }

    return (
        <header className=' sticky-top'>
            <nav className="navbar navbar-expand-lg d-lg-block" style={{ zIndex: 2000 }}>
                <div className="container-fluid">       
                    <Link className="navbar-brand mt-2 mt-lg-0" to={"/الرئسية"}>
                        وكالة ميدو
                    </Link>
                    <div  id="navbarToggleExternalContent" className= "collapse navbar-collapse" >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item ms-2 active">
                                <Link className="nav-link" to={"/الرئسية"}>الرئسيه</Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link className="nav-link" to={"/عن-الشركة"}>عن الشركه</Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link className="nav-link" to={"/الخدمات"}>الخدمات</Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link className="nav-link" to={"/الاسئله-الشائعة"}>الاسئله الشائعة</Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link className="nav-link" to={"/المدونة"}>المدونه</Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link className="nav-link" to={"/توصل-معنا"}>تواصل معنا</Link>
                            </li>
                        </ul>
                    </div>
                    <button
                        onClick={handleClick}
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <BsListNested />
                    </button>
                        <a className="btn-blue fs-3" href="#">ابدا الان!</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
