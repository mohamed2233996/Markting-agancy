import React from 'react';
import "./comment-inputs.css"
import { Link } from 'react-router-dom';

const CommentInputs = () => {
    return (
        <div className='comment-inputs' id='comments'>
            <h1>اترك تعليقاً</h1>
            <p className='fs-5'>لن يتم نشر عنوان بريدك الإلكتروني. الحقول الإلزامية مشار إليها بـ *</p>
            <form action="" method="post">
                <p className='input-cont'>
                    <label>التعليق*</label><br />
                    <textarea type="text" placeholder='اكتب تعليقك'/>
                </p>
                <p className='input-cont'>
                    <label>الاسم*</label><br />
                    <input type="name"/>
                </p>
                <p className='input-cont'>
                    <label>البريد الالكتروني*</label><br />
                    <input type="email"/>
                </p>
                <p className='input-cont'>
                    <label>الموقع الالكتروني*</label><br />
                    <input type="email"/>
                </p>
                <p>
                    <input type="checkbox" value="yas" className='ms-2'/>
                    <span className='fs-5'>احفظ اسمي، بريدي الإلكتروني، والموقع الإلكتروني في هذا المتصفح لاستخدامها المرة المقبلة في تعليقي.</span>
                </p>
                <p className='btn-send my-5'>
                    <Link to={"/send"} className="btn-blue-dark fs-4">أرسل التعليق</Link>
                </p>
            </form>
        </div>
    );
}

export default CommentInputs;
