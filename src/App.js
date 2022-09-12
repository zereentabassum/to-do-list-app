import './App.css';
import Navbar from './Pages/Shared/Navbar';
import {Routes, Route} from 'react-router-dom';
import ToDo from './Pages/ToDo/ToDo';
import Completed from './Pages/CompletedTask/Completed';
import { useState } from 'react';
import Pending from './Pages/Pending';
import { useEffect } from 'react';


function App() {

    const getLocalStorage  = () =>{  
        let todoLocal = localStorage.getItem("todos");
        if(todoLocal){
          return JSON.parse(localStorage.getItem("todos"));
        } else {
          return [];
        }
        }
    const [tasks, setTasks] = useState('');
    const [todos, setTodos] = useState(getLocalStorage());


    // runs everytime the todos are added
    useEffect(()=>{       
    localStorage.setItem("todos", JSON.stringify(todos));
     
    },[todos]);

   
     return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ToDo 
        tasks={tasks} setTasks={setTasks} todos={todos} setTodos={setTodos} 
        ></ToDo>}></Route>
        <Route path='todo' element={<ToDo 
        todos={todos} setTodos={setTodos} tasks={tasks} setTasks={setTasks} 
        ></ToDo>}></Route>
        <Route path='completed' element={<Completed value='completed'
         tasks={tasks} setTasks={setTasks} todos={todos} setTodos={setTodos} 
        ></Completed>}></Route>
        <Route path='pending-task' element={<Pending
         tasks={tasks} setTasks={setTasks} todos={todos} setTodos={setTodos} 
        ></Pending>}></Route>
      </Routes>
    </div>
  );
}

export default App;
