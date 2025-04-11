import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor")
  }
  async componentDidMount(){
    console.log("Child Component Did Mount")
  }
  componentDidUpdate(){
    console.log("Component Did Update")
  }
  componentWillUnmount(){
    console.log("Component Will Unmount")
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    console.log("Child Render")
    return (
      <div className="user-card">
        <h1>Count:{count}</h1>
        <div className="count-btn">
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
              });
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              this.setState({
                count: 0,
              });
            }}
          >
            Reset
          </button>
        </div>
        <h1>Name: {name}</h1>
        <h3>Location: Chennai</h3>
        <h3>Contact: @karthik0388</h3>
      </div>
    );
  }
}

export default UserClass;
