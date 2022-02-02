import React from "react";
import DiscoverCard from "./DiscoverCard";
import Vmware from "./Vmware";

const discover = [
  {
    img_url: "./images/asset 28.png",
    headline:
      "LEARN HOW TO DE-FRICTION YOUR SOFTWARE DEVELOPMENT WORKFLOW WITH FLOW",
    paragraph:
      "Take a guided tour through Pluralsight Flow to see how visibility can take your team to the next level",
    alt: "Flow Demo",
  },
  {
    img_url: "./images/asset 29.png",
    headline: "COMPARE ONLINE COURSE PROVIDERS",
    paragraph:
      "Unbiased reviews to help you make the right decision for your team",
    alt: "Compare online course providers",
  },
  {
    img_url: "./images/asset 30.png",
    headline: "WHICH TECH SKILL DEVELOPMENT PRODUCT IS RIGHT FOR YOU?",
    paragraph:
      "Reduce decision fatigue with helpful data based on your peers’ experiences",
    alt: "Which tech skill development product is right for you",
  },
  {
    img_url: "./images/asset 31.jpeg",
    headline: "WHAT IS PLURALSIGHT SKILLS?",
    paragraph:
      "Discover the fastest, most effective path to developing technology skills",
    alt: "Which tech skill development product is right for you",
  },
];
function DiscoverSection() {
  return (
    <>
      <section className="discovery ">
        <div className="container">
            <h3 className="pink-text">see What's new</h3>
            <h1>Our latest Features</h1>
            <div className="discover-cards">
              {discover.map((discovery, index) => {
                return <DiscoverCard key={index} {...discovery} />;
              })}
            </div>
        </div>
      <Vmware />
      </section>
    </>
  );
}

export default DiscoverSection;
