import { ClipboardText, PlusCircle, Trash } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { AddTodo } from "./AddTodo";
import styles from "./Todos.module.css";
import {v4 as uuidv4} from 'uuid';

interface ITodo{
  id: string;
  content: string;
  done: boolean;
}

export function Todos() {
  const[tasksDone, setTasksDone] = useState(0);

  const[todos, setTodos] = useState<ITodo[]>([]);
  const[newTodoText, setNewTodoText] = useState("");

  function handleNewTodo(event: ChangeEvent<HTMLInputElement>): void{
    setNewTodoText(event.target.value);
  }

  function handleCreateNewTodo(event: ChangeEvent<HTMLFormElement>): void{
   event.preventDefault();
   const todo = {
    id: uuidv4(), 
    content: newTodoText, 
    done: false
   }
   setTodos([...todos, todo]);
   setNewTodoText("");
  }

  function handleDeleteTodo(id: string): void{
    const todosWithoutDeletedOne = todos.filter(todo => todo.id !== id);
    setTodos(todosWithoutDeletedOne);
  }

  function handleToogleDone(id: String):void{
    const toggledTodos = todos.map((todo) => {
      if(todo.id === id){
        todo = {
          ...todo,
          done: !todo.done
        };
      }
      return todo;
    })
    setTodos(toggledTodos);
  }
  
  
  return (
    <>
      <form 
        onSubmit={handleCreateNewTodo} 
        className={styles.todoForm}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"  
          value={newTodoText}
          onChange={(event)=>handleNewTodo(event)}/>
        <button type="submit">Criar<PlusCircle /></button>
      </form>

      <div className={styles.counter}>
            <p>Tarefas criadas
              <span className={styles.counterNumber}>{todos.length === 0 ? "0" : todos.length}</span>
            </p>
            <p>Concluidas
              <span className={styles.counterNumber}>{`${tasksDone} de ${todos.length}`}</span>
            </p>
       </div> 

      {todos.length === 0 && (
        <div className={styles.noTodos}>
          <ClipboardText />
          <strong>Voce ainda nao tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus items a fazer</p>
        </div>
      )}

      { todos.length > 0 && 
      <div className={styles.todos}>
        {todos.map((todo)=>{
          return(
            // Refactor: Add key to the component
            <AddTodo todo={todo} onDeleteTodo={handleDeleteTodo} onToggleDone={handleToogleDone}/>
          )
        })}
      </div>
      }
    </>
  );
}
