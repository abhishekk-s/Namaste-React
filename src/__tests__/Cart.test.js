import { act } from "react-dom/test-utils";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "./mocks/ResMenuMock.json";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should add items to cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordian = screen.getByText("Recommended(20)");
  fireEvent.click(accordian);
  expect(screen.getAllByTestId("food-items").length).toBe(20);
  expect(screen.getByText("Cart (0)")).toBeInTheDocument();

  const addBtn = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();
  fireEvent.click(addBtn[2]);
  expect(screen.getByText("Cart (2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("food-items").length).toBe(22);
  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);

  expect(screen.getAllByTestId("food-items").length).toBe(20);
  expect(
    screen.getByText("Cart is empty , Add items to cart !!")
  ).toBeInTheDocument();
});
