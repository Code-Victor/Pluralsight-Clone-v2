import React from "react";

const cards = [
  {
    name: "JavaScript",
    courses: 11,
    img_url: "./images/asset 19.png",
  },
  {
    name: "Angular",
    courses: 14,
    img_url: "./images/asset 20.png",
  },
  {
    name: "Core python",
    courses: 12,
    img_url: "./images/asset 21.png",
  },
  {
    name: "C#",
    courses: 19,
    img_url: "./images/asset 22.png",
  },
];

function TechnologySection() {
  return (
    <section className="Technology">
      <div className="container">
        <div className="card-container">
          {cards.map((card, index) => {
            return <Card {...card} key={index} />;
          })}
        </div>
        <div className="text-section">
          <h3 className="pink-text">trending technologies</h3>
          <h1>Popular topics<br/> to learn now</h1>
          <p>
            Not sure what technologies to focus on? The Technology Index ranks
            850+ technologies by their relative popularity. See what’s topping
            the charts and get recommended courses to skill up.{" "}
          </p>
          <div className="text-btn">
            <h1>view the index</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ name, courses, img_url }) {
  return (
    <div className="card">
      <img src={img_url} alt="name" className="badge-image" />
      <h3 className="pink-text">Path</h3>
      <h1>{name}</h1>
      <p>
        {courses} <span className="greyed">Courses</span>
      </p>
      <div className="text-btn">
        <h1>Take a look</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
export default TechnologySection;
