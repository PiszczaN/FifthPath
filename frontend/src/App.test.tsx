import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("shows the app name as the main heading", () => {
  render(<App />);

  const main = screen.getByRole("main");
  const heading = within(main).getByRole("heading", { level: 1 });

  expect(heading.textContent).toBe("FifthPath");
});
