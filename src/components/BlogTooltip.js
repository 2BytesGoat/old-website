import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogTooltip = (props) => {
    const [blogPost, setBlogPost] = useState([]);
    useEffect(() => {
        const slug = props.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
                setBlogPost(res.data);
            }
            catch (err) {
            }
        };

        fetchData();
    }, []);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dateCreated = new Date(blogPost.date_created)
    var date = dateCreated.getDate();
    var month = monthNames[dateCreated.getMonth()];
    var year = dateCreated.getFullYear();

    return (
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.category)}</strong>
                <h3 className="mb-0">{blogPost.title}</h3>
                <div className="mb-1 text-muted">{year} {month} {date}</div>
                <p className="card-text mb-auto">{blogPost.excerpt}</p>
                <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
            </div>
            <div className="col-auto d-none d-lg-block">
                <img width='250' height='250' src={blogPost.thumbnail} alt='thumbnail' />
            </div>
        </div>
    );
};

export default BlogTooltip;