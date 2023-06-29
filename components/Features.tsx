import React from "react";

const Features = () => {
  const features = [
    {
      heading: "Zero config",
      description:
        "Just your file and your API key. No configs, no buckets, no bs.",
      icon: "",
    },
    {
      heading: "Image optimization",
      description:
        "Improve user experience by reducing image size by up to 80%.",
      icon: "",
    },
    {
      heading: "Size and type filtering",
      description:
        "Specify filters to include or exclude images based on their size, dimensions or file formats.",
      icon: "",
    },
    {
      heading: "Content info",
      description:
        "Extra valuable insights from media files such as MIME type, demensions, file type and more.",
      icon: "",
    },
    {
      heading: "Image type conversion",
      description:
        "Easily transform images between popular formats like JPEG, PNG, GIF, or others.",
      icon: "",
    },
    {
      heading: "AI NSFW content detection",
      description: "Filter out potentially objectionable or unsafe images.",
      icon: "",
    },
  ];
  return (
    <div className="py-5">
      <h1 className="shiny-text text-center text-4xl mt-5">{`Bring your files, we'll handle the rest`}</h1>
      <div className="flex items-center flex-wrap justify-center gap-10 mt-20">
        {features.map((feature, i) => (
          <div
            className="w-96 h-40 border-[0.5px] border-gray-400 p-3 rounded-md hover:border-accent transition-colors cursor-pointer pb-5"
            key={i}
          >
            <div className="w-10 h-10 rounded-md bg-accent">
              {feature?.icon}
            </div>
            <h2 className="font-gradient text-xl font-semibold my-2">
              {feature?.heading}
            </h2>
            <p>{feature?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
