import Hero from "@/components/Hero";
import image from "../../public/images/hero--sponsor.png";
import Introduction from "@/components/Introduction";
import Button from "@/components/Button";
import magnifyingGlass from "../../public/images/magnifying-glass.png";
import puzzlePiece from "../../public/images/puzzle-piece.png";
import handshake from "../../public/images/handshake.png";
import lightBulb from "../../public/images/light-bulb.png";
import Image from "next/image";

const Sponsor = () => {
  return (
    <>
      <Hero image={image} alt="world science festival kid in spacesuit" position="left" />
      <Introduction
        title="Sponsor"
        paragraph={
          <>
            As we strive to make Bridges to Science's Houston Science Festival - Casa to College a resounding success, we are seeking sponsors who can contribute to its realization. By being a sponsor, your organization gains exposure and connection to a diverse STEM education community driven by the meaningful impact of learning. Sponsors demonstrate a commitment to educational growth and inclusivity, and provide valuable educational resources and experiences to students who may otherwise lack access to such opportunities. Together, we can create an unforgettable and impactful STEM-inspired fiesta that celebrates Houston's Hispanic cultural heritage while nurturing the educational growth of our community.
            <br />
            <br />
            <br />
          </>
        }
        button={<Button text="Become a Sponsor!" ariaLabel="Become a Sponsor" />}
      />
      <section className="mb-[8rem] max-w-[1326px] mx-auto">
        <h1 className="heading mt-[8rem] mb-[2rem] xl:mt-[13rem] xl:mb-[7rem]">Why Sponsor?</h1>

        <div className=" px-[2rem] grid grid-cols-1 min-[600px]:grid-cols-2 xl:grid-cols-4  gap-[3rem]">
          <div className="max-w-[250px] mx-auto flex flex-col gap-[1rem]">
            <Image src={magnifyingGlass} width={96} height={97} alt="magnifying glass icon" className="mx-auto" />
            <h3 className="heading medium-blue">Extensive Exposure</h3>
            <p className="paragraph center">Gain exposure and visibility by reaching a diverse audience comprising of students, families, educators, and professionals.</p>
          </div>

          <div className="max-w-[250px] mx-auto flex flex-col gap-[1rem]">
            <Image src={puzzlePiece} width={96} height={96} alt="puzzle piece icon" className="mx-auto" />
            <h3 className="heading medium-blue">Brand Association</h3>
            <p className="paragraph center">Associate with this festival and enhance your brands reputation and showcase your commitment to fostering educational growth and inclusivity.</p>
          </div>

          <div className="max-w-[280px] mx-auto flex flex-col gap-[1rem]">
            <Image src={handshake} width={96} height={96} alt="handshake icon" className="mx-auto" />
            <h3 className="heading medium-blue">Networking Opportunities</h3>
            <p className="paragraph center">Foster collaborations and business opportunities in science and education by connecting with experts, professionals, and educators in STEAM.</p>
          </div>

          <div className="max-w-[250px] mx-auto flex flex-col gap-[1rem]">
            <Image src={lightBulb} width={96} height={96} alt="light bulb icon" className="mx-auto" />
            <h3 className="heading medium-blue">Social Impact</h3>
            <p className="paragraph center">Play a crucial role in supporting the community and ensure that all youth, no matter their economic background, feel empowered to pursue STEAM fields.</p>
          </div>
        </div>

        <div className="flex justify-center mt-[7rem]">
          <Button text="Become a Sponsor!" ariaLabel="Become a Sponsor" />
        </div>
      </section>
    </>
  );
};
export default Sponsor;
