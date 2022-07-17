import { ClipboardText, Trash } from "phosphor-react";
import { AddTodo } from "../AddTodo";
import styles from "./index.module.css";

export function Todos() {
  const hasTodos = true;
  return (
    <>
      {!hasTodos && (
        <div className={styles.noTodos}>
          <ClipboardText />
          <strong>Voce ainda nao tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus items a fazer</p>
        </div>
      )}

      <div className={styles.todos}>
        <AddTodo />
      </div>
    </>
  );
}
