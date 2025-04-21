import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const context = useContext(UserContext);
  const [btnName, setBtnName] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);

  const IsOnline = useOnlineStatus();

  return (
    <div className="flex justify-between px-4 items-center shadow-lg">
      <div>
        <img className="w-38" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex items-center font-medium cursor-pointer">
        <li className="mx-4 hover:text-amber-300">
           Online Status: {IsOnline ? "✅" : "🔴"}
          </li>
          <li className="mx-4 hover:text-amber-300">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 hover:text-amber-300">
            <Link to="/about">About US</Link>
          </li>
          <li className="mx-4 hover:text-amber-300">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="mx-4 hover:text-amber-300">
            <Link to="/store">Store</Link>
          </li>
          <li className="mx-4 hover:text-amber-300">Cart ({cartItems.length} items)</li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className="bg-amber-300 px-4 py-2 rounded-lg cursor-pointer"
          >
            {btnName}
          </button>
          <li className="mx-4 hover:text-amber-300">{context.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
