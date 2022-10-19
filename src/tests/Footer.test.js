import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "../components/Footer";

describe("Footer component", () => {
  it("calls onChange the correct number of times", () => {
    const onChangeMock = jest.fn();
    render(<Footer onChange={onChangeMock} />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Get milk");
    expect(onChangeMock).toHaveBeenCalledTimes(8);
  });
});
