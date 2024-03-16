import './PostItem.css';
import {Link} from 'react-router-dom';

function PostItem({id, title, shares, comments, author}) {

    return (
        <li className="post-item">
            <h2 className="post-title"><Link to={`/post/${id}`}>{title}</Link> ({author})</h2>
            <p>{comments} reacties - {shares} keer gedeeld</p>
        </li>
    );
}

export default PostItem;