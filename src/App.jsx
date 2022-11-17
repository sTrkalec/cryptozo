import { Header } from "./components/Header"
import styles from "./App.module.css"
import { Post } from "./components/Post"
import { Siderbar } from "./components/Sidebar"

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}


export default App
