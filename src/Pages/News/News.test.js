import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import News from "./News";

// Mock the Firebase imports
jest.mock("firebase/firestore", () => ({
  collection: jest.fn(),
  getDocs: jest.fn(),
}));
jest.mock("../../Server/firebase", () => ({
  db: {},
}));

describe("News component", () => {
  test("renders news details correctly", async () => {
    const mockNewsData = [
      {
        title: "Test Title 1",
        content: "Test Content 1",
        timestamp: "2023-05-27",
      },
      {
        title: "Test Title 2",
        content: "Test Content 2",
        timestamp: "2023-05-28",
      },
    ];

    // Mock the getDocs function to return the mock news data
    const mockGetDocs = jest.fn(() => ({
      docs: mockNewsData.map((data) => ({
        data: () => data,
      })),
    }));
    const mockCollection = jest.fn(() => ({
      getDocs: mockGetDocs,
    }));
    jest.mock("firebase/firestore", () => ({
      collection: mockCollection,
      getDocs: mockGetDocs,
    }));

    render(<News />);

    // Wait for the news details to be fetched and rendered
    await waitFor(() => {
      expect(screen.getByText("Test Title 1")).toBeInTheDocument();
      expect(screen.getByText("Test Title 2")).toBeInTheDocument();
      expect(screen.getByText("Test Content 1")).toBeInTheDocument();
      expect(screen.getByText("Test Content 2")).toBeInTheDocument();
      expect(screen.getByText("Time:2023-05-27")).toBeInTheDocument();
      expect(screen.getByText("Time:2023-05-28")).toBeInTheDocument();
    });

    // Verify that the loading spinner is not displayed
    expect(screen.queryByTestId("loading-spinner")).toBeNull();
  });

  test("renders loading spinner when news details are empty", async () => {
    const mockGetDocs = jest.fn(() => ({
      docs: [],
    }));
    const mockCollection = jest.fn(() => ({
      getDocs: mockGetDocs,
    }));
    jest.mock("firebase/firestore", () => ({
      collection: mockCollection,
      getDocs: mockGetDocs,
    }));

    render(<News />);

    // Wait for the news details to be fetched and rendered
    await waitFor(() => {
      expect(screen.queryByTestId("loading-spinner")).toBeInTheDocument();
    });

    // Verify that no news details are rendered
    expect(screen.queryByText("Test Title 1")).toBeNull();
    expect(screen.queryByText("Test Title 2")).toBeNull();
    expect(screen.queryByText("Test Content 1")).toBeNull();
    expect(screen.queryByText("Test Content 2")).toBeNull();
    expect(screen.queryByText("Time:2023-05-27")).toBeNull();
    expect(screen.queryByText("Time:2023-05-28")).toBeNull();
  });
});
