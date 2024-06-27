gsap.registerPlugin(ScrollTrigger);

gsap.from("#page1 .letter", {
  y: -100,
  opacity: 1,
  duration: 3,
  stagger: 0.2,
  color: "#f2c77c",
  ease: "bounce.out",
  scrollTrigger: {
    trigger: "#page1",
    start: "top 0%",
    end: "top -30%",
    toggleActions: "play none none reverse",
    scrub: 3,
    pin: true,
  },
});
gsap.to("#page2", {
  backgroundColor: "black",
  duration: 1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#page2",
    scroll: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 5,
  },
});
gsap.to("#page2 h1", {
  xPercent: -100,
  duration: 15,
  color: "#f2c77c",
  ease: "power1.inOut",
  scrollTrigger: {
    backgroundColor: "black",
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "top -150%",
    pin: true,
    scrub: 5,
    toggleActions: "play none none reverse",
  },
});
gsap.utils.toArray("#page3 .sometext > div").forEach((div, i) => {
  gsap.from(div, {
    yPercent: -40,
    opacity: 0,
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: div,
      start: "top 80%",
      end: "top 60%",
      scrub: 1,
    },
  });
});
gsap.from("#page4 img", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  ease: "power1.inOut",
  scrollTrigger: {
    backgroundColor: "black",
    trigger: "#page4",
    scroller: "body",
    start: "top 50%",
    end: "top 60%",
    scrub: 2,
  },
});