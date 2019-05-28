import {
  TweenMax,
  Expo,
  TimelineMax,
  Power2
} from "gsap/TweenMax";
import ScrollMagic from "scrollmagic";
const tl = new TimelineMax({
  delay: 1
});
tl.from(".chimney", 1.2, {
    x: -600,
    autoAlpha: 0,
    ease: Power2.easeOut
  })
  .from(".leftwall", .6, {
    y: -600,
    x: 200,
    autoAlpha: 0,
    ease: Power2.easeOut
  })
  .from(".rightwall", .6, {
    y: -600,
    x: -200,
    autoAlpha: 0,
    ease: Power2.easeOut
  })
  .from(".leftroof", .6, {
    y: -600,
    autoAlpha: 0,
    ease: Power2.easeOut
  })
  .from(".rightroof", .6, {
    y: -600,
    autoAlpha: 0,
    ease: Power2.easeOut
  })
  .from(".gaube", 1, {
    y: -600,
    autoAlpha: 0,
    ease: Power2.easeOut
  });