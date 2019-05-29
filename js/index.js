import { TweenMax, Expo, TimelineMax, Power2 } from "gsap/TweenMax";
import ScrollMagic from "scrollmagic";
import charming from "./charming";
const word1 = document.querySelector(".h2__text");
const word2 = document.querySelector(".h4__text");
const word3 = document.querySelector(".h5__text");
const word4 = document.querySelector(".text__p");
charming(word1, {
  tagName: "span",
  classPrefix: false
});

const tl = new TimelineMax({
  delay: 1
});
tl.from(".chimney", 1.2, {
  x: -600,
  autoAlpha: 0,
  ease: Power2.easeOut
})
  .from(".leftwall", 0.6, {
    y: -600,
    x: 200,
    autoAlpha: 0,
    ease: Power2.easeOut
  })
  .from(".rightwall", 0.6, {
    y: -600,
    x: -200,
    autoAlpha: 0,
    ease: Power2.easeOut
  })
  .from(".leftroof", 0.6, {
    y: -600,
    autoAlpha: 0,
    ease: Power2.easeOut
  })
  .from(".rightroof", 0.6, {
    y: -600,
    autoAlpha: 0,
    ease: Power2.easeOut
  })
  .from(".gaube", 1, {
    y: -600,
    autoAlpha: 0,
    ease: Power2.easeOut
  })
  .staggerFromTo(
    ".h2__text span",
    0.3,
    { opacity: 0, y: 400 },
    { opacity: 1, y: 0 },
    0.1
  )
  .fromTo(word2, 0.7, { autoAlpha: 0, x: -200 }, { autoAlpha: 1, x: 0 })
  .fromTo(word3, 0.7, { autoAlpha: 0, x: 200 }, { autoAlpha: 1, x: 0 })
  .fromTo(word4, 1, { autoAlpha: 0, y: 500 }, { autoAlpha: 1, y: 0 });
