import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const vidRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        toggleActions: "restart reverse restart reverse",
        start: "25% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      ease: "power1",
    });

    gsap.to(".g_fadeIn", {
      scrollTrigger: {
        trigger: ".g_fadeIn",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex-center w-full my-20" id="chip">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip. <br />A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                id="video"
                className="pointer-event-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={vidRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-bold text-center mt-3">
            Honkai: starts Rail
          </p>
          <div className="hiw-text-container mt-16">
            <div className="flex-1 flex justify-center flex-col">
              <p className="hiw-text mb-10 g_fadeIn">
                A17 Pro is an entirely new iPhone chip that deliver{" "}
                <span className="text-white">
                  Best graphic performance by far
                </span>
                .{" "}
              </p>
              <p className="hiw-text g_fadeIn">
                Mobile{" "}
                <span className="text-white">
                  games will look and feel so immersive{" "}
                </span>
                , with incredibly datailed environment characters. And with
                industry-lading speed and efficiency, a17 Pro takes fast and run
                with it{" "}
              </p>
            </div>
            <div className="flex-1 flex justify-center flex-col g_fadeIn">
              <p className="hiw-text">New</p>
              <p className="hiw-bigtext">Pro-class GPU</p>
              <p className="hiw-text">with 6 cores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
