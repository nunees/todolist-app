import styles from './index.module.css';
import logo from '../../assets/logo.png';

export function Header(){
    return(
        <header className={styles.header}>
            <img src={logo} alt="todolist App" />
        </header>
    );
}