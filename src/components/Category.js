import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import BlogTooltip from './BlogTooltip';
import CategoryLinks from './CategoryLinks';

const Category = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');
    const {id} = useParams();

    useEffect(() => {
        const category = id;
        setCurrentCategory(capitalizeFirstLetter(category));

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const fetchData = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`, { category }, config);
                setBlogs(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [id]);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getCategoryBlogs = () => {
        let list = [];
        let result = [];

        blogs.map(blogPost => {
            const formatter = new Intl.DateTimeFormat('en', { month: 'short' });
            const dateCreated = new Date(blogPost.date_created)
            var date = dateCreated.getDate();
            var month = formatter.format(dateCreated.getMonth() + 1);
            var year = dateCreated.getFullYear();

            return list.push(
                <BlogTooltip id={blogPost.slug}></BlogTooltip>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }

        return result;
    };

    return (
        <div className='container mt-3'>
            <h3 className='display-4'>{currentCategory} Category</h3>
            <CategoryLinks />
            {getCategoryBlogs()}
        </div>
    );
};

export default Category;