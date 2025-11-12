import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
 const HomeSlider = () => {
 const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/JW1pxyfk/Black-Modern-Minimalist-Simple-Technology-Banner.png",
    title: "Visualize. Organize. Master Your AI Models.",
    description: "Experience a futuristic 3D dashboard where you can manage, track, and visualize all your AI models in one intelligent system."
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/ZpcwwmCG/Purple-3d-Cubes-Soundcloud-Banner.png",
    title: "Collaborate in Real Time — Smarter & Faster.",
    description: "Empower your team to co-manage datasets, train models, and monitor performance with 3D visual collaboration tools built for AI workflows."
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/DfmhGYm6/Blue-and-Pink-Gradient-Virtual-Reality-Discord-Profile-Banner.png",
    title: "Deploy Models. Monitor Performance. Scale Instantly.",
    description: "Launch your AI models with one click and monitor results through immersive 3D analytics that bring your system to life."
  }
]


  return (
    <div className='w-11/12 mx-auto'>
 <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl flex flex-col justify-center items-center text-center text-white px-6">
              <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="max-w-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default HomeSlider
