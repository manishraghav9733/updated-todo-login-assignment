import React,{useState } from 'react';
import {Input} from 'antd';

const TodoForm = (props) => {
   const addTodo = props.addTodo;
    const [value, setValue] = useState("");

  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }

  export default TodoForm;