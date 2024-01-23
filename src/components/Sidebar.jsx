import styles from "./Sidebar.module.css";
import userBg from "../assets/bguser.png"
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return <aside className={styles.sidebar}>
    <img className={styles.cover} src={userBg}/>
    <div className={styles.profile}>
       <Avatar src="https://github.com/joaovvs.png"/>

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
