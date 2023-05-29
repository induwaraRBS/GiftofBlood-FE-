import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OnboardSignup from "./OnboardSignup";

// Mock the react-router-dom imports
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

// Mock the firebase/auth and firebase/database imports
jest.mock("../../Server/firebase", () => ({
  auth: {},
  db: {},
}));

// Mock the UserAuth context
jest.mock("../../Server/context/Authcontext", () => ({
  UserAuth: jest.fn(() => ({
    googleSignIn: jest.fn(),
  })),
}));

describe("OnboardSignup component", () => {
  test("handles email registration button click correctly", () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      useNavigate: () => mockNavigate,
    }));

    render(<OnboardSignup />);

    fireEvent.click(screen.getByText("Register with Email"));

    expect(mockNavigate).toHaveBeenCalledWith("/signup");
  });

  test("handles google registration button click correctly", () => {
    const mockGoogleSignIn = jest.fn();
    jest.mock("../../Server/context/Authcontext", () => ({
      UserAuth: jest.fn(() => ({
        googleSignIn: mockGoogleSignIn,
      })),
    }));

    render(<OnboardSignup />);

    fireEvent.click(screen.getByText("Register with Google"));

    expect(mockGoogleSignIn).toHaveBeenCalled();
  });
});
