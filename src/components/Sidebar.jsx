import styles from "./Sidebar.module.css";
import userBg from "../assets/bguser.png"
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return <aside className={styles.sidebar}>
    <img className={styles.cover} src={userBg}/>
    <div className={styles.profile}>
        <img className={styles.avatar} src='https://github.com/joaovvs.png' alt='foto de perfil joaovvs'/>

        <strong>João Santana</strong>
        <span>Fullstack developer</span>

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil</a>
        </footer>
    </div>
  </aside>;
}
