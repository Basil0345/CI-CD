import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greetings from "./Greetings";

test("render component with provided name", () => {
  render(<Greetings name="Basil" />);
  expect(screen.getByText("Hi, Basil")).toBeInTheDocument();
});

test("render component with default name", () => {
  render(<Greetings />);
  expect(screen.getByText("Hi, Guest")).toBeInTheDocument();
});

