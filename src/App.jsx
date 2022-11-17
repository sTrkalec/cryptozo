import { Header } from "./components/Header"
import styles from "./App.module.css"
import { Post } from "./components/Post"
import { Siderbar } from "./components/Sidebar"

//author {avatar_url: "", name: "", rule: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/strkalec.png",
      name: "Gabriel Miranda",
      role: "Full Stack @Dashcommerce"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Brasil campeao da copa e Galo maior do Brasil!!!!!!" },
      { type: "link", content: "sTrkalec/myPrototype" },
      { type: "link", content: "#paz" }
    ],
    publishedAt: new Date("2022-11-17 10:23:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/kevencript.png",
      name: "Gabriel Braga",
      role: "Developer @onRise"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Brasil campeao da copa e Galo maior do Brasil!!!!!!" },
      { type: "link", content: "sTrkalec/myPrototype" },
      { type: "link", content: "#React" }
    ],
    publishedAt: new Date("2022-11-10 23:24:03")
  }

]

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map(post=> {
            return (
              <Post
                key={post.id}
                author={post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


export default App
