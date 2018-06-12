import React from "react";
import "./form.css";

import Button from "../UI/Button/button";

const list = (props) => {
  return (
    
    <form className="todo-form">
      <div>
        <input 
              type="text" 
              name="todotitle" 
              value={props.todoTitle} 
              onChange={props.updated} 
              value={props.todotitle} 
              placeholder="Enter TODO title"/>
        <Button clicked={props.clicked} btnClass="button-todo">Add Todo</Button>
      </div>
    </form>
    );
};

export default list;
