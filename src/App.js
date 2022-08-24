import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';
import About from './components/About'

console.log(process.env)

const App = () => (
    <HashRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Layout>
    </HashRouter>
    
);

export default App;
