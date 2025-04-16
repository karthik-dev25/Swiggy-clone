import React from "react";
import UserContext from "../utils/UserContext";
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
      <div className="w-56 p-4 m-4">
      <UserContext.Consumer>
        {(data)=><h1 className="font-bold">UserName:{data.loggedInUser}</h1>}
      </UserContext.Consumer>
        <h1 className="font-bold">Count:{count}</h1>
        <div className="flex flex-col">
          <button
          className="bg-amber-300 px-4 py-2 m-2 rounded-lg cursor-pointer"
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increment
          </button>
          <button
          className="bg-amber-300 px-4 py-2 m-2 rounded-lg cursor-pointer"
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
              });
            }}
          >
            Decrement
          </button>
          <button
          className="bg-amber-300 px-4 py-2 m-2 rounded-lg cursor-pointer"
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
