import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)
export default function Proyects(){
    useEffect(() => {
        let textContent = document.querySelector('.proyect-text')

        ScrollTrigger.create({
            trigger: '.proyect2',
            start: "top center",
            onEnter:()=>{
                gsap.to(textContent,{
                translateY: "-100%"
                })
            },
            onLeaveBack:()=>{
                gsap.to(textContent,{
                    translateY: "0%"
                    })
            }
        })
        ScrollTrigger.create({
            trigger: '.proyect3',
            start: "top center",
            onEnter:()=>{
            gsap.to(textContent,{
                translateY: "-200%"
                })
            },
            onLeaveBack:()=>{
                gsap.to(textContent,{
                    translateY: "-100%"
                    })
            }
        })
        ScrollTrigger.create({
            trigger: '.proyect4',
            start: "top center",
            onEnter:()=>{
                gsap.to(textContent,{
                    translateY: "-300%"
                    })
            },
            onLeaveBack:()=>{
                gsap.to(textContent,{
                    translateY: "-200%"
                    })
            }
        })
        ScrollTrigger.create({

            trigger: '.proyect5',
            start: "top center",
            onEnter:()=>{
                gsap.to(textContent,{
                    translateY: "-400%"
                    })
            },
            onLeaveBack:()=>{
                gsap.to(textContent,{
                    translateY: "-300%"
                    })
            }
        })
      }, [])
    return(
        <section className="z-10 left-0 min-h-screen hidden sm:block rounded-t-[1.5rem] h-fit w-full bg-primary text-secondary font-standard px-20 py-20">
                <h2 className="text-9xl font-semibold ">PROYECTOS</h2>
                    <div className="h-fit w-full grid grid-cols-2 grid-rows-1">
                   
                    <div className="h-fit w-full col-span-1 sticky top-12 left-0 text-[22vw] flex overflow-hidden ">
                      
                        <span className="text-secondary relative ">0
                        </span>
                        <div className="relative bg-red-500">
                            <div className="absolute w-fit h-full proyect-text flex flex-col transition-all duration-1000 ease-in-out">
                                <span className="inline-block">1.</span>
                                <span className="inline-block">2.</span>
                                <span className="inline-block">3.</span>
                                <span className="inline-block">4.</span>
                                <span className="inline-block">5.</span>
                               
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-y-32 col-span-1">
                        <article  className="h-screen w-full proyect">
                            
                            <img className="w-full h-[500px] object-cover" src="./opus.svg" alt="" />
                            
                            <div className="flex w-full justify-between mt-4">
                                <h3>Opus Ai</h3>
                                <span></span>
                                <span></span>
                            </div>
                            <p className="mt-4">
                            Aplicación web de chat de inteligencia artificial.
                            </p>
                        </article>
                        <article className="h-screen w-full proyect2">
                        <img className="w-full h-[500px] object-cover" src="./seaway.png" alt="" />
                            
                        <div className="flex w-full justify-between mt-4">
                                <h3>Seaway</h3>
                                <span></span>
                                <span></span>
                            </div>
                            <p className="mt-4">
                            Pagina de aterrizaje de yates de lujo<span className="text-blue-600">(En proceso)</span>.
                            </p>
                        </article>
                        <article className="h-screen w-full proyect3">
                        <img className="w-full h-[500px] object-cover" src="./tefiyoga.png" alt="" />
                            
                        <div className="flex w-full justify-between mt-4">
                                <h3>Tefiyoga</h3>
                                <span></span>
                                <span></span>
                            </div>
                            <p className="mt-4">
                            Aplicación web de chat de inteligencia artificial.
                            </p>
                        </article>
                        <article className="h-screen w-full proyect4">
                        <img className="w-full h-[500px] object-cover" src="./magicmarket.svg" alt="" />
                            
                        <div className="flex w-full justify-between mt-4">
                                <h3>Magic Market</h3>
                                <span></span>
                                <span></span>
                            </div>
                            <p className="mt-4">
                            Aplicación web de comercio electronico orientada a productos tecnologicos
                            </p>
                        </article>
                        <article className="h-screen w-full proyect5">
                        <img className="w-full h-[500px] object-cover" src="./flexfit.svg" alt="" />
                            
                        <div className="flex w-full justify-between mt-4">
                                <h3>Flex Fit</h3>
                                <span></span>
                                <span></span>
                            </div>
                            <p className="mt-4">
                            Pagina web para planes de entrenamiento.
                            </p>
                        </article>
                    </div>
                    </div>
            </section>
    )
}