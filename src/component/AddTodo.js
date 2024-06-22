import React, { Component } from "react";
import { TextField, Button } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      date: "",
      due: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      date: new Date().toLocaleString("en-US"),
    });
  };

  handleDueDateChange = (newValue) => {
    this.setState({
      due: new Date(newValue).toLocaleDateString("en-US"),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { content, date, due } = this.state;
    if (content.trim() && due) {
      this.props.addTodo({
        content,
        date,
        due,
      });
      this.setState({
        content: "",
        date: "",
        due: null,
      });
    }
  };

  render() {
    return (
      <div>
        <TextField
          label="Add New Item"
          type="text"
          onChange={this.handleChange}
          value={this.state.content}
          aria-label="Add New Item"
          data-testid="new-item-input"
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            id="new-item-date"
            label="Due Date"
            value={this.state.due}
            onChange={this.handleDueDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button onClick={this.handleSubmit} data-testid="new-item-button">
          Add
        </Button>
      </div>
    );
  }
}

export default AddTodo;
