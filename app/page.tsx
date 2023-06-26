import Hero from "@/components/Hero";
import image from "../public/images/hero--home.png";
import Introduction from "@/components/Introduction";
import Button from "@/components/Button";
import Sqaure from "@/components/Sqaure";
import Rectangle from "@/components/Rectangle";
import Exhibitors from "@/components/Exhibitors";
import Sponsors from "@/components/Sponsors";
import Callaborators from "@/components/Callaborators";

const Home = () => {
  return (
    <>
      <Hero image={image} alt="smiley kid holding flash light" position="left" />
      <Introduction
        title={
          <>
            We&lsquo;re kicking off Hispanic Heritage <br /> Month with style!
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
      <section className="max-w-[1400px] mx-auto mt-[7rem] lg:mt-[11rem] mb-[7rem] md:mb-[11rem] bg-[url('../public/images/bg--home.png')] bg-[top_center] bg-no-repeat bg-cover">
        <h1 className="heading mb-[1rem] lg:mb-[123px]">Call for Entries!</h1>
        <div className="flex flex-col md:flex-row items-center gap-[10px] lg:gap-[100px]">
          <Sqaure title="Present" paragraph="We invite STEM professionals and higher education providers to join us as speakers, panelists, and live demo facilitators, offering a platform to inspire Hispanic and minority middle schoolers towards STEM pathways and explore future careers in STEM." button={<Button text="Learn more!" ariaLabel="Learn more" />} />
          <Sqaure title="Volunteer" paragraph="We are actively seeking volunteers, aged 16 and above, who are willing to dedicate their time and contribute to the success of the Houston Science Festival. Your participation will be crucial in promoting and sharing your passion for STEM education within your community." button={<Button text="Sign up!" ariaLabel="Sign up" />} />
        </div>
        <div className=" mt-[20rem] md:mt-[80px] lg:mt-[180px] pb-[13rem]">
          <Rectangle title="Exhibit" paragraph="Join us for an exhilarating day of hands-on STEM activities! We are seeking passionate exhibitors who can lead engaging activities in an expo hall setting, aimed at introducing their organization to 6th-12th grade students and parents while igniting their enthusiasm for math and science. As an exhibitor or activity leader, your role will involve providing exciting hands-on STEM experiences, along with offering support and encouragement." cta="Click the button below to learn more." button={<Button text="Sign up!" ariaLabel="Sign up" />} />
        </div>
      </section>
      <Exhibitors />
      <Sponsors />
      <Callaborators />
    </>
  );
};
export default Home;
