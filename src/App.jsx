import "./global.css";
import styles from "./App.module.css";

import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { posts } from "./lib/data"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(item => (
            <Post 
            key={item.id}
            author={item.author}
            content={item.content}
            publishedAt={item.publishedAt}/>
          ))}
        </main>
      </div>
    </div>
  );
}
