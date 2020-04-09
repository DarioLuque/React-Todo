import React from "react";

class TodoForm extends React.Component {

  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {

    this.setState({ item: e.target.value });
  };


  submitItem = e => {
    e.preventDefault();

    this.setState({ item: "" });
    this.props.addItem(e, this.state.item);
  };

  render() {
    console.log("Todoform props: ", this.props);
    return (
      <form onSubmit={this.submitItem}>
        <input className="input-tab"
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button className="btn-add">Add</button>
      </form>
    );
  }
}

export default TodoForm;
