import Image from "next/image";
import { Inter } from "next/font/google";
import Background1 from "../assets/background1.jpg";
import logo from "../public/logo.svg";
import Line from "../public/Line.svg";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [hoveredTiles, setHoveredTiles] = useState([]);

  const tiles = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  const handleMouseEnter = (tile) => {
    console.log(tile);
    setHoveredTiles((prevState) => [...prevState, tile]);
  };

  return (
    <>
      <Image
        src={Background1}
        alt="background"
        height={3000}
        width={3000}
        className="-z-10 absolute h-screen object-center object-cover "
      />
      <div className="h-screen max-h-screen">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="absolute top-[3%] left-[1.5%] w-[14%]"
          />
        </Link>
        <div className="absolute top-[30px] right-[30px] text-[3vw] text-white">
          <nav className="flex items-center flex-col">
            <Image src={Line} alt="line" className="w-[0.2vw]" />
            <Link href="/about" className="mt-2 mb-2 ">
              About
            </Link>
            <Image src={Line} alt="line" className="w-[0.2vw]" />
            <Link href="/contact" className="mt-2 mb-2">
              Contact
            </Link>
            <Image src={Line} alt="line" className="w-[0.2vw]" />
          </nav>
        </div>
        <div className="absolute top-[30%] left-[10%] text-white pointer-events-none">
          <h1 className="text-[13vw]">Go behond the superficial</h1>
          <h2 className="text-[7vw] mt-[3%]">See for yourself</h2>
        </div>
        <div className="flex flex-wrap min-h-screen -z-10">
          {tiles.map((tile) => (
            <div
              key={tile}
              onMouseEnter={() => handleMouseEnter(tile)}
              className={`${
                hoveredTiles.includes(tile)
                  ? "bg-transparent transition-all duration-500"
                  : "bg-[#443E3E]"
              } border-[#C7C3C3] border-b-[2px] border-r-[2px] min-h-[10vh] w-[20vw]`}
              style={{
                ...(tile % 5 === 0
                  ? { borderRight: "none" }
                  : { borderRight: "2px solid #C7C3C3" }),

                ...(tiles.indexOf(tile) >= 20
                  ? { borderBottom: "none" }
                  : { borderBottom: "2px solid #C7C3C3" }),
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
