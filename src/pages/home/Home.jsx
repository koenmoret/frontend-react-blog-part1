import './Home.css';
import {HandlePosts} from '../../App.jsx';
import {useContext} from "react";
function Home() {

    const blogPosts = useContext(HandlePosts);

    console.log("blogPosts: "+blogPosts.posts.length);

    return (
        <section className="not-found-section outer-content-container">
            <div className="inner-content-container">
                <h1>Home</h1>

                <span>

                </span>

           </div>
        </section>
    );
}

export default Home;