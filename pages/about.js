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
  const [hoveredTiles, setHoveredTiles] = useState([{}]);

  const tiles = [
    { title: "", image: "" },
    { title: "CEO", image: Employee1 },
    { title: "Vice-CEO", image: Employee2 },
    { title: "Product manager", image: Employee3 },
    { title: "", image: "" },
    { title: "", image: "" },
    { title: "", image: "" },
    { title: "", image: "" },
    { title: "", image: "" },
    { title: "", image: "" },
    { title: "", image: "" },
    { title: "", image: "" },
    { title: "", image: "" },
    { title: "", image: "" },
    { title: "", image: "" },
    { title: "Designer", image: Employee4 },
    { title: "Designer", image: Employee5 },
    { title: "", image: "" },
    { title: "", image: "" },
    { title: "", image: "" },
    { title: "Product manager", image: Employee6 },
    { title: "Designer", image: Employee7 },
    { title: "Human ressources", image: "" },
    { title: "Assistant Designer", image: "" },
    { title: "Assistant Designer", image: "" },
  ];

  const handleMouseEnter = (tile) => {
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
        <div className="flex flex-wrap min-h-screen -z-10">
          {tiles.map((tile) => (
            <div
              key={tile}
              onMouseEnter={() => handleMouseEnter(tile)}
              className=" bg-[#443E3E] border-[#C7C3C3] border-b-[2px] border-r-[2px] h-[40vh] w-[20vw]"
            >
              <div className="text-center mt-2 absolute text-white text-[2vw] w-[20%]">
                <div className="flex justify-center">
                  <p
                    className={`${
                      hoveredTiles.includes(tile.title) ? "flex " : "hidden"
                    }`}
                  >
                    {tile.title}
                  </p>
                </div>
              </div>

              {tile.image !== "" ? (
                <Image
                  src={tile.image}
                  alt="image"
                  width={3000}
                  height={3000}
                  className={`${
                    hoveredTiles.includes(tile)
                      ? "flex object-cover object-center border-b-[2px]"
                      : "hidden"
                  }`}
                  style={{ height: "inherit" }}
                />
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
