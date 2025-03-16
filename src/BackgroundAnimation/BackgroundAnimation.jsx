import { useEffect } from "react";
import gsap from "gsap";
// import "./BackgroundAnimation.css"; // Add custom styles if needed

const BackgroundAnimation = () => {
  useEffect(() => {
    gsap.to("body", {
      backgroundColor: ["#ff7eb3", "#ff758c", "#ff8fa3", "#282c34"],
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="content">
      <h1>Welcome to My Animated Background</h1>
    </div>
  );
};

export default BackgroundAnimation;
