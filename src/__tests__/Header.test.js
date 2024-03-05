import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

it("Should load with login button in header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

it("Should load with login button and login Text in header component", () => {
    // Provider because jest doesnt know Redux
    // Router because jest doesnt know Link
    render(
      <BrowserRouter>
        <Provider store={appStore}>  
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name:"Login"});
    expect(loginButton).toBeInTheDocument();
  });

  it("Should load with cart in header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cart = screen.getByText(/Cart/);       //Regex can be passed
    expect(cart).toBeInTheDocument();
  });

  it("Should load with login and change to logout button in header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
  });
  