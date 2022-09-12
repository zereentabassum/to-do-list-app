import React from 'react';
import List from './List';

const ToDo = ({todos, setTodos, tasks, setTasks}) => {
  
    const handleTasks = (e) =>{ 
        e.preventDefault();
        setTodos([...todos, {task: tasks, completed: false, id:Math.random() * 1000 } ]);
        setTasks('');
    }
    
    const clearAll = () =>{
        setTodos([]);
    }
    
    
    return (
        <div className=''>
            <h1 className='text-3xl text-accent pb-3'>To-Do List ({todos.length})</h1>
            
            <form >
            <input value={tasks}
            onChange={e => setTasks(e.target.value)}
            type="text" 
            //  onKeyDown={handleEnter}
              placeholder="Add your task" name='task' className="input input-bordered rounded-r-none  rounded-l-md input-primary w-full max-w-xs "  required/>
              <input onClick={handleTasks} type="submit" value="Add task" className='btn-accent p-3 border rounded-r-md text-white disabled:bg-indigo-400 disabled:border-indigo-400' disabled={!tasks}/>
              
            </form>
            <div className='mt-6 flex justify-center mb-2'>
                <div>
               {
                todos.map(todo => <List todo={todo} key={todo.id} todos={todos} setTodos={setTodos} ></List>) 
               }
               </div>
            </div>
            {
                todos.length>0 && <div className=' my-8'>
                    <button onClick={clearAll} className='btn btn-outline btn-accent text-white'>Clear All</button>
                </div>
            }
      
        </div>
    );
};

export default ToDo;