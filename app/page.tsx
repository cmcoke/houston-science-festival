import Hero from "@/components/Hero";
import image from "../public/images/hero--home.png";

const Home = () => {
  return (
    <div>
      <Hero image={image} alt="smiley kid holding flash light" position="left" />
    </div>
  );
};
export default Home;
