import Hero from "@/components/Hero";
import image from "../../public/images/hero--present.png";
import Introduction from "@/components/Introduction";
import Button from "@/components/Button";
import Rectangle from "@/components/Rectangle";

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
      <section className="max-w-[1400px] mx-auto mt-[12rem] ">
        <div className="mb-[7rem]">
          <Rectangle
            title="Speaker"
            paragraph={
              <>
                Unleash your STEM expertise and make a lasting impact as a speaker. Speakers will present an engaging STEM topic of their choosing to an audience for 20 minutes with 10 minutes for questions from the audience.
                <br />
                <br />
                If you have a topic that'll leave the audience spell-bound, don't miss out! Please fill out the form below to give us details. We will follow up with a phone call to discuss.
              </>
            }
            button={<Button text="Sign up!" ariaLabel="Sign up" />}
          />
        </div>
        <div className="mb-[7rem]">
          <Rectangle
            title="Panelist"
            paragraph={
              <>
                Are you ready to inspire the next generation of innovators? We are seeking passionate individuals like you to participate in exhilarating panel discussions. Share your invaluable experiences and illuminate the pathways that lead to thrilling STEM careers. Middle school students and their parents are eagerly awaiting your guidance.
                <br />
                <br />
                Be part of their transformative journey! Sign up by clicking below.
              </>
            }
            button={<Button text="Sign up!" ariaLabel="Sign up" />}
          />
        </div>
        <div>
          <Rectangle
            title="Demonstrator"
            paragraph={
              <>
                We are in search of passionate professionals who can facilitate mind-blowing science and math demonstrations. Grab the spotlight on the main auditorium stage and take 6th-12th grade students and parents an on an exhilarating 15-minute journey, leaving them inspired and envisioning themselves as the scientists of tomorrow. Don't miss this incredible opportunity to shape the future of science.
                <br />
                <br />
                Join us now and be the catalyst for their scientific dreams! Sign up by clicking below.
              </>
            }
            button={<Button text="Sign up!" ariaLabel="Sign up" />}
          />
        </div>
      </section>
    </>
  );
};
export default Present;
