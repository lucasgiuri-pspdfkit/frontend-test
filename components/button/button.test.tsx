import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./button";

const availableTypes = ["button", "submit", "reset"];

describe("Button", () => {
  availableTypes.forEach((type) => {
    it(`Snapshot with type ${type}`, () => {
      const onClick = jest.fn();
      const { container } = render(
        <Button text="test" type={type} onClick={onClick} />
      );
      expect(container).toMatchSnapshot();
    });
  });

  it("handles onClick event ", () => {
    const onClick = jest.fn();
    render(
      <Button text="test" type="button" onClick={onClick} />
    );
    fireEvent.click(screen.getByText("test"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
