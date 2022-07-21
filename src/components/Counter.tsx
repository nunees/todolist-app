import styles from './Counter.module.css';

export function Counter(){
    return(
        <div className={styles.counter}>
            <p>Tarefas criadas<span className={styles.counterNumber}>0</span></p>
            <p>Concluidas<span className={styles.counterNumber}>0</span></p>
        </div>
    );
}