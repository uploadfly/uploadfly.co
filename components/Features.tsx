import { BsImages } from "react-icons/bs";
import { FaCreativeCommonsZero } from "react-icons/fa";
import { TbInfoSquareFilled } from "react-icons/tb";
import { PiSwapBold } from "react-icons/pi";
import { GiEyeTarget } from "react-icons/gi";
import { HiFilter } from "react-icons/hi";

const Features = () => {
  const features = [
    {
      heading: "Zero config",
      description:
        "Just your file and your API key. No configs, no buckets, no bs.",
      icon: <FaCreativeCommonsZero />,
    },
    {
      heading: "Image optimization",
      description:
        "Improve user experience by reducing image size by up to 80%.",
      icon: <BsImages />,
    },
    {
      heading: "Size and type filtering",
      description:
        "Specify filters to include or exclude images based on their size, dimensions or file formats.",
      icon: <HiFilter />,
    },
    {
      heading: "Content info",
      description:
        "Extract valuable insights from media files such as MIME type, demensions, file type and more.",
      icon: <TbInfoSquareFilled />,
    },
    {
      heading: "Image type conversion",
      description:
        "Easily transform images between popular formats like JPEG, PNG, GIF, or others.",
      icon: <PiSwapBold />,
    },
    {
      heading: "AI content detection",
      description: "Filter out potentially objectionable or unsafe images.",
      icon: <GiEyeTarget />,
    },
  ];
  return (
    <div className="py-5">
      <h1 className="shiny-text text-center text-4xl mt-5">{`Bring your files, we'll handle the rest`}</h1>
      <div className="flex items-center flex-wrap justify-center gap-10 mt-12">
        {features.map((feature, i) => (
          <div className="w-96 h-40 p-3 pb-5" key={i}>
            <div className="flex items-center gap-3">
              <div className="text-2xl">{feature?.icon}</div>
              <h2 className="font-gradient text-xl font-semibold my-2">
                {feature?.heading}
              </h2>
            </div>
            <p>{feature?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
