import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

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
    render(<Header numberOfTodos={todos.length} />);
    expect(screen.getByText("5 Tasks")).toBeInTheDocument();
  });
});
