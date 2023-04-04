import Image from "next/image";
import { Inter } from "next/font/google";
import Employee1 from "../assets/employee1.png";
import Employee2 from "../assets/employee2.jpg";
import Employee3 from "../assets/employee3.jpg";
import Employee4 from "../assets/employee4.jpg";
import Employee5 from "../assets/employee5.jpg";
import Employee6 from "../assets/employee6.jpg";
import Employee7 from "../assets/employee7.jpg";
import logo from "../public/logo.svg";
import Line from "../public/Line.svg";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const [hoveredTiles, setHoveredTiles] = useState([]);

  const tiles = [
    { key: 1, title: "", image: "" },
    { key: 2, title: "CEO", image: Employee1 },
    { key: 3, title: "Vice-CEO", image: Employee2 },
    { key: 4, title: "Product manager", image: Employee3 },
    { key: 5, title: "", image: "" },
    { key: 6, title: "", image: "" },
    { key: 7, title: "", image: "" },
    { key: 8, title: "", image: "" },
    { key: 9, title: "", image: "" },
    { key: 10, title: "", image: "" },
    { key: 11, title: "", image: "" },
    { key: 12, title: "", image: "" },
    { key: 13, title: "", image: "" },
    { key: 14, title: "", image: "" },
    { key: 15, title: "", image: "" },
    { key: 16, title: "Designer", image: Employee4 },
    { key: 17, title: "Designer", image: Employee5 },
    { key: 18, title: "", image: "" },
    { key: 19, title: "", image: "" },
    { key: 20, title: "", image: "" },
    { key: 21, title: "Product manager", image: Employee6 },
    { key: 22, title: "Designer", image: Employee7 },
    { key: 23, title: "Human ressources", image: "" },
    { key: 24, title: "Assistant Designer", image: "" },
    { key: 25, title: "Assistant Designer", image: "" },
  ];

  const handleMouseEnter = (tile) => {
    console.log(tile);
    setHoveredTiles((prevState) => [...prevState, tile]);
  };

  return (
    <>
      <div className="h-screen max-h-screen">
        <Image
          src={logo}
          alt="logo"
          className="absolute top-[3%] left-[1.5%] w-[14%]"
        />
        <div className="absolute top-[30px] right-[30px] text-[3vw] text-white">
          <nav className="flex items-center flex-col">
            <Image src={Line} alt="line" className="w-[0.2vw]" />
            <p className="mt-2 mb-2 ">About</p>
            <Image src={Line} alt="line" className="w-[0.2vw]" />
            <p className="mt-2 mb-2">Contact</p>
            <Image src={Line} alt="line" className="w-[0.2vw]" />
          </nav>
        </div>

        <div className="absolute top-[30%] left-[10%] text-white pointer-events-none">
          <h1 className="text-[13vw]">We are rsvd, a team of keen designers</h1>
          <h2 className="text-[7vw] mt-[3%] ml-[34%]">
            rsvd is a ground breaking design agency composed of those
            professionals under the cards.
          </h2>
        </div>
        <div className="flex flex-wrap min-h-screen ">
          <div className="flex flex-wrap min-h-screen ">
            {tiles.map((tile) => (
              <div
                key={tile.key}
                onMouseEnter={() => handleMouseEnter(tile)}
                className={`${
                  hoveredTiles.includes(tile)
                    ? "bg-transparent transition-all duration-500"
                    : "bg-[#443E3E]"
                } border-[#C7C3C3] border-b-[2px] border-r-[2px] h-[40vh] w-[20vw]`}
              ></div>
            ))}
          </div>
        </div>
        <div className=" -z-10 absolute  top-0">
          <div className="flex flex-wrap">
            {tiles.map((tile) => (
              <div
                key={tile}
                className="  border-[#C7C3C3] border-b-[2px] border-r-[2px] h-[40vh] w-[20vw]"
              >
                <div className="absolute text-white">
                  <p className="align-center"> {tile.title}</p>
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
