gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panelx");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".containerx",
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".containerx").offsetWidth
    }
});


let sections2 = gsap.utils.toArray(".panelx2");

gsap.to(sections2, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".containerx2",
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".containerx2").offsetWidth
    }
});

