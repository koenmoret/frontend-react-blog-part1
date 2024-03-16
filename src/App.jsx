import './App.css'
import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import NewPost from './pages/newPostPage/NewPost.jsx';
import Overview from './pages/overviewPage/Overview.jsx';
import PostDetail from './pages/postDetailPage/Post.jsx';
import NotFound from './pages/notFoundPage/NotFound.jsx';
import Navbar from "./components/navgation/Navbar.jsx";

import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const HandlePosts = createContext("");
export const Errors = createContext("");


function App() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const [error, toggleError] = useState(false);

    const handleAddPost = async (data) => {
        toggleError(false);

        const url = 'http://localhost:3000/posts/';

        try {
            const response = await axios.post(url,{
                            "title": data.titel,
                            "subtitle": data.subtitel,
                            "content": data.post,
                            "author": data.auteur,
                            "created": "2023-09-21T09:30:00Z",
                            "readTime": 1,
                            "comments": 0,
                            "shares": 0
                        });
            setPosts(prevPosts => [...prevPosts, response.data]); // Voeg de nieuwe post toe aan de bestaande posts
            navigate('/posts');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    const handleDeletePost = async (postId) => {
        toggleError(false);

        const url = `http://localhost:3000/posts/${postId}`;

        try {
            await axios.delete(url);
            setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
            navigate('/posts');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        toggleError(false);

        const url = 'http://localhost:3000/posts/';

        try {
            const response = await axios.get(url);
            console.log("response: " + response.data);
            setPosts(response.data);
            console.log(posts);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    const handlePosts = {
        posts: posts,
        setPosts: setPosts,
        addPost: handleAddPost,
        deletePost: handleDeletePost
    }

    const siteErrors = {
        error: error,
        toggleError: toggleError
    }

    return (
        <>
            <header className="outer-container">
                <Navbar/>
            </header>
            <main className="outer-container">
                <HandlePosts.Provider value={handlePosts}>
                    <Errors.Provider value={siteErrors}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/newpost" element={<NewPost/>}/>
                            <Route path="/posts" element={<Overview/>}/>
                            <Route path="/post/:id" element={<PostDetail/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </Errors.Provider>
                </HandlePosts.Provider>
            </main>
            <footer></footer>
        </>
    )
}

export default App
