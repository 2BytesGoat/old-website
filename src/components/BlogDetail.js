import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
    const [blog, setBlog] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const slug = id;
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
                setBlog(res.data);
            }
            catch (err) {

            }
        };
        fetchData();
    }, [id]);

    const createBlog = () => {
        return {__html: blog.content}
    };

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dateCreated = new Date(blog.date_created)
    var date = dateCreated.getDate();
    var month = monthNames[dateCreated.getMonth()];
    var year = dateCreated.getFullYear();


    return (
        <div className='container-sm'>
            <h1 className='display-2'>{blog.title}</h1>
            <h2 className='text-muted mt-3'>Category: {capitalizeFirstLetter(blog.category)}</h2>
            <h5 className="mb-1 text-muted">{year} {month} {date}</h5>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className='lead mb-5'><Link to='/blog' className='font-weight-bold'>Back to Blogs</Link></p>
        </div>
    );
};

export default BlogDetail;