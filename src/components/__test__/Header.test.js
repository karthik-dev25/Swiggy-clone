import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import "@testing-library/jest-dom";

it("Should render the Header Component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  //   Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should render the Header Component with cart item 0", () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
  
    const cartItem = screen.getByText("Cart (0 items)");
  
    //   Assertion
    expect(cartItem).toBeInTheDocument();
  });

  it("Should render the Header Component with cart item", () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
  
    const cartItem = screen.getByText(/Cart/);
  
    //   Assertion
    expect(cartItem).toBeInTheDocument();
  });

  it("Should render the Header Component with Logout Button", () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
  
    const loginButton = screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"Logout"})
  
    //   Assertion
    expect(logoutButton).toBeInTheDocument();
  });