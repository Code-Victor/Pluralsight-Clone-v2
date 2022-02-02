import React from "react";

function DiscoverCard({ img_url, headline, paragraph, alt,key }) {
  return (
    <div className="discover-card" key={key}>
      <img src={img_url} alt={alt} />
      <h1>{headline}</h1>
      <p>{paragraph}</p>
    </div>
  );
}

export default DiscoverCard;
