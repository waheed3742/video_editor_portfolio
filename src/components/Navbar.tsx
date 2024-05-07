import { useState } from "react";
import { Links } from "../utils";

const Navbar = () => {
  const [active, setActive] = useState("#home");
  return (
    <>
      <div className="bg-black hidden text-white sticky top-0 left-0 w-full h-24 lg:flex justify-center items-center z-[999] orbitron">
        <div className="w-4/5 md:container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <a href="/" className="text-2xl font-bold">
                VideoAlchemist
              </a>
            </div>
            <div>
              <ul className="flex justify-center items-center">
                {Links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className={`text-neutral-200 uppercase inline-block px-2 xl:px-4 py-2 hover:bg-primary transition-all duration-300 ease-in-out ${
                        link?.url === active ? "bg-primary text-white" : ""
                      }`}
                      onClick={() => {
                        setActive(link.url);
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
