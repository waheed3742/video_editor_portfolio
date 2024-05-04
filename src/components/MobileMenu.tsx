import { useState } from "react";
import { Links } from "../utils";
import { Icon } from "@iconify/react";

const MobileMenu = () => {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-black flex text-white px-8 md:px-0 sticky top-0 left-0 w-full h-24 lg:hidden justify-center items-center z-[999] orbitron">
        <div
          className={`fixed top-0 transition-all duration-300 ease-in-out ${
            open ? "right-0" : "-right-full"
          } w-1/2 h-screen bg-black`}
        >
          <div
            className="px-8 h-24 flex justify-end items-center relative"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Icon
              icon={"fa6-solid:minus"}
              className="text-4xl cursor-pointer rotate-45 absolute"
            />
            <Icon
              icon={"fa6-solid:minus"}
              className="text-4xl cursor-pointer -rotate-45 absolute"
            />
          </div>
          <ul className="flex justify-start items-start flex-col">
            {Links.map((link, index) => (
              <li key={index} className="w-full">
                <a
                  href={link.url}
                  className={`text-neutral-200 uppercase w-full block px-2 xl:px-4 py-2 hover:bg-primary transition-all duration-300 ease-in-out ${
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
          <div className="flex justify-start items-center gap-8 px-4 py-8">
            <a href="https://www.google.com">
              <Icon icon={"fa6-brands:facebook-square"} className="text-xl" />
            </a>
            <a href="https://www.google.com">
              <Icon icon={"fa6-brands:linkedin"} className="text-xl" />
            </a>
            <a href="https://www.google.com">
              <Icon icon={"fa6-brands:youtube"} className="text-xl" />
            </a>
          </div>
        </div>
        <div className="w-4/5 md:container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <a href="/" className="text-2xl font-bold">
                VideoAlchemist
              </a>
            </div>

            <div>
              <Icon
                icon={"fa6-solid:bars"}
                className="text-2xl cursor-pointer"
                onClick={() => {
                  setOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
