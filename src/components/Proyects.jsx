import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger)
export default function Proyects(){
    useEffect(()=>{
        let tl = gsap.timeline()
        tl.to('.proyects',{
            translateY: "-100vh"
        })
        ScrollTrigger.create({
            animation: tl,
            trigger: ".header",
            start: "top top",
            end: "+=400",
            scrub: 1,
        
        })
    },[])
    return(
        <section className=" relative z-10 left-0 min-h-screen hidden sm:block proyects rounded-t-[1.5rem] top-full h-fit w-full bg-primary text-secondary font-standard px-20 py-20">
                <h2 className="text-9xl font-semibold ">PROYECTOS</h2>
                    <div className="h-fit w-full bg-red-500 grid grid-cols-2 grid-rows-1">
                   
                    <div className="h-fit w-full col-span-1 relative flex items-center justify-center text-[22vw]">
                        <span className="top-12 ">01</span>
                    </div>
                    
                    <div className="flex flex-col gap-y-32 col-span-1">
                        <article className="h-screen w-full bg-green-500">
                            
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
                        <article className="h-screen w-full bg-yellow-500">
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
                        <article className="h-screen w-full bg-green-500">
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
                        <article className="h-screen w-full">
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
                        <article className="h-screen w-full">
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