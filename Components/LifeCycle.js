import { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      userInfo: {
        login: "dummy",
        id: 0,
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    console.log("componentDidMount");
    const userInfoData = await fetch(
      "https://api.github.com/users/SarveshSrivastava"
    );
    const userInfoJson = await userInfoData.json();

    this.setState({
      userInfo: userInfoJson,
    });

    this.timer=setInterval(() => {
      console.log("This is setInterval from componentDidMount");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    console.log("render");

    const { login, id, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} />
        <h2>{login}</h2>
        <h2>{id}</h2>
      </div>
    );
  }
}

export default LifeCycle;
