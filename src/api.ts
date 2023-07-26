import { TodoTypes } from "./TodoTypes";

export const getAllTodos = async (): Promise<TodoTypes[]> => {
  const res = await fetch(`http://localhost:3001/tasks`, { cache: "no-store" });
  const todos = res.json();

  return todos;
};

export const addTodo = async (todo: TodoTypes): Promise<TodoTypes> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = res.json();

  return newTodo;
};

export const editTodo = async (
  id: string,
  newText: string
): Promise<TodoTypes> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newText }),
  });
  const updatedTodos = res.json();

  return updatedTodos;
};

export const deleteTodo = async (id: string): Promise<TodoTypes> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deleteTodos = res.json();

  return deleteTodos;
};
