import SecondaryCard from "./SecondaryCard";
import MainCard from "./MainCard";

const cardDetails = [
  {
    img_url: "./images/asset 25.png",
    headline: "Empower your teams to grow their skills and their careers",
    paragraph:
      "Prepare your team for certification exams with our expert authored content and practice exams.",
    alt: "Skills Certification prep",
  },
  {
    img_url: "./images/asset 26.png",
    headline:
      "Make lasting workflow improvements with insights from your Jira data",

    paragraph:
      "Go beyond Jira data and get visibility into what’s happening within your user stories, tasks and bugs. Flow’s delivery module helps you better understand how your team is working and can make lasting improvements to your workflow.",
    alt: "Delivery Module",
  },
  {
    img_url: "./images/asset 27.png",
    headline: "Utilize a space for unrestricted exploration",
    paragraph:
      "Sandboxes gives your team a safe environment to practice what they're learning from expert-authored courses.",
    alt: "Sandboxes",
  },
];

export default function FeatureSection() {
  return (
    <section className="Features">
      <div className="container">
        <h3 className="pink-text">see What's new</h3>
        <h1>Our latest Features</h1>
        <MainCard />
        <div className="S-card-container">
            {cardDetails.map((details, index) => {
              return <SecondaryCard key={index} {...details} />;
            })}
        </div>
      </div>
    </section>
  );
}
