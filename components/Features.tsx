import { BsImages } from "react-icons/bs";
import { FaCreativeCommonsZero } from "react-icons/fa";
import { TbInfoSquareFilled } from "react-icons/tb";
import { PiSwapBold } from "react-icons/pi";
import { GiEyeTarget } from "react-icons/gi";
import { HiFilter } from "react-icons/hi";
import Image from "next/image";


const Features = () => {


 const features = [
    {
      heading: "Zero config",
      description:
        "Just your file and your API key. No configs, no buckets, no bs.",
      icon: "config-icon.svg",
      coming_soon: false,
    },
    {
      heading: "Image optimization",
      description:
        "",
      icon: "image-optimization.svg",
      coming_soon: true,
    },
    {
      heading: "",
      description:
        "",
      icon: "",
      coming_soon: false,
    },
    {
      heading: "Content info",
      description:
        "",
      icon: "img-info.svg",
      coming_soon: false,
    },
    {
      heading: "Image type conversion",
      description:
        "",
      icon: "img-type-conversion.svg",
      coming_soon: true,
    },
    {
      heading: "",
      description:
        "",
      icon:"ai-content.svg",
      coming_soon: true,
    },
  ];

function Features({ className, featureHeading, featureDescription, featureIcon }) {
  return (
    <div className={`feature shadow-[#FFB08E] shadow transform-gpu transition-transform ease-in-out duration-300 md:hover:scale-[1.1]  hover:cursor-pointer rounded-lg md:w-auto xl:w-[26rem] p-2 py-5 flex flex-col items-center px-5 my-8 mx-3  md:mx-5 ${className}`}>
      <div className="feature-icon">
        <img src={featureIcon} alt={featureHeading} className="w-48 h-48" />
      </div>
      <div className="feature-content py-1 mt-4">
        <h2 className="feature-heading font-bold text-xl my-1">{featureHeading}</h2>
        <p className="feature-description">{featureDescription}</p>
      </div>
    </div>
  );
}

  return (
    <div className="flex items-center flex-col justify-center">

      <h1 className="shiny-text text-center text-3xl my-10 font-bold px-5 ">{`Bring your files, we'll handle the rest`}</h1>
        <div className="features-container grid lg:grid-cols-3 gap-4 p-2 ">
          <Features className="transform lg:translate-y-16" featureHeading="Image optimization" featureDescription="Improve user experience by reducing image size by up to 80%." featureIcon="/image-optimization.svg"/>
          <Features className="" featureHeading="Zero config" featureDescription="Just your file and your API key. No configs, no buckets, no bs." featureIcon="/config-icon.svg"/>
          <Features className="lg:transform lg:translate-y-16" featureHeading="Size and type filtering" featureDescription="Specify filters to include or exclude images based on their size, dimensions or file formats." featureIcon="/filtering.svg"/>
          <Features className="lg:transform lg:translate-y-20" featureHeading="Content info" featureDescription="Extract valuable insights from media files such as MIME type, demensions, file type and more." featureIcon="/img-info.svg"/>
          <Features className="" featureHeading="Image type conversion" featureDescription="Easily transform images between popular formats like JPEG, PNG, GIF, or others." featureIcon="/img-type-conversion.svg"/>
          <Features className="lg:transform lg:translate-y-20" featureHeading="AI content detection" featureDescription="Filter out potentially objectionable or unsafe images using AI." featureIcon="/ai-content.svg"/>
        </div>
    </div>
  );
};

export default Features;

{/*      <div className="flex items-center flex-wrap justify-center gap-10 mt-12 w-full">
        {features.map((feature, i) => (
          <div className="w-96 h-40 p-3 pb-5" key={i}>
            <div className="flex items-center gap-3">
              <img src={`/${feature.icon}`} />
              <h2 className="font-gradient text-xl font-semibold my-2">
                {feature?.heading}
              </h2>
             
            </div>
            <p>{feature?.description}</p>
          </div>
        ))}
      </div>*/}
