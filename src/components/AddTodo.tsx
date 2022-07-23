import { Check, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './AddTodo.module.css';

interface ITodo{
  content: string;
  id: number;
  onDeleteTodo: (todo: string) =>  void;
}

export function AddTodo({content, id, onDeleteTodo}:ITodo){

    function handleDeleteTodo(){
      onDeleteTodo(content);
    }

    const [isChecked, setIsChecked] = useState(true);
    return(
        <div className={styles.todo} >
        <input type="checkbox"  onChange={() => setIsChecked(!isChecked)}/>
        <span className={isChecked ? styles.checkbox : styles.checkboxActive}> 
        </span>
        <p key={id}>
          {content}
        </p>
        <button onClick={handleDeleteTodo} title="Deletar tarefa">
          <Trash />
        </button>
        
    </div> 
    );
}