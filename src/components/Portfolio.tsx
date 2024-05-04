import { Icon } from "@iconify/react";
import { PortfolioVideos } from "../utils";
import { useState } from "react";

const Portfolio = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [src, setSrc] = useState("");
  return (
    <>
      {playVideo && (
        <section className="fixed top-0 left-0 w-screen h-screen backdrop-blur-lg z-[1000]">
          <div className="w-full h-full flex justify-center items-center relative">
            <Icon
              icon={"fa6-regular:circle-xmark"}
              className="absolute top-24 right-16 text-4xl text-white cursor-pointer"
              onClick={() => {
                setSrc("");
                setPlayVideo(false);
              }}
              origin={"crossOrigin"}
            />
            <iframe
              width="1280"
              height="720"
              src={`${src}?autoplay=true`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}
      <section className="bg-black text-white py-24" id="portfolio">
        <div className="w-4/5 md:container mx-auto">
          <div className="flex justify-center items-center flex-col gap-12">
            <img src="/images/person.png" alt="" className="hidden" />
            <div className="flex flex-col justify-center items-center gap-6 w-1/4">
              <h2 className="text-2xl md:text-5xl uppercase font-bold">
                Portfolio
              </h2>
              <div className="bg-gradient h-[1px] w-full"></div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {PortfolioVideos.map((video, index) => {
                return (
                  <div
                    className="h-56 flex justify-center items-center border rounded-md relative overflow-hidden after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black after:bg-opacity-40"
                    key={index}
                  >
                    <img
                      src={video?.thumnail}
                      alt={video.url}
                      className="w-full h-full object-cover"
                    />
                    <Icon
                      icon={"fa6-regular:circle-play"}
                      className="text-4xl cursor-pointer  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                      onClick={() => {
                        setPlayVideo(true);
                        setSrc(video.url);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
