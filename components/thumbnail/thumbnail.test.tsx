import Thumbnail from "./thumbnail";
import { render } from "@testing-library/react";

describe("Thumbnail", () => {
  it("renders correctly", () => {
    const view = render(
      <Thumbnail src="https://via.placeholder.com/150" alt="avatar" />
    );
    expect(view).toMatchSnapshot();
  });
});
