/* eslint-disable react/prop-types */
import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((prevState) => prevState + 1)
  }

  return (
    <div className={styles.commentWrapper}>
      <Avatar hasBorder={false} src="https://github.com/joaovvs.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> João Vinícius</strong>
              <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
            <button onClick={handleLikeComment}>
                <ThumbsUp size={20}/>
                Aplaudir <span>{likeCount}</span>
            </button>
            </footer>
      </div>
    </div>
  );
}
