import Image from "next/image";

const Menu = () => {
  return (
    <section className=" min-h-[780px]">
      <div className=" h-[780px] bg-menu absolute w-full max-w-[1800px] -z-0"></div>

      <div className="relative z-10 top-72 lg:top-52">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="font-black text-[46px] mb-4 leading-[1.1] capitalize text-white">
            Delicious flavour of autumn
          </h2>
          <p className="text-white/70 capitalize">view all menu</p>
          <div>
            <Image
              src="/photobox/img/model-white.png"
              width="300"
              height="900"
              alt="aa"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
