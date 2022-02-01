import React from "react";

function MainCard() {
  return (
    <div className="main-card">
      <div className="feature-card">
        <img src="./images/asset 23.png" alt="Pluralsight Skills Logo" />
        <h1>Create better cloud outcomes with hands-on experience</h1>
        <p>
          Your teams need the right skills and a place to practice to ensure
          they’re ready to deliver on your cloud objectives. Labs enable
          learners to get hands-on practice in a provisioned cloud environment
          in AWS, Azure and Google Cloud (Google Cloud powered by Quiklabs).
        </p>
        <div className="text-btn">
          <h1>LearnMore</h1>
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
      <div className="main-card-img">
        <img src="./images/asset 24.png" alt="Cloud Labs interface" />
      </div>
    </div>
  );
}

export default MainCard;
