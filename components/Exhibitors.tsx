import Image from "next/image";
import cafecollege from "../public/images/cafecollege.png";
import sfa from "../public/images/sfa.png";
import tamu from "../public/images/tamu.png";
import shpe from "../public/images/shpe.png";
import hcc from "../public/images/hcc.png";
import harris from "../public/images/harris.png";
import cyber from "../public/images/cyber.png";
import riceUniversity from "../public/images/rice-university.png";

const Exhibitors = () => {
  return (
    <section className="mb-[7rem]">
      <h1 className="heading mb-[3rem] md:mb-[120px]">Meet our 2023 Exhibitors</h1>
      <div className="flex flex-col items-center gap-[75px] px-6">
        <Image src={cafecollege} width={501} height={200} alt="cafecollege logo" />
        <Image src={sfa} width={501} height={200} alt="sfa logo" />
        <Image src={tamu} width={501} height={200} alt="tamu logo" />
        <Image src={riceUniversity} width={501} height={200} alt="rice university logo" />
        <Image src={shpe} width={501} height={200} alt="shpe logo" />
        <Image src={hcc} width={501} height={200} alt="hcc logo" />
        <Image src={harris} width={501} height={200} alt="harris logo" />
        <Image src={cyber} width={501} height={200} alt="cyber logo" />
      </div>
    </section>
  );
};
export default Exhibitors;
