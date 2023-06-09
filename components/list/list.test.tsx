import List from "./list";
import { render } from "@testing-library/react";

const arrayWithOneItem = [
  {
    id: "1",
    name: "test",
    stars: 0,
    forks: 0,
    url: "https://github.com",
  },
];

const arrayWithTenItem = [
  {
    id: "1",
    name: "test",
    stars: 0,
    forks: 0,
    url: "https://github.com",
  },
  {
    id: "2",
    name: "test",
    stars: 0,
    forks: 0,
    url: "https://github.com",
  },
  {
    id: "3",

    name: "test",
    stars: 0,
    forks: 0,

    url: "https://github.com",
  },
  {
    id: "4",

    name: "test",
    stars: 0,

    forks: 0,
    url: "https://github.com",
  },
  {
    id: "5",

    name: "test",
    stars: 0,
    forks: 0,

    url: "https://github.com",
  },
  {
    id: "6",

    name: "test",
    stars: 0,
    forks: 0,

    url: "https://github.com",
  },
  {
    id: "7",

    name: "test",
    stars: 0,
    forks: 0,

    url: "https://github.com",
  },
  {
    id: "8",

    name: "test",
    stars: 0,

    forks: 0,

    url: "https://github.com",
  },
  {
    id: "9",

    name: "test",
    stars: 0,
    forks: 0,

    url: "https://github.com",
  },
  {
    id: "10",

    name: "test",
    stars: 0,
    forks: 0,

    url: "https://github.com",
  },
];

describe("List", () => {
  it("Snapshot renders with just one item", () => {
    const view = render(<List items={arrayWithOneItem} />);
    expect(view).toMatchSnapshot();
  });

  it("Snapshot renders with ten items", () => {
    const view = render(<List items={arrayWithTenItem} />);
    expect(view).toMatchSnapshot();
  });
});
