import { Component } from "react";
import ChildUserClass from "./ChildUserClass";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log("Parent Constructor")

  }

  componentDidMount(){
    console.log("Parent Component did mount")
  }

  render() {

    console.log("Parent Render")

    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h3>{name}</h3>
        <h3>{location}</h3>
        <h3>{count}</h3>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increment Count
        </button>
        <ChildUserClass name="First"/>
        <ChildUserClass name="Second"/>
      </div>
    );
  }
}

export default UserClass;


// render phase begins
// - parent constructor
// - parent render
//   - first child constructor
//   - first child render
//   - second child constructor
//   - second child render
// render phase ends

// commit phase begins
//   - first child componentDidMount
//   - second child componentDidMount
// - parent componentDidMount 
// commit phase ends
