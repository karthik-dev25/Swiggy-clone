import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantsMenu from "../RestaurantsMenu";
import MOCK_Data from "./mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import ItemsList from "../ItemsList";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_Data),
  });
});

it("Should render the Restaurants Menu Component", async () => {
  await act(async () => render(<RestaurantsMenu />));

  const accordianName = screen.getByText("Recommended (15)");

  expect(accordianName).toBeInTheDocument();
});

it("Should click and open the Accordion", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantsMenu />
      </Provider>
    )
  );

  const accordion = screen.getByText("Recommended (15)");

  expect(accordion).toBeInTheDocument();

  fireEvent.click(accordion);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(15);
});

it("Should add the items to the Cart by Clicking ADD Button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantsMenu />
          <ItemsList />
        </Provider>
      </BrowserRouter>
    )
  );

  const AddBtn = screen.getAllByRole("button", { name: "ADD" });

  expect(AddBtn.length).toBe(1);

  fireEvent.click(AddBtn[0]);

  const cartItems = screen.getByText("Cart (1 items)");

  expect(cartItems).toBeInTheDocument();
});

it("Should Show the Cart Page and clear the Cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantsMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const cartText = screen.getByText("Cart (1 items)");

  expect(cartText).toBeInTheDocument();

  fireEvent.click(cartText);

  const cartItems = screen.getAllByTestId("foodItems");

  expect(cartItems.length).toBe(1);

  const clearCartBtn = screen.getByRole("button",{name:"Clear Cart"});

  expect(clearCartBtn).toBeInTheDocument();

  fireEvent.click(clearCartBtn);

expect(screen.getByText("Cart (Total 0 Items)")).toBeInTheDocument();

  expect(screen.getByText("Cart is Empty, Please add the items to the cart")).toBeInTheDocument();

});
