import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from './Blog';

const Blogs = () => {
    const [Blogs, setblog]= useState([]);
    useEffect(()=>{
        fetch('./Blog.JSON')
        .then(res => res.json())
        .then(data => setblog(data))
    }, [])
    return (
        <div className="container mt-5 pt-3">
            
            <Row xs={1} md={2} className="g-4 container shadow p-3 mb-5 bg-body rounded">
        {
            Blogs.map (blog=> <Blog
            key={blog.id}
            blog={blog}
            ></Blog>)
        }
</Row>
        </div>
    );
};

export default Blogs;