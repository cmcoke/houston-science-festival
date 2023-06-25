interface introductionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  paragraph: string;
  button: React.ReactNode;
}

const Introduction = ({ title, subtitle, paragraph, button }: introductionProps) => {
  return (
    <section className="px-2 max-w-[1136px] mx-auto flex flex-col items-center gap-[30px] mt-[130px] md:mt-[200px] lg:mt-[300px] xl:mt-[400px] 2xl:mt-[37rem] mb-[50px]">
      <h1 className="heading">{title}</h1>
      <h3 className="heading medium-blue">{subtitle}</h3>
      <p className="paragraph center mx-[1rem] 2xl:mx-[11%]">{paragraph}</p>
      {button}
    </section>
  );
};
export default Introduction;
