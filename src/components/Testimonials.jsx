import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <div id="services" className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        SERVICES
      </h2>

      <Marquee>
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2">
          <img class="w-full h-40 object-cover" src="/src/assets/socialmedia.jpg" alt="Social Media Marketing" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Social Media Marketing</div>
            <p class="text-white text-base">
              Our expertise lies in crafting lead-generation social media marketing campaigns, creative posts, and engaging content that empower brands to break through the clutter and connect with their audience.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Know More
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2">
          <img class="w-full h-40 object-cover" src="/src/assets/webdesign.jpg" alt="Website Design" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Website Designing</div>
            <p class="text-white text-base">
              Our expertise lies in crafting lead-generation social media marketing campaigns, creative posts, and engaging content that empower brands to break through the clutter and connect with their audience.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Know More
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2">
          <img class="w-full h-40 object-cover" src="/src/assets/content.jpg" alt="Content Marketing" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Content Marketing</div>
            <p class="text-white text-base">
              Our expertise lies in crafting lead-generation social media marketing campaigns, creative posts, and engaging content that empower brands to break through the clutter and connect with their audience.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Know More
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2">
          <img class="w-full h-40 object-cover" src="/src/assets/seo.avif" alt="Seo" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Search Engine Optimization</div>
            <p class="text-white text-base">
              Our expertise lies in crafting lead-generation social media marketing campaigns, creative posts, and engaging content that empower brands to break through the clutter and connect with their audience.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Know More
            </button>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonials;
