import Image from "next/image";

interface ImgProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string; // add className prop
}

const Img = ({
  src,
  alt,
  width,
  height,
  className, // add className prop
}: ImgProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className} // pass className prop to Image component
    />
  );
};

export default Img;
