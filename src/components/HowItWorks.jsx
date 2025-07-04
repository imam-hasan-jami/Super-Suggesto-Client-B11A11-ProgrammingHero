import React from "react";
import {
  FaQuestionCircle,
  FaLightbulb,
  FaUsers,
  FaThumbsUp,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaQuestionCircle className="text-4xl text-red-600" />,
      title: "Post Your Query",
      description:
        "Share details about the product you're looking for alternatives to, including your specific needs and preferences.",
    },
    {
      icon: <FaUsers className="text-4xl text-red-600" />,
      title: "Community Responds",
      description:
        "Our helpful community members review your query and share their experiences with similar products.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-red-600" />,
      title: "Get Recommendations",
      description:
        "Receive personalized product suggestions with detailed explanations about why they're recommended.",
    },
    {
      icon: <FaThumbsUp className="text-4xl text-red-600" />,
      title: "Make Informed Decisions",
      description:
        "Compare recommendations and choose the best product alternative that fits your needs and budget.",
    },
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          How Suggesto Works
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get personalized product recommendations from our community in just a
          few simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center group">
            <div
              className={`bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow border-4 border-red-600`}
            >
              {step.icon}
            </div>
            <div className="relative">
              <div
                className={`absolute -top-2 -left-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold`}
              >
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 pl-6">
                {step.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
