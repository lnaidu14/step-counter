import { StepCounter } from ".";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

test("to see if button with Click Me text exists", async () => {
  render(<StepCounter />);

  expect(screen.getByRole("button")).toHaveTextContent("Click me");
});

test("number should initially be 0", async () => {
  render(<StepCounter />);

  expect(screen.getByDisplayValue("0")).toBeInTheDocument();
});

test("number should increase by 1 every time the button is clicked", async () => {
  render(<StepCounter />);

  expect(screen.getByDisplayValue("0")).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: "Click me" }));
  expect(screen.getByDisplayValue("1")).toBeInTheDocument();
});
