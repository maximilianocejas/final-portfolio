import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Novatrix } from "uvcanvas"

gsap.registerPlugin(ScrollTrigger);



export default function Proyects(){
    const containerRef = useRef();
    useEffect(() => {
      const tl = gsap.timeline();
  
      tl.to(".image-1", {
        clipPath: "inset(0 0 100% 0)",
        duration: 1,
      })
      .to(".opus-title",{
          translateY: "-100%",
          opacity: 0,
          duration: 1
        },"-=0.7")
      .to(".opus-activity",{
          translateY: "-100%",
          opacity: 0,
          duration: 1
        },"-=1")
      .to(".opus-description",{
          translateY: "-100%",
          opacity: 0,
          duration: 1
        },"-=1")
      tl.to(".canvas-container1", {
        clipPath: "inset(100% 0 0 0)",
        opacity: 0,
        duration: 1
      })
      .to(".tefiyoga-title",{
        translateY: "-100%",
        duration: 1,
      },"-=0.8")
      .to(".tefiyoga-activity",{
        translateY: "-100%",
        duration: 1,
      },"-=1")
      .to(".tefiyoga-description",{
        translateY: "-100%",
        duration: 1,
      },"-=1")
      .to(".timeline-proyect",{
        translateY: "50px",
        duration: 1,
      },"-=1")
      .to(".proyect-1",{
        translateY: "-200%",
        duration: 1,
      },"-=1")
      .to(".proyect-2",{
        translateY: "-100%",
        duration: 1,
      },"-=1")
      tl.to(".image-2", {
        clipPath: "inset(0 0 100% 0)",
        duration: 1,   
      })
      .to(".tefiyoga-title",{
        translateY: "-200%",
        duration: 1,
        opacity: 0
      },"-=0.7")
      .to(".tefiyoga-activity",{
        translateY: "-200%",
        duration: 1,
        opacity: 0
      },"-=1")
      .to(".tefiyoga-description",{
        translateY: "-200%",
        duration: 1,
        opacity: 0
      },"-=1")
      tl.to(".canvas-container2", {
        clipPath: "inset(100% 0 0 0)",
        duration: 1,
        opacity: 0
      })
      .to(".magicmarket-title",{
        translateY: "-100%",
        duration: 1
      },"-=0.9")
      .to(".magicmarket-activity",{
        translateY: "-100%",
        duration: 1
      },"-=1")
      .to(".magicmarket-description",{
        translateY: "-100%",
        duration: 1
      },"-=1")
      .to(".timeline-proyect",{
        translateY: "100px",
        duration: 1,
      },"-=1")
      .to(".proyect-2",{
        translateY: "-200%",
        duration: 1,
      },"-=1")
      .to(".proyect-3",{
        translateY: "-100%",
        duration: 1,
      },"-=1")
      tl.to(".image-3", {
        clipPath: "inset(0 0 100% 0)",
        duration: 1,
      })
      .to(".magicmarket-title",{
        translateY: "-200%",
        opacity: 0,
        duration: 1
      },"-=0.9")
      .to(".magicmarket-activity",{
        translateY: "-200%",
        opacity: 0,
        duration: 1
      },"-=1")
      .to(".magicmarket-description",{
        translateY: "-200%",
        opacity: 0,
        duration: 1
      },"-=1")
      tl.to(".canvas-container3", {
        clipPath: "inset(100% 0 0 0)",
        duration: 1,
        opacity: 0
      })
      .to(".flexfit-title",{
        translateY: "-100%",
        duration: 1
      },"-=1")
      .to(".flexfit-activity",{
        translateY: "-100%",
        duration: 1
      },"-=1")
      .to(".flexfit-description",{
        translateY: "-100%",
        duration: 1
      },"-=1")
      .to(".timeline-proyect",{
        translateY: "150px",
        duration: 1,
      },"-=1")
      .to(".proyect-3",{
        translateY: "-200%",
        duration: 1,
      },"-=1")
      .to(".proyect-4",{
        translateY: "-100%",
        duration: 1,
      },"-=1")
      ScrollTrigger.create({
        animation: tl,
        trigger: containerRef.current,
        start: "top top",
        end: "+=5000",
        scrub: 3,
        pin: true,
        toggleActions: "play reverse play reverse"
      });
    
  
    });
    return(
        <>
        <div
          ref={containerRef}
          className="h-screen w-full bg-[#F9F9F9]  relative overflow-hidden px-[80px] hidden sm:flex"
        >
          <div className="w-[50px] h-full  flex items-center">
            <div className="h-[200px] w-[2px] bg-neutral-200 relative">
              <div className="absolute flex items-center gap-x-2 timeline-proyect">
                <div className="w-[2px] h-[50px] bg-black"></div>
                <p className="text-black-primary relative w-[18px] overflow-hidden">0
                  <span className="proyect-1 absolute right-[0] top-0">1</span>
                  <span className="absolute top-[100%] right-[0] proyect-2">2</span>
                  <span className="absolute top-[100%] right-[0] proyect-3">3</span>
                  <span className="absolute top-[100%] right-[0] proyect-4">4</span>
                  </p>
              </div>
            </div>
          </div>
          <div className="w-[calc(100%-50px)] h-full flex items-center justify-center">
            <div className="w-fit h-full flex flex-col justify-center">
              <div className="relative w-[500px] h-[300px]">
                <img
                  className="image-1 w-full h-full object-cover absolute top-0 left-0 z-30"
                  src="/opus.svg"
                  alt="Opus"
                />
                <div className="canvas-container1 z-[25] absolute top-0 left-0 w-full h-full">
                <Novatrix />
                </div>
                
                <img
                  className="image-2 w-full h-full object-cover absolute top-0 left-0 z-20"
                  src="/tefiyoga.svg"
                  alt="TefiYoga"
                />
                <div className="canvas-container2 z-[15] absolute top-0 left-0 w-full h-full">
                <Novatrix />
                </div>
                
  
                <img
                  className="image-3 w-full h-full object-cover absolute top-0 left-0 z-10"
                  src="/magicmarket.svg"
                  alt="Magic Market"
                />
                <div className="canvas-container3 z-[5] absolute top-0 left-0 w-full h-full">
                <Novatrix />
                </div>
                
  
                <img
                  className="w-full h-full object-cover absolute top-0 left-0"
                  src="/flexfit.svg"
                  alt="FlexFit"
                />
              </div>
              <div className="text-black-primary text-base relative">
                <div className="flex justify-between pt-5 relative">
                  <div className="w-[250px] relative overflow-hidden">
                    <h2 className="font-semibold opus-title">Opus AI</h2>
                    <h2 className="font-semibold absolute left-0 top-[100%] tefiyoga-title">TefiYoga</h2>
                    <h2 className="font-semibold absolute left-0 top-[100%] magicmarket-title">Magic Market</h2>
                    <h2 className="font-semibold absolute left-0 top-[100%] flexfit-title">Flex Fit</h2>
                  </div>
                  <div className="relative overflow-hidden">
                    <p className="opacity-70 text-sm opus-activity">Diseño, Desarrollo.</p>
                    <p className="opacity-70 absolute right-0 top-[100%] text-sm tefiyoga-activity">Desarrollo.</p>
                    <p className="opacity-70 absolute right-0 top-[100%] text-sm magicmarket-activity">Diseño, Desarrollo.</p>
                    <p className="opacity-70 absolute right-0 top-[100%] text-sm flexfit-activity">Diseño, Desarrollo.</p>
                  </div>
                  
                </div>
                <div className="relative overflow-hidden mt-2">
                  <p className="font-light text-sm opus-description">
                    Aplicación web de chat de inteligencia artificial.
                  </p>
                  <p className="font-light text-sm absolute left-0 top-[100%] tefiyoga-description">
                    Pagina de aterrizaje para cliente orientada al clases de yoga.
                  </p>
                  <p className="font-light text-sm absolute left-0 top-[100%] magicmarket-description">
                    Aplicación web de comercio electronico orientada a productos tecnologicos
                  </p>
                  <p className="font-light text-sm absolute left-0 top-[100%] flexfit-description">
                    Pagina web para planes de entrenamiento.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </>
    )
}