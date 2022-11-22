import styles from "./css/Comment.module.css"
import { Trash, ThumbsUp } from "phosphor-react"
import { Avatar } from "./Avatar"
import { useState } from "react"
import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"



export function Comment({ content, onDeleteComment }) {

    const publishedDateForm = format(new Date(), "d 'de' LLLL 'às' HH:mm'h' ", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(new Date(), {
        locale: ptBR,
        addSuffix: true
    })

    const [likeCount, setLikeCount] = useState(0)


    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/strkalec.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Miranda</strong>
                            <time title={publishedDateForm} dateTime={new Date()}>
                                {publishedDateRelativeToNow}
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}