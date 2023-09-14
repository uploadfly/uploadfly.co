/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line react/no-unescaped-entities

interface FeatureItemsProps {
  className?: string;
  children: React.ReactNode;
}

const Features = () => {
  function FeatureItem({ className, children }: FeatureItemsProps) {
    return (
      <div
        className={`feature w-full md:w-full mx-auto  md:grid grid-cols-3 p-5 my-28 ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div className="flex items-center flex-col justify-center">
      <h1 className="shiny-text text-center text-3xl my-10 font-bold px-5 ">{`Bring your files, we'll handle the rest`}</h1>
      <div className="features-container w-full md:w-8/12 mx-auto">
        <FeatureItem>
          <div className="feature-icon col-span-1 flex items-center justify-center md:block">
            <img
              src="/config-icon.svg"
              alt={"Zero config image"}
              className=""
            />
          </div>

          <div className="feature-content py-1 mt-4 col-span-2">
            <h2 className="feature-heading font-bold text-3xl md:text-4xl capitalize my-5">
              Zero configuration
            </h2>
            <p className="feature-description text-[20px] my-5">
              With just your file and your API key, we empower developers to
              effortlessly streamline their workflow. Say goodbye to the
              intricacies of complex configurations, the headache of managing
              multiple storage buckets, and the frustration of unnecessary
              complications
            </p>
          </div>
        </FeatureItem>

        <FeatureItem className="gap-x-72">
          <div className="feature-icon md:order-2 md:col-span-1 p-0 m-0 flex items-center justify-center md:block md:my-0 my-5">
            <img
              src="/ai-content.svg"
              alt={"Ai detection image"}
              className=""
            />
          </div>

          <div className="feature-content py-1 mt-4 md:order-1 md:col-span-2 ">
            <h2 className="feature-heading font-bold text-3xl md:text-4xl capitalize my-5">
              AI content detection
            </h2>
            <p className="feature-description text-[20px] my-5">
              Secure and streamline your content with Uploadfly's AI-powered
              image filtering. Our robust system is designed to proactively
              identify and remove potentially objectionable or unsafe images,
              ensuring a clean and welcoming environment for your content.
            </p>
          </div>
        </FeatureItem>

        <FeatureItem className="block md:hidden">
          <div className="feature-icons md:col-span-1 flex items-center justify-center md:block">
            <img
              src="/image-optimization.svg"
              alt={"Image optimization"}
              className=""
            />
          </div>

          <div className="feature-content py-1 mt-4 md:order-1 md:col-span-2 ">
            <h2 className="feature-heading font-bold text-3xl md:text-4xl capitalize my-5">
              Image optimization
            </h2>
            <p className="feature-description text-[20px] my-5">
              Enhance user satisfaction with lightning-fast loading times. Our
              cutting-edge technology can drastically reduce image sizes by up
              to 80%, leading to quicker page load speeds and improved user
              experience. Say goodbye to sluggish loading times and hello to a
              responsive and engaging website that keeps your audience coming
              back for more
            </p>
          </div>
        </FeatureItem>

        <FeatureItem className="hidden md:grid w-full">
          <div className="feature-icons md:col-span-1 flex items-center justify-center md:block">
            <img
              src="/image-optimization.svg"
              alt={"Image optimization"}
              className=""
            />
          </div>

          <div className="feature-content py-1 mt-4 md:col-span-2 ">
            <h2 className="feature-heading font-bold text-3xl md:text-4xl capitalize my-5">
              Image optimization
            </h2>
            <p className="feature-description text-[20px] my-5">
              Enhance user satisfaction with lightning-fast loading times. Our
              cutting-edge technology can drastically reduce image sizes by up
              to 80%, leading to quicker page load speeds and improved user
              experience. Say goodbye to sluggish loading times and hello to a
              responsive and engaging website that keeps your audience coming
              back for more
            </p>
          </div>
        </FeatureItem>

        <FeatureItem className="hidden md:grid gap-x-40">
          <div className="feature-content py-1 mt-4 col-span-2">
            <h2 className="feature-heading font-bold text-3xl md:text-4xl capitalize my-5">
              Image type conversion
            </h2>
            <p className="feature-description text-[20px] my-5">
              Empower your content with flexibility and adaptability. With our
              user-friendly platform, you can seamlessly convert images between
              a variety of popular formats, including JPEG, PNG, GIF, and many
              others. Transform your visuals effortlessly, ensuring they're
              perfectly suited for your needs and enhancing the versatility of
              your content.
            </p>
          </div>

          <div className="feature-icon col-span-1 p-0 m-0 flex items-center justify-center md:block">
            <img
              src="/img-type-conversion.svg"
              alt={"Image type conversion"}
              className=""
            />
          </div>
        </FeatureItem>

        <FeatureItem className="block md:hidden">
          <div className="feature-icon col-span-1 p-0 m-0 flex items-center justify-center md:block">
            <img
              src="/img-type-conversion.svg"
              alt={"Image type conversion"}
              className=""
            />
          </div>

          <div className="feature-content py-1 mt-4 col-span-2">
            <h2 className="feature-heading font-bold text-3xl md:text-4xl capitalize my-5">
              Image type conversion
            </h2>
            <p className="feature-description text-[20px] my-5">
              Empower your content with flexibility and adaptability. With our
              user-friendly platform, you can seamlessly convert images between
              a variety of popular formats, including JPEG, PNG, GIF, and many
              others. Transform your visuals effortlessly, ensuring they're
              perfectly suited for your needs and enhancing the versatility of
              your content.
            </p>
          </div>
        </FeatureItem>

        <FeatureItem className="hidden md:grid">
          <div className="feature-icon col-span-1 flex items-center justify-center md:block">
            <img src="/filtering.svg" alt={"Image optimization"} className="" />
          </div>

          <div className="feature-content py-1 mt-4 col-span-2">
            <h2 className="feature-heading font-bold text-3xl md:text-4xl capitalize my-5">
              Size and type filtering
            </h2>
            <p className="feature-description text-[20px] my-5">
              Take control of your image selection with precision. Customize
              your filtering criteria to include or exclude images based on
              their size, dimensions, or file formats. Whether you're curating
              content or optimizing file management, our platform puts the power
              in your hands to achieve the exact results you desire
            </p>
          </div>
        </FeatureItem>

        <FeatureItem className="block md:hidden">
          <div className="feature-icon col-span-1 flex items-center justify-center md:block">
            <img src="/filtering.svg" alt={"Image optimization"} className="" />
          </div>

          <div className="feature-content py-1 mt-4 col-span-2">
            <h2 className="feature-heading font-bold text-3xl md:text-4xl capitalize my-5">
              Size and type filtering
            </h2>
            <p className="feature-description text-[20px] my-5">
              Take control of your image selection with precision. Customize
              your filtering criteria to include or exclude images based on
              their size, dimensions, or file formats. Whether you're curating
              content or optimizing file management, our platform puts the power
              in your hands to achieve the exact results you desire
            </p>
          </div>
        </FeatureItem>

        <FeatureItem className="hidden md:grid gap-x-40">
          <div className="feature-content py-1 mt-4 col-span-2">
            <h2 className="feature-heading font-bold text-3xl md:text-4xl capitalize my-5">
              Content info
            </h2>
            <p className="feature-description text-[20px] my-5">
              Unlock the hidden potential of your media files. Our advanced
              technology allows you to extract valuable insights from your
              assets, including MIME type, dimensions, file type, and a wealth
              of other essential information. With these insights at your
              fingertips, you can make informed decisions and optimize your
              content
            </p>
          </div>

          <div className="feature-icon col-span-1 p-0 m-0 flex items-center justify-center md:block">
            <img
              src="/img-info.svg"
              alt={"Image type conversion"}
              className=""
            />
          </div>
        </FeatureItem>

        <FeatureItem className="block md:hidden gap-x-40">
          <div className="feature-icon col-span-1 p-0 m-0 flex items-center justify-center md:block">
            <img
              src="/img-info.svg"
              alt={"Image type conversion"}
              className=""
            />
          </div>

          <div className="feature-content py-1 mt-4 col-span-2">
            <h2 className="feature-heading font-bold text-3xl md:text-4xl capitalize my-5">
              Content info
            </h2>
            <p className="feature-description text-[20px] my-5">
              Unlock the hidden potential of your media files. Our advanced
              technology allows you to extract valuable insights from your
              assets, including MIME type, dimensions, file type, and a wealth
              of other essential information. With these insights at your
              fingertips, you can make informed decisions and optimize your
              content
            </p>
          </div>
        </FeatureItem>
      </div>
    </div>
  );
};

export default Features;