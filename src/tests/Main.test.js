import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Main from "../components/Main";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "#FFFFFF",
    main: "#FFFFFF",
    footer: "#F2F2F2",
    heading: "#6FC5A6",
    button: "#6FC5A6",
  },
};

let todos;

beforeEach(() => {
  todos = [
    { id: 1, title: "Have meeting" },
    { id: 2, title: "Meet Emma" },
    { id: 3, title: "Go to market" },
    { id: 4, title: "Do laundry" },
    { id: 5, title: "Buy groceries" },
  ];
});

describe("Main component", () => {
  it("renders todo container with all todos listed", () => {
    const { container } = render(<Main todos={todos} />);
    expect(container.children).toHaveLength(5);
  });
  it("sorts the list correctly when user drags and drops", () => {
    render(
      <ThemeProvider theme={theme}>
        <Main todos={todos} />
      </ThemeProvider>
    );
    let todoRows = screen.getAllByRole("button");
    let dropSquare = todoRows[1];
    let sourceSquare = todoRows[3];

    fireEvent.dragStart(sourceSquare);
    fireEvent.dragEnter(dropSquare);
    fireEvent.dragOver(dropSquare);
    fireEvent.drop(dropSquare);

    todoRows = screen.getAllByRole("button");

    expect(todoRows[1]).toEqual({ title: "Do laundry" });
    expect(todoRows[2]).toEqual({ title: "Meet Emma" });
    expect(todoRows[3]).toEqual({ title: "Go to market" });
  });
});
