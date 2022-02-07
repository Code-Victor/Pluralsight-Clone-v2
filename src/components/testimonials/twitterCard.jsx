import React from "react";

function TwitterCard({ avatar, displayName, username, tweet, retweetCount }) {
  return (
    <div className="twitter-card">
      <img src="./images/asset 58.png" alt="" className="twitter-logo" />
      <div className="twitter-card__header">
        <img src={avatar} alt={displayName} className="avatar" />
        <div className="names">
          <h3 className="display-name">{displayName}</h3>
          <h4 className="username">{username}</h4>
        </div>
      </div>
      <p>{tweet}</p>
      <div className="twitter-card__bottom">
        <div className="twitter-card-icon"><img src="/images/asset 59.png" alt="" /></div>
        <div className="retweet twitter-card-icon">
          <img src="/images/asset 60.png" alt="" />
          <p>{retweetCount}</p>
        </div>
        <div className="twitter-card-icon"><img src="/images/asset 61.png" alt="" /></div>
      </div>
    </div>
  );
}

export default TwitterCard;
