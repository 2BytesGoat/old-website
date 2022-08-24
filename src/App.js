import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Layout from './hocs/Layout';
import Home from './components/Home';
import About from './components/About'

console.log(process.env)

const App = () => (
    <HashRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Layout>
    </HashRouter>
    
);

export default App;
