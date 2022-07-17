import { Trash } from 'phosphor-react';
import styles from './index.module.css';

export function AddTodo(){
    return(
        <div className={styles.todo}>
        <input type="checkbox" checked/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          placeat possimus{" "}
        </p>
        <Trash />
      </div>
    );
}