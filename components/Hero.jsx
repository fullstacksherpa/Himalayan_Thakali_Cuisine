const Hero = () => {
  return (
    <section className="min-h-[70vh] bg-hero bg-cover bg-right" id="home">
      <div className="container mx-auto min-h-[70vh] flex justify-center items-center">
        <div className="flex text-center flex-col items-center">
          <div className="text-white text-[24px] lg:text-[28px] font-mono italic lg:font-medium mb-1 ">
            Nothing brings together like
          </div>
          <h1 className="mb-5 text-6xl lg:text-8xl font-bold text-white ">
            Himalayan Thakali Cuisine
          </h1>
          <p className="text-white max-w-[540px] mb-8">
            where you can savor the authentic flavors of local cuisine amidst a
            modern, welcoming ambiance.
          </p>
          <button className="btn"> View Menu</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
