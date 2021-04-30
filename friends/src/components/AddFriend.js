import React from "react";
import { Form, Input, Button } from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  state = {
    name: "",
    age: "",
    email: "",
  };

  handleChange = (e) => {
    const newAddFormData = {
      ...this.state,
      [e.target.name]: e.target.value,
    };

    this.setState(newAddFormData);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/friends`, this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.msg));

    
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter name here"
        />
        <Input
          type="text"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="Enter age here"
        />
        <Input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Enter email here"
        />
        <Input type="checkbox" />{" "}
        <label htmlFor="">Click the box if changes are final</label> <br />
        <Button>Save Changes</Button>
      </Form>
    );
  }
}

export default AddFriend;
