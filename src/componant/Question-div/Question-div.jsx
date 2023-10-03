import React from 'react';
import './Question-div.css'
import { BiSolidChevronLeft } from "react-icons/bi";
import { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit'


const QuestionDiv = (props) => {

    const [showShow, setShowShow] = useState(false);

    const toggleShow = (e) => {
        console.log(e)
        e.target.querySelector(".Question-icon").classList.toggle("rotate-coloring")
        setShowShow(!showShow);
    }

    return (
        <div className='toggle-card mt-3'>
            <div className="toggle Question-text" tag='a' onClick={toggleShow}>
                {props.Question}
                <span className='Question-icon'><BiSolidChevronLeft /></span>
            </div>

            <MDBCollapse show={showShow}>
                <div className="card card-body">{props.answer}</div>
            </MDBCollapse>
        </div>
    );
}

export default QuestionDiv;
