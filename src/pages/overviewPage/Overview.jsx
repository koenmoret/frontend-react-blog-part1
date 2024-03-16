import './Overview.css';
//import posts from '../../constants/data.json';
import PostItem from '../../components/postItem/PostItem.jsx';
//import axios from "axios";
import {useContext} from "react";
import {HandlePosts} from '../../App.jsx';
import {Errors} from '../../App.jsx';

function Overview() {

    const blogPosts = useContext(HandlePosts);
    const errors = useContext(Errors);

    return (
        <>
            <section className="not-found-section outer-content-container">
                <div className="inner-content-container">
                    <h1>Bekijk alle {blogPosts.posts.length} posts</h1>

                    <ul className="post-list">
                        {blogPosts.posts.map((post) => {
                            return <PostItem
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                shares={post.shares}
                                comments={post.comments}
                                author={post.author}
                            />
                        })}
                    </ul>
                </div>
            </section>
            {errors.error && "Er is iets misgegaan bij het ophalen van de data. Probeer het opnieuw"}
        </>
    );
}

export default Overview;