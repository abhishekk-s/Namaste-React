import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contage Us Page test cases", () => {
  it("Should load Contact page with heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
  it("Should loadContact page with Submit button", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });
  test("Contact page loading with Placeholder inside input", () => {
    render(<Contact />);
    const placeholder = screen.getByPlaceholderText("Name");

    expect(placeholder).toBeInTheDocument();
  });
  test("Contact page loading with 2 input text boxes", () => {
    render(<Contact />);
    const textBoxes = screen.getAllByRole("textbox");

    expect(textBoxes.length).toBe(2);
    expect(textBoxes.length).not.toBe(3);
  });
});
