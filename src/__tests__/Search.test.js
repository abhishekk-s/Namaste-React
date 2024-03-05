import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "./mocks/ResListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render body component with search and get updated list", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const allResCard = screen.getAllByTestId("resCard");
  expect(allResCard.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Biryani" } });

  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(7);
});

it("Should filter Restaurants with Top Rated Restaurant button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const allResCard = screen.getAllByTestId("resCard");
    expect(allResCard.length).toBe(9);
  
    const searchBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
  
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("resCard");
  
    expect(cards.length).toBe(6);
  });
  