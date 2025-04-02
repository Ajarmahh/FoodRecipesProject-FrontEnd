import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";


// Mock the image import to avoid errors
jest.mock("../../public/images/person.png", () => "test-file-stub");

/*jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));*/

const mockNavigate = jest.fn();


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

/*beforeEach(() => {
  //Storage.prototype.getItem = jest.fn(()=> '');
  //Storage.prototype.removeItem = jest.fn(()=> '');
  jest.spyOn(localStorage, 'getItem')
  localStorage.getItem = jest.fn()
});*/

beforeEach(() => {
    const localStorageMock = {
      getItem: jest.fn().mockReturnValue("mockedValue"),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    };
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });
  });

describe("Dropdown Component", () => {

  it("toggles dropdown visibility and shows Login/Register when no token", () => {
    localStorage.getItem.mockReturnValue(null); // Simulate no token
    render(<Dropdown />);

    const userImage = screen.getByAltText(/User/i);
    fireEvent.click(userImage); // Open dropdown
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    fireEvent.click(userImage); // Close dropdown
    expect(screen.queryByText(/Login/i)).not.toBeInTheDocument();
  });

  it("shows Logout when token is present and removes token on logout", () => {
    localStorage.getItem.mockReturnValue("token"); // Simulate token
    render(<Dropdown />);

    fireEvent.click(screen.getByAltText(/User/i)); // Open dropdown
    fireEvent.click(screen.getByText(/Logout/i)); // Click logout

    expect(localStorage.removeItem).toHaveBeenCalledWith("token"); // Check if token is removed
    expect(mockNavigate).toHaveBeenCalledWith("/"); // Check if navigate is called
  });
});
