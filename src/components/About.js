import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent Constructor");
//   }
//   componentDidMount() {
//     console.log("Parent Component Did Mount");
//   }
//   render() {
//     console.log("Parent Render");
//     return (
//       <div>
//         <h1>About US Page is here</h1>
//         <User name="First" />
//       </div>
//     );
//   }
// }

const About = () => {
  return (
    <div>
      <h1>About US Page is here</h1>
      <UserClass name="First" />
    </div>
  );
};

export default About;
