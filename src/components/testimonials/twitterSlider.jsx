import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import uuidv4 from "uuid/v4";
import TwitterCard from "./twitterCard";

const tweets = [
  {
    avatar: "./images/asset 35.jpeg",
    displayName: "skyler",
    username: "@SkylerDevops",
    tweet:
      'just finished "Automation with windows #Powershell Scripts"on @pluralsight from @JeffHicks. It wasy really well explained, learned a few things, definitely would recommend if you need to do some PS 😀',
    retweetCount: 1,
  },
  {
    avatar: "./images/asset 36.jpeg",
    displayName: "Javier Montero",
    username: "@DataSlugger",
    tweet:
      "I love the schedule reminders feature that @pluralsight has added (well not sure when, but today I saw that) you make more simple my life, good job guys. #learning https://t.co/OEEjxVQJbm",
    retweetCount: 3,
  },
  {
    avatar: "./images/asset 37.jpeg",
    displayName: "Kayode Omotoye",
    username: "@kontrepid",
    tweet:
      "One reason I love @pluralsight training is how they cureate similar courses on a subject into a learning path. The diversity of content delivery & repetition of salient points by the SMEs helps to make the learning process efficient and memorable. Kudos to the team",
    retweetCount: 2,
  },
  {
    avatar: "./images/asset 38.jpeg",
    displayName: "Martin Therkelsen",
    username: "@Mracket",
    tweet:
      "Yesterday I passed the AZ-104 exam. @pluralsight courses are great to help prepare for these exams. #citrixctp",
    retweetCount: 1,
  },
  {
    avatar: "./images/asset 39.jpeg",
    displayName: "William Masci",
    username: "@billver3",
    tweet:
      "just passed #Cisco DEVASC 200-901 exam! Tough exam,but it was aa great experience. I'm excited to be part of the #DevNet Class of 2020! Also big thanks to @nickrusso42518 for his amazig study plan and @pluralsight course. I highly recommend it if you're studying for DEVASC",
    retweetCount: 5,
  },
  {
    avatar: "./images/asset 40.jpeg",
    displayName: "judy",
    username: "@judy_seyram",
    tweet:
      "The best thing that happened to me in 2020 was #GADS2020 which introduced me to @pluralsight . My interest in IT and programming peaked when i joined the program and now i believe this is the career path I want to take. #womenintech #WomenWhoCode #Andela #Pluralsight #GADS https://t.co/oYchlj6V5w",
    retweetCount: 7,
  },
];
function TwitterSlider() {
  const sliderSettings = {
    
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    
  };
  const [sliderRef, setSliderRef] = useState(null)
  return (
    <div className="container">
      <div className="slider-container">
        
        
        <Slider    ref={setSliderRef} {...sliderSettings}>
          {tweets.map((tweet) => {
            return <TwitterCard {...tweet} key={uuidv4()} />;
          })}
        </Slider>
        
      </div>
    </div>
  );
}

export default TwitterSlider;
