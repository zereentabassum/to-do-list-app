import React from 'react';
import List from './ToDo/List';

const Pending = ({todos, setTodos}) => {
  
    
    const pending = todos.filter(el => el.completed === false);
   
   

    return (
      
        <div className=' justify-items-center'>
           <h1 className='text-3xl text-accent mb-6'>Pending tasks ({pending.length})</h1>
           <div className=' flex justify-center'>
            <div>
              {
         pending.map(todo=> 
        <List todo={todo} key={todo.id} todos={todos} setTodos={setTodos}></List>
         ) 
         
         }
         </div>
         </div>
     
        </div>
    );
};

export default Pending;