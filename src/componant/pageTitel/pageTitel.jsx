import React from 'react';
import './PageTitel.css'

const PageTitel = (props) => {
    return (
        <div className='PageTitel'>
            <div className='container'>
                <h1 className='page-titel'>{props.pageName}</h1>
            </div>
        </div>
    );
}

export default PageTitel;
