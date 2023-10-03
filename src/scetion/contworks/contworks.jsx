import React from 'react';
import './contworks.css'

const Contworks = () => {
    return (
        <div className='scetion-padding contworks'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 mt-2 text-center p-3 text-light">
                        <h1 className='cont-text'>+<span>225</span></h1>
                        <p className='fs-5'>مشاريع مكتملة</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-2 text-center p-3 text-light">
                        <h1 className='cont-text'>%<span>795</span></h1>
                        <p className='fs-5'>النمو السنوي</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-2 text-center p-3 text-light">
                        <h1 className='cont-text'>+<span>908</span></h1>
                        <p className='fs-5'>ساعة برمجية</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-2 text-center p-3 text-light">
                        <h1 className='cont-text'>+<span>79</span></h1>
                        <p className='fs-5'>فريق عمل</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contworks;
