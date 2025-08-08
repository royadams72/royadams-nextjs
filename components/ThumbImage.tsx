// components/ThumbImage.tsx
import Image, { ImageProps } from "next/image";

const DEFAULT_THUMB_SIZES =
  "(min-width: 1024px) 290px, (min-width: 640px) 45vw, 90vw";

type ThumbImageProps = Omit<ImageProps, "sizes"> & {
  sizes?: string; // optional override
};

export default function ThumbImage({
  sizes = DEFAULT_THUMB_SIZES,
  ...props
}: ThumbImageProps) {
  return <Image {...props} sizes={sizes} />;
}
