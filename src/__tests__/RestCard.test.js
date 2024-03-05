import RestCard from "../components/RestCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "./mocks/RestCardMock.json";
import { render, screen } from "@testing-library/react";

it("Should load with login button in header component", () => {
  render(<RestCard resData={MOCK_DATA} />);
  const name = screen.getByText("Shah Ghouse Hotel & Restaurant");
  expect(name).toBeInTheDocument();
});
