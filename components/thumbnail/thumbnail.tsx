import Image from "next/image";
import React from "react";

type ThumbnailProps = {
  src: string;
  alt: string;
};

/**
 * Thumbnail component.
 * @param {ThumbnailProps} props - The props for the thumbnail component.
 */

const Thumbnail = ({ src, alt }: ThumbnailProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={100}
      height={100}
      className="rounded"
    />
  );
};

export default Thumbnail;
