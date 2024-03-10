import './NewPost.css';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import calculateReadTime from "../../helpers/calculateReadTime.js";

function NewPost() {
    const navigate = useNavigate();
    const {register, handleSubmit } = useForm();

    function handleFormSubmit(data) {
        console.log({data,
            shares: 0,
            comments: 0,
            created: new Date().toISOString(),
            readTime: calculateReadTime(data.post)
        });
        
        console.log('De blog is gemaakt');
        navigate('/posts');
    }

    return (
        <article className="inner-container">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <label htmlFor="titel-field">
                    Titel:
                    <input
                        type="text"
                        {...register("titel")}
                        id="titel-field"
                    />
                </label>

                <label htmlFor="subtitel-field">
                    Subtitel:
                    <input
                        type="text"
                        {...register("subtitel")}
                        id="subtitel-field"
                    />
                </label>

                <label htmlFor="auteur-field">
                    Auteur:
                    <input
                        type="text"
                        {...register("auteur")}
                        id="auteur-field"
                    />
                </label>

                <label htmlFor="post-field">
                    Bericht:
                    <textarea
                        id="post-field"
                        rows="4"
                        cols="40"
                        placeholder="Laat je bericht achter"
                        {...register("post")}
                    ></textarea>
                </label>

                <button type="submit" className="btn btn-primary">
                    Versturen
                </button>
            </form>

        </article>
    );
}

export default NewPost;
