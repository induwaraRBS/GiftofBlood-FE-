import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login Component", () => {
  test("renders login form", () => {
    render(<Login />);

    // Check if the login form elements are rendered
    expect(screen.getByLabelText("email")).toBeInTheDocument();
    expect(screen.getByLabelText("password")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Don't have an")).toBeInTheDocument();
  });

  test("handles form submission", () => {
    render(<Login />);

    // Mock the necessary functions and values
    const mockNavigate = jest.fn();
    const mockSignInWithEmailAndPassword = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));
    jest.mock("firebase/auth", () => ({
      ...jest.requireActual("firebase/auth"),
      signInWithEmailAndPassword: () => mockSignInWithEmailAndPassword,
    }));

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Login"));

    // Verify that the necessary functions are called
    expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith(
      expect.any(Object),
      "test@example.com",
      "password123"
    );

    // You can also test other assertions based on the expected behavior of your code.
  });
});
