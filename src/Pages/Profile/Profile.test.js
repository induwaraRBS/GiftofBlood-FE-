import React from "react";
import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

// Mock the react-router-dom imports
jest.mock("react-router-dom", () => ({
  useParams: jest.fn(() => ({ userId: "mockUserId" })),
}));

// Mock the firebase/firestore and firebase/auth imports
jest.mock("../../Server/firebase", () => ({
  db: {},
}));

describe("Profile component", () => {
  test("renders loading state when donorDetails is null", () => {
    render(<Profile />);
    expect(screen.getByLabelText("loading-spinner")).toBeInTheDocument();
  });

  test("renders donorDetails correctly when available", async () => {
    const mockDonorDetails = {
      firstName: "John",
      lastName: "Doe",
      nicNumber: "123456789",
      dateOfBirth: "1990-01-01",
      location: "Example Location",
      bloodGroup: "A+",
      weight: 70,
      height: 180,
      healthupdates: "Example Health Updates",
      email: "john@example.com",
      password: "password",
      contact: "1234567890",
    };

    jest.mock("../../Server/firebase", () => ({
      db: {
        getDoc: jest.fn(() => ({
          exists: jest.fn(() => true),
          data: jest.fn(() => mockDonorDetails),
        })),
      },
    }));

    render(<Profile />);

    // Use the provided information to check if the elements are rendered correctly
    expect(
      screen.getByText(`First Name: ${mockDonorDetails.firstName}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Last Name: ${mockDonorDetails.lastName}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`NIC Number: ${mockDonorDetails.nicNumber}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Date Of Birth: ${mockDonorDetails.dateOfBirth}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Locatoion: ${mockDonorDetails.location}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Blood Group: ${mockDonorDetails.bloodGroup}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Weight: ${mockDonorDetails.weight}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Height: ${mockDonorDetails.height}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Health updates: ${mockDonorDetails.healthupdates}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Email: ${mockDonorDetails.email}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Password: ${mockDonorDetails.password}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Contact: ${mockDonorDetails.contact}`)
    ).toBeInTheDocument();
  });
});
