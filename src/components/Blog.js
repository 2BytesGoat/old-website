import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import BlogTooltip from "./BlogTooltip";
import CategoryLinks from "./CategoryLinks";

import loading from "../media/loading_animation.gif";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/featured`
        );
        setFeaturedBlog(res.data[0]);
      } catch (err) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/`
        );
        setBlogs(res.data);
        setFilteredBlogs(res.data);
        setIsPending(false);
      } catch (err) {}
    };

    fetchBlogs();
  }, []);

  const handleFilterCategories = (categoryName) => {
    if (!categoryName) {
      setFilteredBlogs(blogs);
    } else {
      const filteredBlogs = blogs.filter(
        (blog) => blog.category === categoryName
      );
      setFilteredBlogs(filteredBlogs);
    }
  };

  return (
    <div>
      {isPending && (
        <div className="container">
          <img src={loading} alt="loading..." className="mx-auto d-block" />
          <h2 className="text-center">Loading...</h2>
        </div>
      )}
      {!isPending && (
        <div className="container">
          <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
              <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
              <p className="lead my-3">{featuredBlog.excerpt}</p>
              <p className="lead mb-0">
                <Link
                  to={`/blog/${featuredBlog.slug}`}
                  className="text-white font-weight-bold"
                >
                  Continue reading...
                </Link>
              </p>
            </div>
          </div>
          <CategoryLinks onFilter={handleFilterCategories} />
          <div className="row mb-2">
            {filteredBlogs.map((blogPost) => (
              <div key={blogPost.slug} className="col-md-6">
                <BlogTooltip id={blogPost.slug}></BlogTooltip>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
