import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)
export default function Proyects(){
    useEffect(() => {
        const sections = document.querySelectorAll('.proyect');
        const numberText = document.querySelector('.proyect-text');
    
        sections.forEach((section, index) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top center",
            onEnter: () => {

              numberText.textContent = `0${index + 1}.`;
            },
            onLeaveBack: () => {

              numberText.textContent = `0${index}.`;
            }
          });
        });
      }, [])
    return(
        <section className="z-10 left-0 min-h-screen hidden sm:block rounded-t-[1.5rem] h-fit w-full bg-primary text-secondary font-standard px-20 py-20">
                <h2 className="text-9xl font-semibold ">PROYECTOS</h2>
                    <div className="h-fit w-full grid grid-cols-2 grid-rows-1">
                   
                    <div className="h-fit w-full col-span-1 flex items-center justify-center sticky top-0 left-0">
                      
                        <p className="text-[22vw] proyect-text">01.</p>
                      
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
                        <article className="h-screen w-full proyect">
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
                        <article className="h-screen w-full proyect">
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
                        <article className="h-screen w-full proyect">
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
                        <article className="h-screen w-full proyect">
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