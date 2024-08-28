import styles from '../View/PaginaDoces.module.css'

function Title({name}) {
    return (
            <div className={styles.title}>
                <h1 className={styles.h1}>{name}</h1>
            </div>
    );
}

export default Title;