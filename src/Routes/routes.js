import React from 'react';
import './custom.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/post';
import Footer from '../components/Footer';
import Home from '../components/Home';

const RoutesFile = ({ posts }) => {
    return (
        <div>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Post posts ={posts} />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
};
export default RoutesFile;
