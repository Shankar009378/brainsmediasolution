import { CheckCircle2 } from "lucide-react";

const Pricing = () => {

  const visionPoints = [
    "Deliver innovative digital marketing solutions.",
    "Enhance client success through tailored strategies.",
    "Foster creative excellence in all our projects.",
    "Build strong, long-lasting partnerships.",
    "Leverage data and analytics for optimal results.",
    "Promote continuous learning and professional development.",
    "Commit to sustainability and positive impact.",
    "Drive business growth for our clients.",
    "Focus on customer satisfaction and exceptional service.",
    "Support local communities and initiatives."
  ];

  return (
    <div id="vision" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        VISION
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-2/3 p-2">
          <div className="p-10 border border-neutral-700 rounded-xl bg-gradient-to-r from-orange-500 to-orange-800 text-white">
            <p className="text-4xl mb-8 font-bold">
              Our Vision
            </p>
            <ul>
              {visionPoints.map((point, index) => (
                <li key={index} className="mt-4 flex items-center">
                  <CheckCircle2 className="text-green-400" />
                  <span className="ml-2">{point}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-10">
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full lg:w-auto h-12 px-6 py-3 tracking-tight text-xl bg-white text-purple-700 hover:bg-purple-700 hover:text-white border border-white rounded-lg transition duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
