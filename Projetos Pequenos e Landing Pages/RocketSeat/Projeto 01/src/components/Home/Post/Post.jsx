import React from 'react';
import ProfilePicture from "../../GlobalComponents/ProfilePicture/ProfilePicture.jsx";
import styles from './post.module.css'
import Button from "../../GlobalComponents/Button/Button.jsx";
import Reply from "../replys/Reply.jsx";

function Post({data, user}) {
    const [posts, setPosts] = React.useState(data)
    const [comments, setComments] = React.useState(data.comments)
    const textarea = React.useRef()

    function handleComment(e){
        let newId = 1
        e.preventDefault()
        setComments((prev)=>{
            if(prev.length > 0)
                newId = prev.at(-1).id + 1

            return [...prev, {
                author: user.username,
                elapsedTime: "Quase agora",
                id: newId,
                likes: 0,
                profilePicture: "/profile/profileIcon.png",
                textComment: textarea.current.value,
            }]
        })
    }

    return (
        <article className={styles.container}>
            <header className={styles.containerAuthor}>
                <ProfilePicture picturePath={posts.profilePicture}/>
                <div className={styles.wrapper}>
                    <div className={styles.author}>
                        <h2>{posts.author}</h2>
                        <span className={styles.subtitle}>
                            {posts.role}
                        </span>
                    </div>

                    <span>{posts.elapsedTime}</span>
                </div>
            </header>

            <section className={styles.containerFeedback}>
                <p className={styles.feedback}> {posts.postContent} </p>
            </section>

            <form onSubmit={handleComment} className={styles.sendFeedback}>
                <h2 className={styles.title}>Deixe seu Feedback</h2>
                <textarea ref={textarea} placeholder={'Que incrível!'} rows={5} className={styles.feedbackArea}/>
                <Button type={'submit'} styleChosen={'outlined'}> Publicar </Button>
            </form>

            {comments.length > 0 && comments.map(item => <Reply key={item.id} setPosts={setPosts} data={item}/>).reverse()}
        </article>
    );
}

export default Post;