
import React from "react";

import { Form, Input, Button } from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class EditFriend extends React.Component {
  state = {
    id: "",
    name: "",
    age: "",
    email: "",
  };

  componentDidMount() {
    //console.log(this.props.computedMatch)
    axiosWithAuth()
      .get(`/friends/${this.props.computedMatch.params.id}`)
      .then((res) => {
        console.log(res);
        this.setState(res.data);
      })
      .catch((err) => {});
  }

  handleChange = (e) => {
    const newEditFormData = {
      ...this.state,
      [e.target.name]: e.target.value,
    };

    this.setState(newEditFormData);
  };

  handleSubmit = (e) => {
      e.preventDefault();
      axiosWithAuth()
      .put(`/friends/${this.props.computedMatch.params.id}`)
      .then(res => {console.log(res)})
      .catch(err => console.log(err.msg))
  }

  render() {
    return (
      <Form onSubmit = {this.handleSubmit}>
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

export default EditFriend;
