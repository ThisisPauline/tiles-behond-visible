import Image from "next/image";
import { Inter } from "next/font/google";
import Employee1 from "../assets/employee1.png";
import Employee2 from "../assets/employee2.jpg";
import Employee3 from "../assets/employee3.jpg";
import Employee4 from "../assets/employee4.jpg";
import Employee5 from "../assets/employee5.jpg";
import Employee6 from "../assets/employee6.jpg";
import Employee7 from "../assets/employee7.jpg";
import Employee8 from "../assets/employee8.jpg";
import Employee9 from "../assets/employee9.jpg";
import Employee10 from "../assets/employee10.jpg";
import Employee11 from "../assets/employee11.jpg";
import Employee12 from "../assets/employee12.jpg";
import logo from "../public/logo.svg";
import Line from "../public/Line.svg";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const [hoveredTiles, setHoveredTiles] = useState([]);
  const [TilesAlreadyHovered, setTilesAlreadyHovered] = useState([]);

  const tiles = [
    { key: 1, title: "", image: "" },
    { key: 2, title: "CEO", image: Employee1 },
    { key: 3, title: "Vice-CEO", image: Employee11 },
    { key: 4, title: "Product manager", image: Employee3 },
    { key: 5, title: "", image: "" },
    { key: 6, title: "", image: "" },
    { key: 7, title: "", image: "" },
    { key: 8, title: "", image: "" },
    { key: 9, title: "", image: "" },
    { key: 10, title: "", image: "" },
    { key: 11, title: "Designer", image: "" },
    { key: 12, title: "Designer", image: "" },
    { key: 13, title: "", image: "" },
    { key: 14, title: "", image: "" },
    { key: 15, title: "", image: "" },
    { key: 16, title: "Designer", image: Employee12 },
    { key: 17, title: "Designer", image: Employee5 },
    { key: 18, title: "", image: "" },
    { key: 19, title: "", image: "" },
    { key: 20, title: "", image: "" },
    { key: 21, title: "Product manager", image: Employee6 },
    { key: 22, title: "Designer", image: Employee7 },
    { key: 23, title: "Human ressources", image: Employee8 },
    { key: 24, title: "Assistant Designer", image: Employee9 },
    { key: 25, title: "Assistant Designer", image: Employee10 },
  ];

  if (typeof window !== "undefined") {
    if (window.innerWidth < 1021) {
      tiles.splice(9, 5);
    }
  }

  const handleMouseEnter = (tile) => {
    setHoveredTiles((prevState) => [...prevState, tile]);
    setTilesAlreadyHovered((prevState) => [...prevState, tile.key]);
  };

  return (
    <>
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
          <h1 className="text-[13vw] pointer-events-none">
            We are rsvd, a team of keen designers
          </h1>
          <h2 className="text-[7vw] mt-[3%] ml-[34%]">
            rsvd is a pioneering design agency made up of the industry&apos;s
            top professionals.
          </h2>
        </div>
        <div className="flex flex-wrap min-h-screen ">
          <div className="flex flex-wrap min-h-screen ">
            {tiles.map((tile) => (
              <div
                key={tile.key}
                onMouseEnter={() => handleMouseEnter(tile)}
                className={`${
                  TilesAlreadyHovered.includes(tile.key) && tile.image !== ""
                    ? "bg-transparent transition-all duration-500"
                    : "bg-[#443E3E]"
                } border-[#C7C3C3] border-b-[2px] last:border-b-[0px] border-r-[2px] h-[40vh] w-[20vw]`}
                style={{
                  ...(tile.key % 5 === 0
                    ? { borderRight: "none" }
                    : { borderRight: "2px solid #C7C3C3" }),

                  ...(tile.key === 21 ||
                  tile.key === 22 ||
                  tile.key === 23 ||
                  tile.key === 24 ||
                  tile.key === 25
                    ? { borderBottom: "none" }
                    : { borderBottom: "2px solid #C7C3C3" }),
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className=" -z-10 absolute  top-0">
          <div className="flex flex-wrap">
            {tiles.map((tile) => (
              <div
                key={tile.key}
                className="  border-[#C7C3C3] border-b-[2px] border-r-[2px] h-[40vh] w-[20vw]"
                style={{
                  ...(tile.key % 5 === 0
                    ? { borderRight: "none" }
                    : { borderRight: "2px solid #C7C3C3" }),
                }}
              >
                <div className="absolute text-white">
                  <div className="flex justify-center w-[20vw]">
                    <p className="align-center mt-2 text-[1.5vw]">
                      {tile.title}
                    </p>
                  </div>
                </div>
                {tile.image !== "" ? (
                  <Image
                    src={tile.image}
                    alt="image"
                    className="h-[40vh] w-[20vw] object-cover"
                  />
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
