import Image from "next/image";
import rectangle from "../public/images/rectangle.png";

interface RectangleProps {
  title: string;
  paragraph: React.ReactNode;
  cta?: string;
  button: React.ReactNode;
}

const Rectangle = ({ title, paragraph, button, cta }: RectangleProps) => {
  return (
    <div className="relative">
      <Image src={rectangle} width={2138} height={1148} alt="blue rectangle" />
      <div className="flex flex-col items-center gap-4 lg:gap-[45px] px-11 lg:py-[75px] lg:px-[80px] absolute -translate-y-2/4 w-full text-center left-0 top-2/4 backdrop-blur-[1px]">
        <h2 className="heading">{title}</h2>
        <p className="paragraph center px-[4rem]">{paragraph}</p>
        <p className="paragraph center">{cta}</p>
        {button}
      </div>
    </div>
  );
};
export default Rectangle;
