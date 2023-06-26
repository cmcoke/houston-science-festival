import Hero from "@/components/Hero";
import image from "../../public/images/hero--sponsor.png";
import Introduction from "@/components/Introduction";
import Button from "@/components/Button";
import Image from "next/image";
import vela from "../../public/images/vela.png";
import hslda from "../../public/images/hslda.png";
import hccSmall from "../../public/images/hccSmall.png";
import Table from "@/components/Table";
import WhySponsors from "@/components/WhySponsors";

import topLines from "../../public/images/sponsor-top-lines.png";
import bottomLines from "../../public/images/sponsor-bottom-lines.png";

const Sponsor = () => {
  return (
    <div className="relative">
      <Hero image={image} alt="world science festival kid in spacesuit" position="left" />
      <Introduction
        title="Sponsor"
        paragraph={
          <>
            As we strive to make Bridges to Science&lsquo;s Houston Science Festival - Casa to College a resounding success, we are seeking sponsors who can contribute to its realization. By being a sponsor, your organization gains exposure and connection to a diverse STEM education community driven by the meaningful impact of learning. Sponsors demonstrate a commitment to educational growth and inclusivity, and provide valuable educational resources and experiences to students who may otherwise lack access to such opportunities. Together, we can create an unforgettable and impactful STEM-inspired fiesta that celebrates Houston&lsquo;s Hispanic cultural heritage while nurturing the educational growth of our community.
            <br />
            <br />
            <br />
          </>
        }
        button={<Button text="Become a Sponsor!" ariaLabel="Become a Sponsor" />}
      />
      <WhySponsors />
      <Table />
      <section className="max-w-[1326px] mx-auto mt-[7rem] md:mt-[11rem] lg:mt-[300px] px-3 mb-[13rem]">
        <h1 className="heading mb-[3rem] md:mb-[6rem] lg:mb-[150px]">Thank you to our 2023 Sponsors!</h1>

        <div className="grid gap-8 items-center justify-center px-12 md:grid-cols-3 max-w-[1200px] mx-auto">
          <Image src={vela} width={301} height={127} alt="vela" />
          <Image src={hslda} width={340} height={127} alt="hslda" />
          <Image src={hccSmall} width={257} height={143} alt="hcc" />
        </div>
      </section>

      {/* top lines */}
      <div className="absolute left-0 -translate-y-[53%]  top-[53%] z-0">
        <Image src={topLines} width={554} height={1989} alt="top lines" />
      </div>

      {/* bottom lines */}
      <div className="absolute right-0 -translate-y-[90%]  top-[90%] z-0">
        <Image src={bottomLines} width={554} height={1989} alt="top lines" />
      </div>
    </div>
  );
};
export default Sponsor;
