import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
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
    { title: "Have meeting" },
    { title: "Meet Emma" },
    { title: "Go to market" },
    { title: "Do laundry" },
    { title: "Buy groceries" },
  ];
});

describe("Header component", () => {
  it("renders the correct number of current tasks", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header todos={todos} />
      </ThemeProvider>
    );
    expect(screen.getByText("5 Tasks")).toBeInTheDocument();
  });
});
