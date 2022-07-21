import { Check, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './AddTodo.module.css';

export function AddTodo(){
    const [isChecked, setIsChecked] = useState(true);
    return(
        <div className={styles.todo}>
          <input type="checkbox"  onChange={() => setIsChecked(!isChecked)}/>
          {/* <span className={`checkbox ${isChecked ? "checkboxActive" : ""}`}> */}
          <span className={isChecked ? styles.checkbox : styles.checkboxActive}> 
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            placeat possimus{" "}
          </p>
          <Trash />
      </div>
    );
}