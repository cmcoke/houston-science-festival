import Image from "next/image";
import facebook from "../public/images/facebook.png";
import instagram from "../public/images/instagram.png";
import twitter from "../public/images/twitter.png";
import linkend from "../public/images/linkend.png";
import bridges from "../public/images/bridges-to-science.png";
import shapes from "../public/images/shapes--bottom.png";
import Link from "next/link";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-[url('../public/images/shapes--bottom2.png')]  bg-[50%] bg-no-repeat bg-cover">
      <div className="max-w-[1200px] mx-auto px-4 lg:mt-[40rem] mb-[20rem]">
        {/* grid */}
        <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2">
          {/* col-1 */}
          <div className="col-start-1 col-end-2 mb-[3rem]">
            <h2 className="heading mb-10 text-center md:text-left">Follow us on socials!</h2>
            <ul className="flex items-center gap-5 mb-[4rem] lg:mb-[141px]">
              <li>
                <Link href="/">
                  <Image src={facebook} width={50} height={51} alt="facebook" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image src={instagram} width={50} height={51} alt="instagram" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image src={twitter} width={50} height={51} alt="twitter" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image src={linkend} width={50} height={51} alt="linkend" />
                </Link>
              </li>
            </ul>
            <div>
              <Image src={bridges} width={403} height={210} alt="bridges to science" className="ml-[-1rem]" />
            </div>
          </div>

          {/* col-2 */}
          <div className="col-start-1 col-end-2 lg:col-start-2 lg:col-end-3">
            <h2 className="heading mb-[45px]">Contact Us!</h2>
            <form className="flex flex-col gap-[42px]">
              <input type="text" placeholder="First Name" className="flex md:w-[383px] items-center gap-2.5 bg-[#EBF9FB] px-5 py-2.5 placeholder:text-black text-black" />
              <input type="email" name="email" id="email" placeholder="Email" className="flex md:w-[383px] items-center gap-2.5 bg-[#EBF9FB] px-5 py-2.5 placeholder:text-black text-black" />
              <textarea name="message" id="" cols={30} rows={10} placeholder="Message" className="flex w-full h-[171px] items-start gap-2.5 bg-[#EBF9FB] px-5 py-2.5 placeholder:text-black text-black"></textarea>
              <Button text="Send" ariaLabel="Send" />
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
