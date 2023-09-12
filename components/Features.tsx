import { BsImages } from "react-icons/bs";
import { FaCreativeCommonsZero } from "react-icons/fa";
import { TbInfoSquareFilled } from "react-icons/tb";
import { PiSwapBold } from "react-icons/pi";
import { GiEyeTarget } from "react-icons/gi";
import { HiFilter } from "react-icons/hi";
import Image from "next/image";


const Features = () => {

function FeatureItem({ className, featureHeading, featureDescription, featureIcon }) {
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
          <FeatureItem className="transform lg:translate-y-16" featureHeading="Image optimization" featureDescription="Improve user experience by reducing image size by up to 80%." featureIcon="/image-optimization.svg"/>
          <FeatureItem className="" featureHeading="Zero config" featureDescription="Just your file and your API key. No configs, no buckets, no bs." featureIcon="/config-icon.svg"/>
          <FeatureItem className="lg:transform lg:translate-y-16" featureHeading="Size and type filtering" featureDescription="Specify filters to include or exclude images based on their size, dimensions or file formats." featureIcon="/filtering.svg"/>
          <FeatureItem className="lg:transform lg:translate-y-20" featureHeading="Content info" featureDescription="Extract valuable insights from media files such as MIME type, demensions, file type and more." featureIcon="/img-info.svg"/>
          <FeatureItem className="" featureHeading="Image type conversion" featureDescription="Easily transform images between popular formats like JPEG, PNG, GIF, or others." featureIcon="/img-type-conversion.svg"/>
          <FeatureItem className="lg:transform lg:translate-y-20" featureHeading="AI content detection" featureDescription="Filter out potentially objectionable or unsafe images using AI." featureIcon="/ai-content.svg"/>
        </div>
    </div>
  );
};

export default Features;
