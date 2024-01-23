/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Muito bem, parabéns! 👏👏"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Campo obrigatório')
  }

  function deleteComment(content) {
    setComments(comments.filter((comment) => comment !== content));
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return (
              <React.Fragment key={line.content}>
                <p>{line.content}</p>
              </React.Fragment>
            );
          } else if (line.type === "link") {
            return (
              <React.Fragment key={line.content}>
                <p>
                  <a href="#">{line.content}</a>
                </p>
              </React.Fragment>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={(event) => setNewCommentText(event.target.value)}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <React.Fragment key={comment}>
            <Comment content={comment} onDeleteComment={deleteComment} />
          </React.Fragment>
        ))}
      </div>
    </article>
  );
}
