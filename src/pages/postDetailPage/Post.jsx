import './Post.css';
import posts from '../../constants/data.json';
import {Link, useParams} from "react-router-dom";
import formatDateString from '../../helpers/formatDateString.js';

function Post() {

    const {id} = useParams();

    const {title, readTime, subtitle, author, created, content, comments, shares} = posts.find((post) => {
        return post.id.toString() === id;
    });

    return (
        <article className="inner-container">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p className="post-detail-author">Geschreven door <em>{author}</em> op {formatDateString(created)}</p>
            <span className="post-detail-read-time">
                    <p> {readTime} minuten lezen</p>
                </span>
            <p>{content}</p>
            <p>{comments} reacties - {shares} keer gedeeld</p>
            <Link to="/posts" className="back-link">
                <p>Terug naar de overzichtspagina</p>
            </Link>
        </article>
    );
}

export default Post;