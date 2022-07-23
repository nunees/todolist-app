import { ClipboardText, PlusCircle, Trash } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { AddTodo } from "./AddTodo";
import styles from "./Todos.module.css";

export function Todos() {
  const[tasksCreated, setTasksCreated] = useState(0);
  const[tasksDone, setTasksDone] = useState(0);
  const[todoStatus, setTodoStatus] = useState(false);

  const[todos, setTodos] = useState<string[]>([]);
  const[newTodoText, setNewTodoText] = useState("");

  function handleNewTodo(event: ChangeEvent<HTMLInputElement>): void{
    setNewTodoText(event.target.value);
  }

  function handleCreateNewTodo(event: ChangeEvent<HTMLFormElement>): void{
   event.preventDefault();
   setTodos([...todos, newTodoText]);
   setNewTodoText("");
  }

  function handleDeleteTodo(todoToDelete: string): void{
    const todosWithoutDeletedOne = todos.filter((todo) => {
      return todo !== todoToDelete
    });
    setTodos(todosWithoutDeletedOne);
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
            <p>Tarefas criadas<span className={styles.counterNumber}>{tasksCreated === 0 ? "0" : tasksCreated}</span></p>
            <p>Concluidas<span className={styles.counterNumber}>{tasksDone === 0 ? "0" : tasksDone}</span></p>
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
            <AddTodo content={todo} id={todos.indexOf(todo+1)} onDeleteTodo={handleDeleteTodo}/>
          )
        })}
      </div>
      }
    </>
  );
}
