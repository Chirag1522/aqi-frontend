import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/LOGO.jpg";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 text-xl ">
      {/* <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div> */}

      <div className="py-5 ">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />

            <nav className="hidden md:flex gap-12 text-black/60 items-center">
              <a href="#">Home</a>
              <a href="Comparison.html">Comparison</a>
              <a href="WorldMap.html">Map</a>
              <a href="Prediction.html">Predict</a>
              <a href="#">About Us</a>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
};
