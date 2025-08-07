import React from 'react';
import NavbarServices from "../Components/NavbarServices";

const Features = () => {
  return (
    <div className="m-0 p-0 overflow-x-hidden">
      {/* Navbar */}
      <NavbarServices />

{/* Top Section below Navbar */}
<section className="bg-black text-white min-h-[60vh] flex flex-col justify-center items-center px-8 text-center">
  <h1 className="text-3xl md:text-4xl font-bold mb-4">
    Our Services
  </h1>
  <p className="text-lg text-gray-300 max-w-3xl mx-auto"> 
    Home / Our Services
  </p>
</section>


      {/* Hero / Banner */}
      <section className="bg-white grid md:grid-cols-2 gap-0 px-0 py-0 m-0">
  {/* Left Side (Text) */}
  <div className="pl-32 pr-16 py-8 flex flex-col justify-center">
    <h2 className="text-3xl font-semibold mb-4 hover:text-[#b98e72] transition-colors duration-300 cursor-pointer">
      Watch Repair Services
    </h2>
    <p className="text-gray-600 mb-6 leading-loose">
     Our Reprizo repair centers are staffed by skilled watchmakers who expertly service all brands and types of timepieces. From wristwatches and pocket watches to stopwatches, clocks, and other precision instruments, we restore every mechanism with exceptional care and craftsmanship.
    </p>
    <button className="bg-white border border-gray-400 text-gray-800 px-6 py-2 rounded-none w-fit hover:bg-black hover:text-white transition">
      Learn More
    </button>
  </div>

  {/* Right Side (Image - No Padding) */}
  <div className="w-full overflow-hidden">
    <img
      src="/watch.jpg"
      alt="Watch"
      className="w-full h-full object-cover"
    />
  </div>
</section>

      {/* Reversed Service Section */}
<section className="bg-white grid md:grid-cols-2 gap-0 px-0 py-0 m-0">
  {/* Left Side (Image) */}
  <div className="w-full overflow-hidden">
    <img
      src="/watch-2.jpg"
      alt="Repair Tools"
      className="w-full h-full object-cover"
    />
  </div>

  
  <div className="pl-32 pr-16 py-8 flex flex-col justify-center">
    <h2 className="text-3xl font-semibold mb-4 hover:text-[#b98e72] transition-colors duration-300 cursor-pointer">
      Jewelry Repair Services
    </h2>
    <p className="text-gray-600 mb-6 leading-loose">
     At Reprizo, our skilled artisans combine modern technology with traditional craftsmanship to offer a full range of jewelry services. In addition to working with silver and gold, we specialize in handling gemstones, precious jewels, platinum, and bronze. Whatever your needs may be, feel free to contact us for expert assistance with these materials.
    </p>
    <button className="bg-white border border-gray-400 text-gray-800 px-6 py-2 rounded-none w-fit hover:bg-black hover:text-white transition">
      Learn More
    </button>
  </div>
</section>



<section className="bg-white grid md:grid-cols-2 gap-0 px-0 py-0 m-0">
  {/* Left Side (Text) */}
  <div className="pl-32 pr-16 py-8 flex flex-col justify-center">
    <h2 className="text-3xl font-semibold mb-4 hover:text-[#b98e72] transition-colors duration-300 cursor-pointer">
      Engraving Services
    </h2>
    <p className="text-gray-600 mb-6 leading-loose">
      We believe there's no better way to leave a lasting impression than by engraving someone's initials on a meaningful item. Our laser engraving services allow you to personalize any piece, turning it into a memorable keepsake. Even if your gift wasn’t purchased from Reprizo, we’re happy to engrave it for you.
    </p>
    <button className="bg-white border border-gray-400 text-gray-800 px-6 py-2 rounded-none w-fit hover:bg-black hover:text-white transition">
      Learn More
    </button>
  </div>

  {/* Right Side (Image - No Padding) */}
  <div className="w-full overflow-hidden">
    <img
      src="/img3.jpg"
      alt="Watch"
      className="w-full h-full object-cover"
    />
  </div>
</section>

      {/* Reversed Service Section */}
<section className="bg-white grid md:grid-cols-2 gap-0 px-0 py-0 m-0">
  {/* Left Side (Image) */}
  <div className="w-full overflow-hidden">
    <img
      src="/img4.jpg"
      alt="Repair Tools"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right Side (Text) */}
  <div className="pl-32 pr-16 py-8 flex flex-col justify-center">
    <h2 className="text-3xl font-semibold mb-4 hover:text-[#b98e72] transition-colors duration-300 cursor-pointer">
      Ring Resizing
    </h2>
    <p className="text-gray-600 mb-6 leading-loose">
      Whether your ring feels too tight or too loose, our expert jewelers at Reprizo offer precise ring resizing to ensure a perfect fit. We handle all types of metals with care, preserving the original beauty of your ring. From engagement bands to heirloom pieces, we guarantee a seamless finish. Bring us your ring, and we’ll make it feel like it was made just for you.
    </p>
    <button className="bg-white border border-gray-400 text-gray-800 px-6 py-2 rounded-none w-fit hover:bg-black hover:text-white transition">
      Learn More
    </button>
  </div>
</section>

{/* Service Section */}
      <section className="bg-white grid md:grid-cols-2 gap-0 px-0 py-0 m-0">
  {/* Left Side (Text) */}
  <div className="pl-32 pr-16 py-8 flex flex-col justify-center">
    <h2 className="text-3xl font-semibold mb-4 hover:text-[#b98e72] transition-colors duration-300 cursor-pointer">
      Stone Setting Service
    </h2>
    <p className="text-gray-600 mb-6 leading-loose">
      Reprizo offers expert stone setting services for all types of jewelry. We carefully secure diamonds and other precious stones using your preferred setting style. Whether it’s a new piece or a repair, we ensure lasting beauty and strength.
    </p>
    <button className="bg-white border border-gray-400 text-gray-800 px-6 py-2 rounded-none w-fit hover:bg-black hover:text-white transition">
      Learn More
    </button>
  </div>

  {/* Right Side (Image - No Padding) */}
  <div className="w-full overflow-hidden">
    <img
      src="/img5.jpg"
      alt="Watch"
      className="w-full h-full object-cover"
    />
  </div>
</section>

<section className="w-full h-[300px] bg-black flex items-center justify-center gap-8 px-6">
  <div className="h-[220px] w-[220px] flex items-center justify-center">
    <img src="/logo1.webp" alt="Logo 1" className="h-full w-auto object-contain" />
  </div>
  <div className="h-[220px] w-[220px] flex items-center justify-center">
    <img src="/logo2.webp" alt="Logo 2" className="h-full w-auto object-contain" />
  </div>
  <div className="h-[220px] w-[220px] flex items-center justify-center">
    <img src="/logo3.webp" alt="Logo 3" className="h-full w-auto object-contain" />
  </div>
  <div className="h-[220px] w-[220px] flex items-center justify-center">
    <img src="/logo4.webp" alt="Logo 4" className="h-full w-auto object-contain" />
  </div>
  <div className="h-[220px] w-[220px] flex items-center justify-center">
    <img src="/logo5.webp" alt="Logo 5" className="h-full w-auto object-contain" />
  </div>
</section>




    </div>
  );
};

export default Features;
