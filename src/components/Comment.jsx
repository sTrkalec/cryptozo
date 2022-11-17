import styles from "./css/Comment.module.css"
import { Trash, ThumbsUp } from "phosphor-react"
import { Avatar } from "./Avatar"



export function Comment({content, onDeleteComment}) {

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment }>
            <Avatar hasBorder={false} src="https://github.com/strkalec.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Miranda</strong>
                            <time title="16 de Novembro" dateTime="2022-11-16">
                                Cerca de 1H atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}