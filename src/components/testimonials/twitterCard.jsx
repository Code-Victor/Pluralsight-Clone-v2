import React, { useEffect } from "react";

function TwitterCard({ avatar, displayName, username, tweet, retweetCount }) {
  const paragraphRef=React.useRef(null);
  const userTag=/@\w+/g;
  const hashtag=/#\w+/g;
  const url=/https:\/\/[A-Za-z0-9./]+/g;
  const refinedTweet=tweet.replace(url,value=>`<a href='${value}' class='pink-text' target='_blank'>${value}</a>`).replace(userTag,"<a href='https://twitter.com/$&' class='pink-text' target='_blank'>$&</a>").replace(hashtag,value=>`<a href='https://twitter.com/hashtag/${value.substring(1,)}?src' class='pink-text' target='_blank'>${value}</a>`)
  useEffect(
    () => {
      
      paragraphRef.current.innerHTML=refinedTweet;
    }
  )
  return (
    <div className="twitter-card">
      <a href="https://twitter.com/download"><img src="./images/asset 58.png" alt="" className="twitter-logo" /></a>
      <div className="twitter-card__header">
        <img src={avatar} alt={displayName} className="avatar" />
        <div className="names">
          <a className="display-name" href={`https://twitter.com/${username}`} target="_blank">{displayName}</a>
          <a className="username" href={`https://twitter.com/${username}`} target="_blank">{'@'+username}</a>
        </div>
      </div>
      <p ref={paragraphRef}></p>
      <div className="twitter-card__bottom">
        <div className="twitter-card-icon"><img src="./images/asset 59.png" alt="" /></div>
        <div className="retweet twitter-card-icon">
          <img src="./images/asset 60.png" alt="" />
          <p >{retweetCount}</p>
        </div>
        <div className="twitter-card-icon"><img src="./images/asset 61.png" alt="" /></div>
      </div>
    </div>
  );
}

export default TwitterCard;
