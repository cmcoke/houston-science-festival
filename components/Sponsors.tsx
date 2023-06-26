import Image from "next/image";
import vela from "../public/images/vela.png";
import hslda from "../public/images/hslda.png";
import hccSmall from "../public/images/hccSmall.png";
import sponsorsChildOne from "../public/images/sponsorsChildOne.png";
import sponsorsChildTwo from "../public/images/sponsorsChildTwo.png";
import Sqaure from "./Sqaure";
import Button from "./Button";

const Sponsors = () => {
  return (
    <section className="mt-[7rem] md:mt-[11rem] lg:mt-[300px] px-3">
      <h1 className="heading mb-[3rem] md:mb-[6rem] lg:mb-[150px]">Thank you to our 2023 Sponsors</h1>

      {/* <div className="flex flex-col lg:flex-row justify-center items-center gap-11 md:gap-[117px] mx-[12rem]">
        <Image src={vela} width={301} height={127} alt="vela" />
        <Image src={hslda} width={340} height={127} alt="hslda" />
        <Image src={hccSmall} width={257} height={143} alt="hcc" />
      </div> */}

      <div className="grid gap-8 items-center justify-center px-12 md:grid-cols-3 max-w-[1200px] mx-auto">
        <Image src={vela} width={301} height={127} alt="vela" />
        <Image src={hslda} width={340} height={127} alt="hslda" />
        <Image src={hccSmall} width={257} height={143} alt="hcc" />
      </div>

      <div className="mt-[6rem] lg:mt-[10rem] max-w-[1200px] mx-auto md:grid md:grid-cols-2 md:gap-[90px]">
        <div className="md:col-span-1 mb-[11rem] md:mb-0">
          <Image src={sponsorsChildOne} width={566} height={801} alt="childhood runner" />
        </div>

        <div className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 mt-[-4rem] mb-[7rem] md:mt-[-6rem] md:mb-0">
          <Sqaure title="Sponsor" paragraph="Support Bridges to Science's Houston Science Festival - Casa to College, by becoming a sponsor. Help us showcase STEAM disciplines, offer engaging workshops, interactive experiences, and STEM career panels. Join us in empowering future generations!" button={<Button text="Sign up!" ariaLabel="Sign up" />} />
        </div>

        <div className="md:col-start-1 md:col-end-3 md:justify-self-center md:mt-[-7rem] lg:mt-[-12rem]">
          <Image src={sponsorsChildTwo} width={849} height={566} alt="cheerful young queer girl with glasses" />
        </div>
      </div>
    </section>
  );
};
export default Sponsors;
