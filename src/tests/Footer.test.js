import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "../components/Footer";
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

describe("Footer component", () => {
  it("calls onChange the correct number of times", () => {
    const onChangeMock = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Footer setNewTodo={onChangeMock} />
      </ThemeProvider>
    );
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Get milk");
    expect(onChangeMock).toHaveBeenCalledTimes(8);
  });
});
