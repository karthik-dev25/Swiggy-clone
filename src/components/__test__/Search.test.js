import { fireEvent, render, screen} from "@testing-library/react";
import Body from "../Body";
import MOCK_Data from "./mocks/resListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

// Integration Testing

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_Data);
    },
  });
});

it("Should Search ResList for burger input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "na" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});

it("Should Filter with Top Rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const beforeFilter = screen.getAllByTestId("resCard");

  expect(beforeFilter.length).toBe(8);

  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(filterBtn);

  const afterFilter = screen.getAllByTestId("resCard");

  expect(afterFilter.length).toBe(2);
});
