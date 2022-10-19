import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Main from "../components/Main";

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

describe("Main component", () => {
  it("renders todo container with all todos listed", () => {
    const { container } = render(<Main todos={todos} />);
    expect(container.children).toHaveLength(5);
  });
  it("sorts the list correctly when user drags and drops", () => {
    render(<Main todos={todos} />);
    let todoRows = screen.getAllByRole("div");
    let dropSquare = todoRows[1];
    let sourceSquare = todoRows[3];

    fireEvent.dragStart(sourceSquare);
    fireEvent.dragEnter(dropSquare);
    fireEvent.dragOver(dropSquare);
    fireEvent.drop(dropSquare);

    todoRows = screen.getAllByRole("div");

    expect(todoRows[1]).toEqual({ title: "Do laundry" });
    expect(todoRows[2]).toEqual({ title: "Meet Emma" });
    expect(todoRows[3]).toEqual({ title: "Go to market" });
  });
});
