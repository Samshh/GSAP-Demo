import { gsap } from "gsap"; // required import to use gsap
import Button from "@/components/ui/button";
import { useRef, useState } from "react";

export default function GsapTo() {
  const boxRef = useRef(null);
  const [ isAnimating, setIsAnimating ] = useState(false);
  const animate = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    gsap.to(boxRef.current, { // animate the boxRef
      scale: 1.5, // scale the boxRef to 1.5
      rotate: 180, // rotate the boxRef to 180 degrees
      duration: 1, // duration of the animation
      onComplete: () => { // callback function when the animation is complete
        gsap.to(boxRef.current, {
          scale: 1,
          rotate: 360,
          duration: 1,
          onComplete: () => {
            gsap.set(boxRef.current, { rotate: 0 }); // set the boxRef to its original state
            setIsAnimating(false);
          },
        });
      },
    });
  };

  return (
    <div className="h-full min-h-screen w-full grid grid-cols-2 items-center overflow-hidden p-[1rem] gap-[1rem]">
      <div className="w-full flex flex-col justify-center gap-[1rem] items-center">
        <h1>gsap.to</h1>
        <Button disabled={isAnimating} onClick={animate}>Click me to animate</Button>
      </div>
      <div className="w-full flex justify-center items-center">
        <div
          ref={boxRef}
          className="w-[350px] h-[350px] bg-primary flex justify-center items-center text-center text-accent"
        >
          <h1>boxRef</h1>
        </div>
      </div>
    </div>
  );
}
