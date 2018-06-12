import React, { Component } from "react";
import { connect } from "react-redux";


import * as actionCreators from "./store/action.creators"; 
import List from "../../components/lists/lists";
import Form from "../../components/todoform/form.jsx";
import Controls from "../controls/controls";
import * as filters from "../../commons/filters";

const styles = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  textAlign: "center"
};

class Todo extends Component {
  state = {
    todotitle: ""
  };
  handleTodoTitleInputChange = e => {
    e.preventDefault();
    this.setState({ todotitle: e.target.value });
  };
  resetTodoTitileInput() {
    this.setState({ todotitle: "" });
  }
  handleAddTodoButton = e => {
    e.preventDefault();
    const title = this.state.todotitle.trim();
    if (title.length > 0) {
      this.props.addTodo(title);
      this.resetTodoTitileInput();
    }
  };
  handleListClick = listIndex => this.props.toggleTodo(listIndex); 
  handleDeleteHandler = (event, listIndex) => {
    event.stopPropagation();
    this.props.removeTodo(listIndex);    
  };
  getFilteredTodos = () => {
    const list = this.props.todolist? [...this.props.todolist] : [];
    switch(this.props.filter){
      case filters.SHOW_ALL: return list;
      case filters.SHOW_COMPLETED: return list.filter(todo => todo.completed)
      case filters.SHOW_IN_PROGRESS: return list.filter(todo => !todo.completed)
      default: return list;

    }
  }
  render() {
    const filteredTodos = this.getFilteredTodos();    
    return (
      <div style={styles}>
        <Form
          todotitle={this.state.todotitle}
          updated={event => this.handleTodoTitleInputChange(event)}
          clicked={event => this.handleAddTodoButton(event)}
        />
        <Controls />        
        <List
          todos={filteredTodos}
          clicked={listIndex => this.handleListClick(listIndex)}
          deleted={(event, listIndex) =>
            this.handleDeleteHandler(event, listIndex)
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todolist: state.list,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(actionCreators.addTodo(title)),
  removeTodo: index => dispatch(actionCreators.removeTodo(index)),
  toggleTodo: index => dispatch(actionCreators.toggleTodo(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
