import { TodoTypes } from '@/TodoTypes';
import React from 'react'
import Todo from './Todo';

interface TodoListProps{
    todos: TodoTypes[];
}

const TodoList = ({todos} : TodoListProps) =>  {
  return (
    <ul className="space-y-3">
        {todos.map((todo) => (
            <Todo key={todo.id} todo={todo}/>
        ))}
    </ul>
  )
}

export default TodoList