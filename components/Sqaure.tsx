import Image from "next/image";
import square from "../public/images/square.png";

interface squareProps {
  title: string;
  paragraph: React.ReactNode;
  button: React.ReactNode;
}

const Sqaure = ({ title, paragraph, button }: squareProps) => {
  return (
    <div className="relative mt-20">
      <Image src={square} width={1024} height={1252} alt="blue square" />
      <div className="flex flex-col items-center gap-4 lg:gap-[45px] px-11 lg:py-[75px] lg:px-[80px] absolute -translate-y-2/4 w-full text-center left-0 top-2/4 backdrop-blur-[1px]">
        <h2 className="heading">{title}</h2>
        <p className="paragraph center">{paragraph}</p>
        <p className="paragraph center">Click the button below to learn more.</p>
        {button}
      </div>
    </div>
  );
};
export default Sqaure;
