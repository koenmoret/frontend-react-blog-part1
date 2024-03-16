import './Post.css';
import {Link, useParams} from "react-router-dom";
import formatDateString from '../../helpers/formatDateString.js';
import {HandlePosts} from '../../App.jsx';
import {useContext} from "react";

function Post() {

    const blogPosts = useContext(HandlePosts);
    const {id} = useParams();
    const post = blogPosts.posts[id-1];

    return (
        <article className="inner-container">
            <h1>{post.title}</h1>
            <h2>{post.subtitle}</h2>
            <p className="post-detail-author">Geschreven door <em>{post.author}</em> op {formatDateString(post.created)}</p>
            <span className="post-detail-read-time">
                    <p> {post.readTime} minuten lezen</p>
                </span>
            <p>{post.content}</p>
            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
            <Link to="/posts" className="back-link">
                <p>Terug naar de overzichtspagina</p>
            </Link>
            <button onClick={() => blogPosts.deletePost(post.id)}>Delete post</button>
        </article>
    );
}

export default Post;