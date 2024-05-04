import { Icon } from "@iconify/react";
import { resources } from "../utils";

const Tools = () => {
  return (
    <>
      <section className="bg-black text-white py-24" id="tools">
        <div className="w-4/5 md:container mx-auto">
          <div className="flex justify-center items-center flex-col gap-12">
            <img src="/images/person.png" alt="" className="hidden" />
            <div className="flex flex-col justify-center items-center gap-6 w-3/4 md:w-1/2">
              <h2 className="text-2xl md:text-5xl uppercase font-bold">
                Tools and Resources
              </h2>
              <div className="bg-gradient h-[1px] w-full"></div>
            </div>
            <div className="text-center md:text-xl">
              <p>
                Want to start editing videos but don't know where to start? Here
                are some tools and resources to help you get started.
              </p>
              <p>
                These tools and resources are essential for video editing and
                will help you get started.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full gap-10 orbitron">
              {resources.map((resource, index) => {
                return (
                  <a
                    key={index}
                    href={resource.url}
                    className="flex justify-start md:justify-center items-center flex-1 gap-2 text-sm lg:text-xl tracking-widest"
                    target="_blank"
                  >
                    <span className="inline-block w-4 aspect-square rounded-full bg-gradient"></span>
                    {resource.name}
                    <span>
                      <Icon icon={"fa6-solid:arrow-right"} />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tools;
