import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  // Check if the <main> element is in the document
  const mainElement = screen.getByRole("main");
  expect(mainElement).toBeInTheDocument();
});
