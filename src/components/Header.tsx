const Header = () => {
  return (
    <header className="h-[70vh] exo relative overflow-hidden" id="home">
      <div className="w-4/5 md:container mx-auto h-full">
        <div className="flex justify-center items-end h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 text-white w-full h-full">
            <div className="w-full h-full">
              <div className="flex h-full mx-auto flex-col justify-center items-center md:items-start gap-8">
                <div>
                  <p className="text-sm">JIMMY TURNER</p>
                  <div className="h-[1px] w-full bg-gradient mt-2"></div>
                </div>
                <h1 className="text-5xl 2xl:text-8xl uppercase font-bold text-center md:text-left">
                  Professional video editor
                </h1>
                <p className="text-xl">Making your videos look more cool.</p>
                <a
                  href="#contact"
                  className="bg-primary text-xl p-4 px-16 uppercase font-bold hover:bg-secondary transition-all duration-300 ease-in-out orbitron"
                >
                  Lets Talk
                </a>
              </div>
            </div>
            <div className="md:flex justify-end items-end h-full w-full hidden">
              <div className="flex justify-between items-end relative w-full h-full">
                <img
                  src="/images/person.png"
                  alt=""
                  className="absolute z-50 bottom-0 left-1/2 -translate-x-1/2 h-3/4 lg:h-[90%]"
                />
                <img
                  src="/images/premier-pro.png"
                  alt=""
                  className="absolute hidden lg:inline-block z-50 top-[15%] left-[10%] scale-75"
                />
                <img
                  src="/images/after-effect.png"
                  alt=""
                  className="absolute hidden lg:inline-block z-50 top-[25%] right-[10%]"
                />
                <div>
                  <img
                    src="/images/shock-right.png"
                    alt=""
                    className="-scale-x-100 scale-125"
                  />
                </div>
                <div>
                  <img src="/images/shock-right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full backdrop-blur-xl absolute top-0 left-0 -z-10"></div>
      <div className="w-52 md:w-[400px] aspect-square bg-gradient rounded-full absolute opacity-20 animate-move-left -z-20"></div>
      <div className="w-52 md:w-[400px] aspect-square bg-gradient rounded-full absolute opacity-20 animate-move-right -z-20"></div>
      <div className="w-full h-full bg-black absolute top-0 left-0 -z-30"></div>
    </header>
  );
};

export default Header;
