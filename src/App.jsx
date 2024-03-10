import './App.css'
import {Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import NewPost from './pages/newPostPage/NewPost.jsx';
import Overview from './pages/overviewPage/Overview.jsx';
import PostDetail from './pages/postDetailPage/Post.jsx';
import NotFound from './pages/notFoundPage/NotFound.jsx';
import Navbar from "./components/navgation/Navbar.jsx";
//import logo from './assets/logo-white.png'

function App() {
    return (
        <>
            <header className="outer-container">
                <Navbar />
            </header>
        <main className="outer-container">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/newpost" element={<NewPost />}/>
                <Route path="/posts" element={<Overview />}/>
                <Route path="/post/:id" element={<PostDetail />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </main>
            <footer></footer>
        </>
    )
}

export default App
