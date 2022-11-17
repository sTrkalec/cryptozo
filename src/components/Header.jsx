import styles from "./css/Header.module.css"
import logoOzo from "../assets/ozoo 1.svg"

console.log(logoOzo)

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoOzo} alt="Logotipo do oZo" />
        </header>
    );
}