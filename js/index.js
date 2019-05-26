import { TweenMax, Expo, TimelineMax } from "gsap/TweenMax";
const tl = new TimelineMax();
const overlay = document.querySelector(".overlay");
TweenMax.to(overlay, 2, { delay: 3.2, y: "-100%", ease: Expo.easeInOut });
tl.staggerFromTo(
  ".letter",
  1,
  { opacity: 0, y: -100 },
  { opacity: 1, y: 0 },
  0.3
).fromTo(".h3", 1, { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
