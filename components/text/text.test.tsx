import Text from "./text";
import { render } from "@testing-library/react";

const availableTypes = ["text", "title", "italic", "subtitle"];

describe("Text", () => {
  availableTypes.forEach((type) => {
    it(`Snapshot with type ${type}`, () => {
      const { container } = render(<Text type={type} text="test" />);
      expect(container).toMatchSnapshot();
    });
  });
});
