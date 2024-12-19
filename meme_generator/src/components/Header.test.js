import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header component", () => {
  describe("Rendering tests", () => {
    test("renders the header element", () => {
      render(<Header />);
      const headerElement = screen.getByTestId("header");
      expect(headerElement).toBeInTheDocument();
    });

    test("renders the img element", () => {
      render(<Header />);
      const imgElement = screen.getByRole("img");

      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute("src", "/images/troll-face.png");
    });

    test("renders the h1 element", () => {
      render(<Header />);
      const headingElement = screen.getByRole("heading", {
        level: 1,
      });
      expect(headingElement).toBeInTheDocument();
    });
  });
});
