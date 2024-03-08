import eshoppingLogo from "./assets/eshoppingLogo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center w-screen">
      {/* Navbar */}
      <div className="w-11/12 mt-6 flex items-center justify-between">
        {/* Leftside */}
        <div className="flex items-center">
          <Image src={eshoppingLogo} alt="eShopping" className="w-20 h-20" />
          <div className="ms-5 ">
            <h4 className="text-lg font-bold">EShopping</h4>
            <h6 className="font-extralight text-xs">Everything is on sale!</h6>
          </div>
        </div>
        {/* RightSide */}
        <div></div>
      </div>
    </div>
  );
}
