import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        ),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  // this acts like a global state
  state = {
    contacts: [
      // {
      //   id: 1,
      //   name: "John Doe",
      //   email: "jdoe@gmail.com",
      //   phone: "555-555-5555",
      // },
      // {
      //   id: 2,
      //   name: "Jane Doe",
      //   email: "janedoe@gmail.com",
      //   phone: "666-666-6666",
      // },
    ],
    dispatch: (actions) => {
      this.setState((state) => reducer(state, actions));
    },
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ contacts: res.data });

    // axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
    //   this.setState({
    //     contacts: res.data,
    //   })
    // );
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
