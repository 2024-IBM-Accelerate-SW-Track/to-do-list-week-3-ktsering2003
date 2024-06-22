import React from "react";
import "../component/todos.css";
import { Card, Grid, ListItemButton, ListItemText, Checkbox } from "@mui/material";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      const isOverdue = new Date(todo.due) < new Date();
      const color = isOverdue ? "#ffcccc" : "#ffffff"; // Set color based on due date

      return (
        <Grid key={todo.id}>
          <Card style={{ marginTop: 10, backgroundColor: color }}>
            <ListItemButton component="a" href="#simple-list">
              <Checkbox style={{ paddingLeft: 0 }} color="primary" onClick={() => deleteTodo(todo.id)} />
              <ListItemText primary={todo.content} secondary={`Created: ${todo.date}, Due: ${todo.due}`} />
            </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left</p>
  );

  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
