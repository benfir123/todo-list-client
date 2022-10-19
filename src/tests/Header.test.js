import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

let todos;

beforeEach(() => {
  todos = [
    { title: "Have meeting" },
    { title: "Meet Emma" },
    { title: "Go to market" },
    { title: "Do laundry" },
    { title: "Buy groceries" },
  ];
});

describe("Header component", () => {
  it("renders the correct number of current tasks", () => {
    render(<Header todos={todos} />);
    expect(screen.getByText("5 Tasks")).toBeInTheDocument();
  });
});
