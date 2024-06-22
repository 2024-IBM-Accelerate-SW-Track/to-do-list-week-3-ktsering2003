import React, { Component } from "react";
import Todos from "../component/todos";
import AddTodo from "../component/AddTodo";
import "../pages/Home.css";

class Home extends Component {
  // Create a default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  // the deleteTodo function simply creates a new array that removes the todo item selected from the user from the list
  // and then updates the state with the new list.
  deleteTodo = (id) => {
    // Within this function, the item's id is being utilized in order to filter it out from the todo list
    // and then updates the state with a new list
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addTodo = (todo) => {
    if (!this.state.todos.find(t => t.content === todo.content) &&
        todo.due !== null && todo.due !== "Invalid Date") {
      this.setState({
        todos: [...this.state.todos, todo]
      });
    }
  };
  
  render() {
    return (
      <div className="Home">
        <h1>Todo's </h1>
        {/* When passing the AddTodo component, addTodo is a prop that is used in the 
        AddTodo.js file when handling the submit */}
        <AddTodo addTodo={this.addTodo} />
        {/* When returning the Todos component, todos is a prop passed to the todos.js file
         to format and render the current todo list state */}
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Home;
