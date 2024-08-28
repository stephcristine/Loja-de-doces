import styles from './Button.module.css'

function ButtonUsuario(){

    function meuEvento(){
        
    }

    return(
        <div className={styles.containerHeader}> 
            <button className={styles.button} onClick={meuEvento}>Usuário</button>
        </div>
    )
}

export default ButtonUsuario