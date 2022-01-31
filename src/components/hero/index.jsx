import React, { useEffect } from "react";

const items = ["teams", "products", "workflows", "skills", "processes"];
let i = 0;
function Hero() {
  const [name, setName] = React.useState(items[i]);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(`timer`);
      if (i < items.length - 1) {
        i++;
        setName(items[i]);
      } else {
        i = 0;
        setName(items[i]);
      }
    }, 2800);
    return () => clearInterval(timer);
  }, [name]);
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="">
          Build better{" "}
          <div className="text-fader">
            {items.map((item, index) => {
              return <h1 className={index === i ? "fadeupin" : ""}>{item}</h1>;
            })}
          </div>
        </h1>
        <p>
          Face the future with confidence-and with the skills and tools to
          thrive.
        </p>
        <div className="btn-group">
          <div className="cta-btn lg decorated">view Plans</div>
          <div className="cta-btn lg">try for free</div>
        </div>
        <div className="organizations">
          <p>
            HELPING THOUSANDS OF ORGANIZATIONS BUILD TECH SKILLS AT SCALE ADP
          </p>
          <div className="icons">
            <div>
              <img src="./images/asset 14.png" alt="adp" />
            </div>
            <div>
              <img src="./images/asset 15.png" alt="adobe" />
            </div>
            <div>
              <img src="./images/asset 16.png" alt="vmware" />
            </div>
            <div>
              <img src="./images/asset 17.png" alt="fujistu" />
            </div>
            <div>
              <img src="./images/asset 18.png" alt="nasdaq" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function animateUp(name) {
  return (
    <h1 className={`fadeupin ${name}`} data-name={name}>
      {name}
    </h1>
  );
}
export default Hero;
