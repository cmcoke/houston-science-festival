import Hero from "@/components/Hero";
import image from "../public/images/hero--home.png";
import Introduction from "@/components/Introduction";
import Button from "@/components/Button";

const Home = () => {
  return (
    <div>
      <Hero image={image} alt="smiley kid holding flash light" position="left" />
      <Introduction
        title={
          <>
            We're kicking off Hispanic Heritage <br /> Month with style!
          </>
        }
        subtitle={
          <>
            SATURDAY, SEPTEMBER 9, 2023: 9am - 3pm
            <br />
            Houston Community College - West Houston Institute
          </>
        }
        paragraph="Bridges to Science's Houston Science Festival - Casa to College, the first of its kind in Houston, is a celebration of Hispanic culture and learning at home designed for 6th-12th grade students and their parents, showcasing science, technology, engineering, and math (STEM). It offers a vibrant fiesta with workshops, live demonstrations, multidisciplinary collaborations, family-friendly science activities, interactive experiences, STEM career panels, and a taste of Hispanic cuisine. By highlighting Houston's Hispanic cultural heritage, the event encourages families to learn en familia and explore exciting science pathways, fostering a deeper connection between science and the arts."
        button={<Button text="Register now!" ariaLabel="Register now" />}
      />
    </div>
  );
};
export default Home;
