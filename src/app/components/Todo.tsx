"use client";

import { TodoTypes } from '@/TodoTypes'
import { deleteTodo, editTodo } from '@/api';
import { type } from 'os';
import { Input } from 'postcss';
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';

interface TodoProps{
    todo :TodoTypes;
}

const Todo = ({todo} : TodoProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const [isEditing, setIsEditing] = useState(false)
    const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text)

    useEffect(() => {
        if(isEditing){
            ref.current?.focus();
        }
    }, [isEditing]);

    const handleEdit = async () => {
        setIsEditing(true)
    }

    const handleSave = async () => {
        await editTodo(todo.id, editedTaskTitle);
        setIsEditing(false);
    }

    const handleDelete = async () => {
        await deleteTodo(todo.id);
    }
  return (
    <li  key={todo.id} className="flex justify-between p-4 bg-white border-1-4 border-blue-500">
    {isEditing ? (
    <input type="text" className='mr-2, py-1, px-2, rounded border-gray-400 border' value={editedTaskTitle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditedTaskTitle(e.target.value)} />) :
   (<span>{todo.text}</span>)}
    <div>
        {isEditing ? (<button className="text-blue-500 mr-3" onClick={handleSave}>Save</button>)
        : 
        (<button className="text-green-500 mr-3" onClick={handleEdit}>Edit</button>)}
        <button className="text-red-500 mr-3" onClick={handleDelete}>Delete</button>
    </div>
</li> 
  )
}

export default Todo

function userRouter() {
    throw new Error('Function not implemented.');
}
