import styles from './index.module.css';
import { PlusCircle } from 'phosphor-react';

export function Input(){
    return( 
        <div className={styles.add}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button type='submit'>Criar<PlusCircle /></button>
        </div>
    )
}