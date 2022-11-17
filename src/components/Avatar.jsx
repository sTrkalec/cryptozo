import styles from "./css/Avatar.module.css"

export function Avatar({ hasBorder = true, src }) {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder}
            src={src} />
    )
}