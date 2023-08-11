import React from 'react';
import ProfilePicture from "../../GlobalComponents/ProfilePicture/ProfilePicture.jsx";
import styles from './reply.module.css'

function Reply({data, setPosts}) {
    const [isLiked, setIsLiked] = React.useState(false)
    const [replies, setReplies] = React.useState(data)

    function handleLike(){
        if(isLiked){
            setReplies((prev)=>{
                return {...prev, likes: prev.likes - 1 }
            })
        }else{
            setReplies((prev)=>{
                console.log(`foi!`)
                return {...prev, likes: prev.likes + 1 }
            })
        }
        console.log('show')
        setIsLiked(!isLiked)
    }

    return (
        <article className={styles.container}>
            <ProfilePicture picturePath={replies.profilePicture}/>

            <div className={styles.containerReply}>
                <div className={styles.author}>
                    <h3 className={styles.title}>{replies.author}</h3>
                    <span className={styles.postedTime}>{replies.elapsedTime}</span>
                    <p className={styles.comment}>{replies.textComment}</p>
                </div>

                <div className={`${styles.containerLiked} ${isLiked ? styles.liked : ''}`}>
                    <i className="fa-regular fa-thumbs-up"></i>
                    <button className={styles.btnLike} onClick={handleLike}>Aplaudir</button>
                    <span className={styles.likes}>{replies.likes}</span>
                </div>
            </div>
        </article>
    );
}

export default Reply;