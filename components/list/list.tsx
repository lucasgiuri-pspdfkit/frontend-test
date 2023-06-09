import Link from "next/link";
import React from "react";
// Components
import Text from "../text/text";
import Image from "next/image";

type Item = {
  id: number;
  name: string;
  url: string;
  stars: number;
  forks: number;
};

type ListProps = {
  items: Item[];
};

/**
 * List component.
 * Renders a list of items with their information.
 * @param {ListProps} props - The props for the List component.
 */

const List = ({ items }: ListProps) => {
  return (
    <ul className="w-full h-full overflow-y-scroll">
      {items.map(({ id, name, stars, forks, url }: Item) => (
        <li key={id} className="w-full py-4 border-b border-gray-300">
          <Link
            href={url}
            target="_blank"
            className="w-full flex items-center justify-between"
          >
            <Text type="subtitle" text={name} />
            <div className="flex items-center">
              <label className="flex items-center mr-2">
                <Image
                  src="/icons/star.svg"
                  alt="stars"
                  width={16}
                  height={16}
                />
                <span className="pl-1">{stars}</span>
              </label>
              <label className="flex items-center">
                <Image
                  src="/icons/fork.svg"
                  alt="forks"
                  width={16}
                  height={16}
                />
                <span className="pl-1">{forks}</span>
              </label>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
