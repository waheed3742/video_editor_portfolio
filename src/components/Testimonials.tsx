import { Icon } from "@iconify/react";
import { TestimonialsData } from "../utils";

const Testmonials = () => {
  return (
    <>
      <section className="bg-black text-white py-32" id="testimonials">
        <div className="w-4/5 md:container mx-auto">
          <div className="flex justify-center items-center flex-col gap-12">
            <img src="/images/person.png" alt="" className="hidden" />
            <div className="flex flex-col justify-center items-center gap-6 w-1/4">
              <h2 className="text-2xl md:text-5xl uppercase font-bold">
                Testmonials
              </h2>
              <div className="bg-gradient h-[1px] w-full"></div>
            </div>
            <div className="w-full grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-8">
              {TestimonialsData.map((data, index) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center shadow-xl shadow-gray-700 rounded-md relative overflow-hidden  h-56"
                    key={index}
                  >
                    <div className="w-4/5 flex flex-col justify-start items-start gap-2">
                      <div className="text-center w-full flex justify-center items-center">
                        <Icon
                          icon={"fa6-solid:quote-left"}
                          className="text-xl"
                        />
                      </div>
                      <p className="text-sm text-center">{data?.description}</p>
                      <div className="text-xs text-gray-400 flex justify-center items-center gap-2 w-full">
                        <span className="font-semibold">{data?.name}</span>
                      </div>
                    </div>
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

export default Testmonials;
