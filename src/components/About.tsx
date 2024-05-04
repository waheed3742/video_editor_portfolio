const About = () => {
  return (
    <>
      <section className="bg-black text-white py-24" id="about">
        <div className="w-4/5 md:container mx-auto">
          <div className="flex justify-center items-center flex-col gap-12">
            <img src="/images/person.png" alt="" className="md:hidden" />
            <div className="flex flex-col justify-center items-center gap-6 w-1/2 md:w-1/4">
              <h2 className="text-2xl md:text-5xl uppercase font-bold">
                About Me
              </h2>
              <div className="bg-gradient h-[1px] w-full"></div>
            </div>
            <div className="text-center px-8 md:px-0 md:text-lg">
              <p>
                Welcome to the cinematic realm of Jimmy, where creativity meets
                technology to craft visually stunning narratives. With
              </p>
              <p>
                a passion for storytelling and a keen eye for detail, I embark
                on a journey to transform ordinary footage into
              </p>
              <p>extraordinary visual experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
