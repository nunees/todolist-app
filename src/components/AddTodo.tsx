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

    function handleDeleteTodo(){
      onDeleteTodo(todo.id);
    }

    function handleToggleDone(){
      onToggleDone(todo.id);
    }

    const [isChecked, setIsChecked] = useState(true);
    console.log(todo);
    return(
        <div className={styles.todo} >
          <input 
            type="checkbox"  
            onChange={() => setIsChecked(!isChecked)}/>

          <span 
            className={isChecked ? styles.checkbox : styles.checkboxActive}
            onClick={handleToggleDone}
            > 
          </span>

          <p 
            key={todo.id} 
            className={""}>
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