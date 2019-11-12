import React,{useState, useEffect } from 'react'
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {Button,Icon,message} from "antd";




const  Profile = () => {

  const initialTodo = () => {
    if(localStorage.getItem('items') === undefined || localStorage.getItem('items') === null ){
      return [];
    }else{
      
      return  JSON.parse(localStorage.getItem('items'));
    }
  }

  const [todos, setTodos] = useState(initialTodo);

useEffect(() => {
  try {
    localStorage.setItem('items', JSON.stringify(todos))
  } catch (error) {
    message.warning(error);
  }
  
},[todos]);

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted : false}];
    localStorage.setItem('items', JSON.stringify(newTodos));
    const data = JSON.parse(localStorage.getItem('items'));
    console.log(data);
    setTodos(data);
  };

  const onLogout = () => {
    document.location.assign("/");
  }

  
  return (
    <div className="app" style={{marginLeft:'50px',padding:'20px'}}>
    <div style={{marginBottom:"30px",textAlign:"right",maxWidth:"500px"}}><Button onClick={onLogout} style={{}} type="primary"><Icon type="logout" />Log Out</Button></div>
      <div>
      <h2>Make Your ToDo List</h2>
      
      </div>
    
    <div style={{maxWidth:"500px"}}>
       <TodoForm addTodo={addTodo} />
    </div>
      <div style={{maxWidth:"500px",marginTop:"30px"}}>
        
          <TodoList
            todo={todos}
            setTodos={setTodos}
          />

      </div>
    </div>
  );
}


export default Profile;