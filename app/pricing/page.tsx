import Navbar from "@/components/Navbar";
import PricingButton from "@/components/PricingButton";
import { usePlausible } from "next-plausible";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const metadata = {
  title: "Pricing • UploadFly",
};

function Pricing() {
  const plausible = usePlausible();
  const tiers = [
    {
      name: "Basic",
      price: 7,
      description: "For small apps and hobby projects.",
      features: [
        "2 GB of storage",
        "2 projects",
        "15,000 monthly uploads",
        "50 MB max upload size",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: 15,
      description: "For startups building production apps.",
      features: [
        "100 GB of storage",
        "10 projects",
        "100,000 monthly uploads",
        "1 GB max upload size",
        "Email support",
      ],
      isHighlighted: true,
    },

    {
      name: "Advanced",
      price: 120,
      description: "For teams building at scale.",
      features: [
        "400 GB of storage",
        "100 projects",
        "1,000,000 monthly uploads",
        "150 GB max upload size",
        "Priority Email support",
      ],
    },
    {
      name: "Free",
      price: 0,
      description: "For developers building open source projects.",
      features: [
        "2GB storage",
        "2 projects",
        "1,000 monthly uploads",
        "25MB max upload size",
        "Email and private Slack support",
      ],
    },
    {
      name: "Enterprise",
      // price: 0,
      description: "Fully tailored for your business.",
      features: [
        "Unlimited storage",
        "Unlimited projects",
        "Unlimited monthly uploads",
        "Unlimited upload size",
        "Dedicated support engineer",
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="mt-10">
        <h1 className="text-5xl text-center font-bold">Pricing</h1>
        <p className="text-center text-gray-400 mt-5 mb-10 text-lg px-10">
          Choose what works for you. Get on the cloud.
        </p>
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mb-5 px-5 w-full">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`border-2 relative flex flex-col rounded-3xl p-5 ${
                  tier.isHighlighted ? "border-accent" : "border-white/20"
                } ${tier.name === "Free" ? "lg:col-span-2" : ""}
                ${
                  tier.name === "Enterprise"
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }
                `}
              >
                {tier.isHighlighted && (
                  <div
                    className="absolute -top-3 bg-accent text-white rounded-full px-10
                    py-1 text-sm font-semibold -translate-x-1/2 left-1/2 transform"
                  >
                    Popular
                  </div>
                )}
                <h2 className="text-xl font-bold">{tier.name}</h2>
                {tier.name !== "Enterprise" && (
                  <p className="text-sm text-gray-400 mt-2">
                    {tier.description}
                  </p>
                )}
                {tier.name !== "Enterprise" && (
                  <h1 className="mt-3 font-semibold text-gray-400">
                    <span className="font-normal text-4xl text-white">
                      ${tier.price}
                    </span>
                    /month/project
                  </h1>
                )}
                {tier.name === "Enterprise" && (
                  <p className="mt-4 text-lg text-gray-400">
                    Contact us for a custom quote that matches your business
                    needs.
                  </p>
                )}
                <div className="mt-2">
                  {tier.features.map((feature) => (
                    <div key={feature} className="mt-5">
                      <span className="text-sm text-gray-400 flex gap-2 items-center">
                        <BsFillCheckCircleFill className="text-accent/70" />
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <PricingButton
                  tier={tier.name}
                  isHighlighted={tier.isHighlighted}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
