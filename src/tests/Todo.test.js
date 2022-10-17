import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

let todos;

beforeEach(() => {
  todos = [
    { title: "Meet Emma", is_completed: true },
    { title: "Go to market", is_completed: false },
  ];
});

describe("Todo component", () => {
  it("renders a completed todo", () => {
    render(
      <Todo title={todos[0].title} is_completed={todos[0].is_completed} />
    );
    expect(screen.getByText("Meet Emma")).toHaveStyle(
      "text-decoration: line-through;"
    );
  });
  it("renders a not completed todo", () => {
    render(
      <Todo title={todos[1].title} is_completed={todos[1].is_completed} />
    );
    expect(screen.getByText("Go to market")).not.toHaveStyle(
      "text-decoration: line-through;"
    );
  });
});
