import React from "react";
import "./lists.css";

const lists = (props) => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
    <ul className="list">
      {props.todos.map((todo, index)=> {
        return (
          <li 
              className={todo.completed? "completed": ""} 
              onClick={() => props.clicked(index)}
              key={index}
            >
            <span
              className="icon-close"
              onClick={(event) => props.deleted(event, index)}>
            </span>
            <div className="title">{todo.title}</div>              
            <div className="description"> Description </div>
          </li>
          );
      }) }      
  </ul>
    </div>);
};

export default lists;
