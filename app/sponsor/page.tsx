import Hero from "@/components/Hero";
import image from "../../public/images/hero--sponsor.png";
import Introduction from "@/components/Introduction";
import Button from "@/components/Button";
import Sponsors from "@/components/Sponsors";

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
    </>
  );
};
export default Sponsor;
