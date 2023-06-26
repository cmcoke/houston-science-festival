import Image from "next/image";
import jrmf from "../public/images/jrmf.png";
import cyber from "../public/images/cyberCallab.png";
import hcc from "../public/images/hccCallab.png";
import geometiles from "../public/images/geometiles.png";
import shpeCallab from "../public/images/shpeCallab.png";
import math from "../public/images/math.png";
import innovationSpark from "../public/images/innovationSpark.png";
import ihch from "../public/images/ihch.png";
import tamuCallab from "../public/images/tamuCallab.png";
import mathhappens from "../public/images/mathhappens.png";
import hmnsc from "../public/images/hmnsc.png";
import riceUniCallab from "../public/images/riceUniCallab.png";

const Callaborators = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-3 mt-[5rem] mb-[6rem] md:mb-[11rem]  lg:mt-[14rem] lg:mb-[10rem]">
      <h1 className="heading mb-[2rem] lg:mb-[7rem]">
        Thank you to our Founding <br /> Collaborators
      </h1>

      <div className="grid items-center grid-cols-1 gap-8 lg:gap-6 px-10 md:grid-cols-2 lg:grid-cols-3  lg:grid-rows-5  ">
        <div>
          <Image src={jrmf} width={305} height={133} alt="jrmf" />
        </div>
        <div>
          <Image src={cyber} width={320} height={95} alt="cyber" />
        </div>
        <div>
          <Image src={hcc} width={257} height={143} alt="hcc" />
        </div>
        <div>
          <Image src={geometiles} width={381} height={127} alt="geometiles" />
        </div>
        <div>
          <Image src={shpeCallab} width={299} height={129} alt="shpe" />
        </div>
        <div>
          <Image src={math} width={260} height={161} alt="math" />
        </div>
        <div>
          <Image src={innovationSpark} width={337} height={99} alt="innovationSpark" />
        </div>
        <div>
          <Image src={ihch} width={325} height={119} alt="ihch" />
        </div>
        <div>
          <Image src={tamuCallab} width={298} height={63} alt="tamuCallab" />
        </div>
        <div>
          <Image src={mathhappens} width={327} height={73} alt="mathhappens" />
        </div>
        <div className="lg:col-start-2 lg:col-end-4">
          <Image src={hmnsc} width={721} height={31} alt="hmnsc" />
        </div>
        <div className="lg:col-start-1 lg:col-end-4">
          <Image src={riceUniCallab} width={1066} height={134} alt="riceUniCallab" />
        </div>
      </div>
    </section>
  );
};
export default Callaborators;
