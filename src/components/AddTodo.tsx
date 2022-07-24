import { Check, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './AddTodo.module.css';

interface ITodo{
  id: string;
  content: string;
  done: boolean;
}

interface ITodoProps{
  todo: ITodo;
  onDeleteTodo: (id: string) =>  void;
  onToggleDone: (id: string) =>  void;
}

export function AddTodo({todo, onDeleteTodo, onToggleDone}:ITodoProps){
    const [isChecked, setIsChecked] = useState(false);

    function handleDeleteTodo(){
      onDeleteTodo(todo.id);
    }

    function handleToggleDone(){
      onToggleDone(todo.id);
      setIsChecked(!isChecked);
    }

    
    console.log(isChecked);
    return(
        <div className={styles.todo} >
          <input type="checkbox" />

          <span 
            className={!isChecked ? styles.checkbox : styles.checkboxActive}
            onClick={handleToggleDone}
            >
            {isChecked && <Check />}
          </span>

          <p 
            key={todo.id} 
            className={isChecked ? styles.textDone : styles.textTodo}>
            {todo.content}
          </p>
          <button 
            onClick={handleDeleteTodo} 
            title="Deletar tarefa">
              <Trash />
          </button>
        </div> 
    );
}