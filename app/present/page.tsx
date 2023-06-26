import Hero from "@/components/Hero";
import image from "../../public/images/hero--present.png";
import Introduction from "@/components/Introduction";
import Button from "@/components/Button";

const Present = () => {
  return (
    <>
      <Hero image={image} alt="adorable girl being passionate about robotics" />
      <Introduction
        title="Present"
        subtitle="Call for entries closes day/month/year"
        paragraph={
          <>
            Calling all STEM enthusiasts and experts! We are on the lookout for STEM professionals and higher education providers to join us as speakers, panelists, and demonstrators. Are you passionate about a particular subject and eager to share your knowledge? This is your chance to shine! We are offering a platform for you to inspire Hispanic and minority middle schoolers towards STEM pathways and explore future careers in STEM.
            <br />
            <br />
            Scroll down to learn more about each presenter.
            <br />
            <br />
          </>
        }
        button={<Button text="Sign up!" ariaLabel="Sign up" />}
      />
    </>
  );
};
export default Present;
