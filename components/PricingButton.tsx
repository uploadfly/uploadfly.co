"use client";

import { usePlausible } from "next-plausible";
import Link from "next/link";
function PricingButton({
  tier,
  isHighlighted,
}: {
  tier: string;
  isHighlighted?: boolean;
}) {
  const plausible = usePlausible();
  return (
    <Link
      href={
        tier === "Enterprise"
          ? "https://cal.com/akinkunmi/uploadfly-for-enterprise"
          : "https://beta.uploadfly.co/signup"
      }
      target="_blank"
      className={`mt-10 ${
        isHighlighted
          ? "bg-accent text-white border-2 border-accent hover:border-white/80"
          : "bg-white/90 border-2 border-transparent hover:border-accent text-accent"
      } py-3 px-5 rounded-full transition-colors font-semibold flex items-center justify-center`}
      onClick={() => plausible("Pricing Clicked", { props: tier })}
    >
      {tier === "Enterprise" ? "Contact Us" : "Get Started"}
    </Link>
  );
}

export default PricingButton;
