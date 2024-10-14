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
        <section className="z-10 left-0 min-h-screen hidden sm:block rounded-t-[1.5rem] h-fit w-full bg-[#FFFFFF] text-black font-standard px-20 py-20">
                <h2 className="text-9xl font-semibold ">PROYECTOS</h2>
                    <div className="h-fit w-full grid grid-cols-2 grid-rows-1">
                   
                    <div className="h-fit w-full col-span-1 sticky top-12 left-0 text-[22vw] flex overflow-hidden ">
                      
                        <span className="relative ">0
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
                            <a target="_BLANK" href="https://opus-ai.vercel.app/">
                            <img className="w-full h-[500px] object-cover" src="./opus.svg" alt="" />
                            </a>
                            
                            
                            <div className="flex w-full justify-between mt-4">
                                <h3 className="text-sm font-normal">Opus Ai</h3>
                                <div className="">
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F4FE] text-[#006dcbf2] mr-2">Diseño</span>
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F6EB] text-[#00713fde]">Desarrollo</span>
                                </div>
                            </div>
                            <p className="mt- text-4xl font-bold">
                            Chat de IA
                            </p>
                        </article>
                        <article className="h-screen w-full proyect2">
                            <a target="_BLANK" href="https://yacht-landing-eight.vercel.app/">
                            <img className="w-full h-[500px] object-cover" src="./seaway.png" alt="" />
                            </a>
                        
                            
                        <div className="flex w-full justify-between mt-4">
                                <h3 className="text-sm font-normal">Seaway</h3>
                                <div className="">
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F4FE] text-[#006dcbf2] mr-2">Diseño</span>
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F6EB] text-[#00713fde]">Desarrollo</span>
                                </div>
                            </div>
                            <p className="mt- text-4xl font-bold">
                            Yates de lujo
                            </p>
                        </article>
                        <article className="h-screen w-full proyect3">
                            <a target="_BLANK" href="https://tefiyoga.netlify.app/">
                            <img className="w-full h-[500px] object-cover" src="./tefiyoga.png" alt="" />
                            </a>
                        
                            
                        <div className="flex w-full justify-between mt-4">
                                <h3 className="text-sm font-normal">Tefiyoga</h3>
                                <div className="">
                                
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F6EB] text-[#00713fde]">Desarrollo</span>
                                </div>
                            </div>
                            <p className="mt- text-4xl font-bold">
                            Clases de yoga
                            </p>
                        </article>
                        <article className="h-screen w-full proyect4">
                            <a target="_BLANK" href="https://magicmarket.netlify.app/">
                            <img className="w-full h-[500px] object-cover" src="./magicmarket.svg" alt="" />
                            
                            </a>
                            
                        <div className="flex w-full justify-between mt-4">
                                <h3 className="text-sm font-normal">Magic Market</h3>
                                <div className="">
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F4FE] text-[#006dcbf2] mr-2">Diseño</span>
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F6EB] text-[#00713fde]">Desarrollo</span>
                                </div>
                            </div>
                            <p className="mt- text-4xl font-bold">
                            Eccommerce
                            </p>
                        </article>
                        <article className="h-screen w-full proyect5">
                            <a target="_BLANK" href="https://maximilianocejas.github.io/Desarrollo-Web-Coderhouse/">
                            <img className="w-full h-[500px] object-cover" src="./flexfit.svg" alt="" />
                            
                            </a>
                            
                        <div className="flex w-full justify-between mt-4">
                                <h3 className="text-sm font-normal">Flex Fit</h3>
                                <div className="">
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F4FE] text-[#006dcbf2] mr-2">Diseño</span>
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F6EB] text-[#00713fde]">Desarrollo</span>
                                </div>
                            </div>
                            <p className="mt- text-4xl font-bold">
                            Entrenamiento
                            </p>
                        </article>
                    </div>
                    </div>
            </section>
    )
}