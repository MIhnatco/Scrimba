import { render, screen } from "@testing-library/react";

import Main from "./Main";

describe("Main component", () => {
  describe("Rendering tests", () => {
    test("inputs render correctly", () => {
      render(<Main />);

      const topTextElement = screen.getByLabelText("Top Text", {
        selector: "input",
      });

      expect(topTextElement).toBeInTheDocument();
      expect(topTextElement).toHaveAttribute(
        "placeholder",
        "One does not simply"
      );

      const bottomTextElement = screen.getByLabelText("Bottom Text", {
        selector: "input",
      });

      expect(bottomTextElement).toBeInTheDocument();
      expect(bottomTextElement).toHaveAttribute(
        "placeholder",
        "Walk into Mordor"
      );
    });

    test("button renders correctly", () => {
      render(<Main />);

      const btnElement = screen.getByText("Get a new meme image");
      expect(btnElement).toBeInTheDocument();
    });

    test("image renders correclty", () => {
      render(<Main />);

      const imgElement = screen.getByRole("img");
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute(
        "src",
        "http://i.imgflip.com/1bij.jpg"
      );
      expect(imgElement).toHaveAttribute("alt", "random image");
    });

    test("spans render correctly", () => {
      render(<Main />);

      const topSpan = screen.getByText("One does not simply");
      expect(topSpan).toBeInTheDocument();
      expect(topSpan).toHaveClass("top");

      const bottomSpan = screen.getByText("Walk into Mordor");
      expect(bottomSpan).toBeInTheDocument();
      expect(bottomSpan).toHaveClass("bottom");
    });
  });
});
