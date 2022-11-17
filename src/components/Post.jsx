import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import styles from "./css/Post.module.css"
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/strkalec.png" />
                    <div className={styles.authorInfo}>
                        <strong>Gabriel Miranda</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="16 de Novembro" dateTime="2022-11-16">
                    Publicado há 1H
                </time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Brasil campeao da copa e Galo maior do Brasil!!!!!!</p>

                <p>👉{" "}<a href="#">sTrkalec/myPrototype</a></p>

                <p>
                    <a href="#">#weed</a>{" "}
                    <a href="#">#udf</a>{" "}
                    <a href="#">#test</a>{" "}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}