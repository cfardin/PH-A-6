import { FaCheck } from "react-icons/fa6";

const Plans = () => {
  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for getting started",
      price: "$0",
      cycle: "Month",
      button: "Get Started Free",
      popular: false,
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
    },
    {
      name: "Pro",
      tagline: "Best for professionals",
      price: "$29",
      cycle: "Month",
      button: "Start Pro Trial",
      popular: true,
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
    },
    {
      name: "Enterprise",
      tagline: "For teams and businesses",
      price: "$99",
      cycle: "Month",
      button: "Contact Sales",
      popular: false,
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
    },
  ];

  return (
    <div className="w-full md:w-10/12 m-auto mb-30">
        <div className="space-y-2.5 mb-10">
            <h3 className="text-5xl font-extrabold text-center">Simple, Transparent Pricing</h3>
            <p className="text-[#627382] text-center">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div key={i} className={`relative rounded-2xl p-8 flex flex-col gap-6
                        ${
                          plan.popular
                            ? "bg-linear-to-b from-purple-600 to-purple-800 text-white"
                            : "bg-white text-gray-800 shadow-sm"
                        }`}
          >


            {
            plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-300 text-yellow-800 text-xs font-semibold px-4 py-1 rounded-full">
                Most Popular
              </div>)
              
            }
            <div>
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className={plan.popular ? "text-purple-200" : "text-gray-400"}>
                {plan.tagline}
              </p>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold">{plan.price}</span>
              <span
                className={`mb-1 ${plan.popular ? "text-purple-200" : "text-gray-400"}`}
              >
                /{plan.cycle}
              </span>
            </div>

            {/* features */}
            <ul className="flex flex-col gap-3">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2">
                  <FaCheck className="text-green-400 shrink-0" />
                  <span
                    className={plan.popular ? "text-white" : "text-gray-600"}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={` w-full py-3 rounded-full font-medium mt-auto
                            ${
                              plan.popular
                                ? "bg-white text-purple-700"
                                : "bg-purple-600 text-white"
                            }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
