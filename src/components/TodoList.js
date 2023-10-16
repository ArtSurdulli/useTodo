import React from "react";
import Button from "./Button";
import TodoCard from "./TodoCard";

function TodoList({ todos, removeTodo }) {
  if (todos.length <= 0) {
    return (
      <h2 className="font-bold	text-4xl  underline decoration-sky-500/[.25] decoration-wavy	decoration-from-font text-center my-4">
        No todos in the list add some
      </h2>
    );
  }
  return (
    <ul className="w-full bg-gradient-to-r from-violet-500/50 to-sky-500/50 my-10 p-3 flex flex-col gap-12 rounded-3xl shadow-2xl shadow-slate-950/80  md:p-5">
      <h2 className="font-bold text-slate-900	text-4xl  underline decoration-sky-500/[.25] decoration-wavy	decoration-from-font text-center my-4">
        {" "}
        TodoList
      </h2>
      {todos.map((todo) => (
        <TodoCard key={todo.id} removeTodo={removeTodo} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
