import React from 'react';
import {MdDelete} from 'react-icons/md';
import {BsCheckSquare} from 'react-icons/bs';
import './List.css';

const List = ({ todo , setTodos, todos }) => {
    const {task} = todo;
    const handleDelete = () =>{
        setTodos(todos.filter(el => el.id !== todo.id) )
    }
    const handleComplete = () =>{
        setTodos(todos.map(list =>{
            if(list.id === todo.id){
                return {...list, completed: !list.completed}
            }
            return list; 
        }))
    }

    return (
        <div style={{width:'23rem'}} className=' flex justify-between bg-secondary p-3 mb-3 '>
            <button  onClick={handleComplete}><BsCheckSquare className={`text-accent hover:bg-accent hover:text-white active:bg-blue-300 bg-white ${todo.completed && 'bg-accent text-white'}`} size={24}/></button>
            <p className={`font-semibold break-all ${todo.completed ? 'completed' : ''}`}>{task}</p>
            <button onClick={handleDelete}><MdDelete className='text-red-600 hover:text-red-500' size={24}/></button>
    
        </div>
        
    );
};

export default List;