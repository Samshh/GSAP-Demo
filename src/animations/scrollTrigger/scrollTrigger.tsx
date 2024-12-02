import { gsap } from "gsap"; // required import to use GSAP
import { useGSAP } from "@gsap/react"; // custom GSAP hook for react (use this instead of useEffect)
import { ScrollTrigger } from "gsap/ScrollTrigger"; // to use ScrollTrigger
import { useRef } from "react"; // required import for refs

gsap.registerPlugin(ScrollTrigger); // register ScrollTrigger plugin

export default function ScrollTriggerComponent() {
  const circleRef = useRef(null); // create a ref for the circle
  const triggerRef = useRef(null); // create a ref for the trigger

  useGSAP(() => {
    gsap.to(circleRef.current, {
      // define the target element
      scale: 1.5,
      opacity: 0.25,
      duration: 2,
      scrollTrigger: {
        trigger: triggerRef.current, // trigger the animation when the page is in view
        start: "top center", // start the animation when the top of the element is in the center of the viewport
        end: "bottom center", // end the animation when the bottom of the element is in the center of the viewport
        toggleActions: "play none none reset", // play the animation when the element is in view, reset it when it leaves the view
        scrub: false, // when true the animation will be based on scroll and you can remove the duration and toggleActions
        markers: false, // true to show markers for debugging
      },
      onComplete: () => { // return the element to its original state
        gsap.to(circleRef.current, {
          duration: 2,
          opacity: 1,
          scale: 1,
        });
      },
    });
  });
  return (
    <div
      className="h-full min-h-screen w-full grid grid-cols-2 items-center overflow-hidden p-[1rem] gap-[1rem]"
      ref={triggerRef}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <h1>ScrollTrigger</h1>
        <h2>Trigger animation on viewport</h2>
      </div>
      <div className="w-full flex justify-center items-center">
        <div
          ref={circleRef}
          className="w-[350px] h-[350px] rounded-full bg-primary flex justify-center items-center text-center text-accent"
        >
          <h1>
            circleRef
          </h1>
        </div>
      </div>
    </div>
  );
}
