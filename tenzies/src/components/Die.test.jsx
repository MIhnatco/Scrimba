import { screen, render } from "@testing-library/react";
import Die from "./Die";

describe("Die component", () => {
  it("contains a button", () => {
    render(<Die value="10" />);

    const btnElement = screen.getByRole("button");
    expect(btnElement).toBeInTheDocument();
  });

  it("button contains a value", () => {
    render(<Die value="10" />);

    const btnElement = screen.getByRole("button");
    expect(btnElement).toHaveTextContent("10");
  });
});
