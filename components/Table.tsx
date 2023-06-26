import Image from "next/image";
import checkmark from "../public/images/checkmark.png";
import topGoldShape from "../public/images/gold-shape-top.png";
import bottomGoldShape from "../public/images/gold-shape-bottom.png";
import topSilverShape from "../public/images/silver-shape-top.png";
import bottomSilverShape from "../public/images/silver-shape-bottom.png";
import topCopperShape from "../public/images/copper-shape-top.png";
import bottomCopperShape from "../public/images/copper-shape-bottom.png";

const Table = () => {
  return (
    <section className="max-w-[1326px] mx-auto">
      <h1 className="heading mb-[7rem]">Levels and Benefits</h1>

      <table className="table-fixed mx-auto min-w-[1200px]">
        <thead>
          <tr>
            <th></th>
            <th className="pb-3">
              <div className="flex flex-col justify-center items-center">
                <h2 className="heading mb-2">Gold</h2>
                <h3 className="heading light-blue mb-[1rem]">+ $5,000</h3>
                <Image src={topGoldShape} width={261} height={94} alt="top gold shape" />
              </div>
            </th>
            <th className="pb-3">
              <div className="flex flex-col justify-center items-center">
                <h2 className="heading mb-2">Silver</h2>
                <h3 className="heading light-blue mb-[1rem]">+ $1,000</h3>
                <Image src={topSilverShape} width={261} height={94} alt="top silver shape" />
              </div>
            </th>
            <th className="pb-3">
              <div className="flex flex-col justify-center items-center">
                <h2 className="heading mb-2">Copper</h2>
                <h3 className="heading light-blue mb-[1rem]">+ $250</h3>
                <Image src={topCopperShape} width={261} height={94} alt="top copper shape" />
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] pl-8">
              <p className="paragraph">Logo on t-shirts</p>
            </td>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4">
              <Image src={checkmark} width={30} height={30} alt="check mark icon" className="w-auto m-auto" />
            </td>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4 pr-8 "></td>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4 pr-8 "></td>
          </tr>

          <tr>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4 pl-8">
              <p className="paragraph w-[300px]">Preferred vendor space (one 6' table) at the Houston Science Festival</p>
            </td>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4">
              <Image src={checkmark} width={30} height={30} alt="check mark icon" className="w-auto m-auto" />
            </td>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4">
              <Image src={checkmark} width={30} height={30} alt="check mark icon" className="w-auto m-auto" />
            </td>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4 pr-8"></td>
          </tr>

          <tr>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4 pl-8">
              <p className="paragraph">Recognition in print program materials</p>
            </td>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4">
              <Image src={checkmark} width={30} height={30} alt="check mark icon" className="w-auto m-auto" />
            </td>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4">
              <Image src={checkmark} width={30} height={30} alt="check mark icon" className="w-auto m-auto" />
            </td>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4">
              <Image src={checkmark} width={30} height={30} alt="check mark icon" className="w-auto m-auto" />
            </td>
          </tr>

          <tr>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4 pl-8">
              <p className="paragraph w-[300px]">Featured on Houston Science Festival website Sponsor's page with link to Sponsor’s site</p>
            </td>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4">
              <Image src={checkmark} width={30} height={30} alt="check mark icon" className="w-auto m-auto" />
            </td>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4">
              <Image src={checkmark} width={30} height={30} alt="check mark icon" className="w-auto m-auto" />
            </td>
            <td className="border-b-2 border-[rgba(235,249,251,0.5)] p-4">
              <Image src={checkmark} width={30} height={30} alt="check mark icon" className="w-auto m-auto" />
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td></td>
            <td>
              <div>
                <Image src={bottomGoldShape} width={261} height={94} alt="bottom gold shape" />
              </div>
            </td>
            <td>
              <div>
                <Image src={bottomSilverShape} width={261} height={94} alt="bottom silver shape" />
              </div>
            </td>
            <td>
              <div>
                <Image src={bottomCopperShape} width={261} height={94} alt="bottom copper shape" />
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};
export default Table;
