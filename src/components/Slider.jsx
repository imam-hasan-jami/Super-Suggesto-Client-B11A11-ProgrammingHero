import React from 'react';

const Slider = () => {

    return (
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/7dDzf7d5/suggesto-banner-1.png"
              className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-180"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent flex items-center">
              <div className="text-white max-w-xs sm:max-w-sm md:max-w-md ml-4 sm:ml-8 md:ml-16 lg:ml-30 space-y-2 sm:space-y-3 md:space-y-4 px-2 sm:px-0">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">Welcome to Suggesto!</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-lg">
                  Discover products through real community questions & answers.
                </p>
              </div>
            </div>
            <div className="absolute left-2 right-2 sm:left-3 sm:right-3 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md bg-base-100 text-black">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md bg-base-100 text-black">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/WW1bQDC5/suggesto-banner-2.png"
              className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-180"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent flex items-center">
              <div className="text-white max-w-xs sm:max-w-sm md:max-w-md ml-4 sm:ml-8 md:ml-16 lg:ml-30 space-y-2 sm:space-y-3 md:space-y-4 px-2 sm:px-0">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">Better Alternatives Await</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-lg">
                  Get expert recommendations and smart alternatives for any product.
                </p>
              </div>
            </div>
            <div className="absolute left-2 right-2 sm:left-3 sm:right-3 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md bg-base-100 text-black">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md bg-base-100 text-black">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/twvh6r4Q/suggesto-banner-3.png"
              className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-180"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent flex items-center">
            <div className="text-white max-w-xs sm:max-w-sm md:max-w-md ml-4 sm:ml-8 md:ml-16 lg:ml-30 space-y-2 sm:space-y-3 md:space-y-4 px-2 sm:px-0">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">Crowdsourced Product Wisdom</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg">Find personalized product solutions from our collective wisdom.</p>
            </div>
          </div>
            <div className="absolute left-2 right-2 sm:left-3 sm:right-3 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md bg-base-100 text-black">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md bg-base-100 text-black">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Slider;