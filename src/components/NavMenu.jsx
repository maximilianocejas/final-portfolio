import gsap from "gsap"
import { useEffect } from "react"


export default function NavMenu({handleShowNav,showNav}){
    useEffect(()=>{
        let targets = gsap.utils.toArray('.text-animate')
        gsap.set(targets,{translateY: '2rem'})
        if(showNav){
            gsap.to(targets,{
                duration: 1,
                ease: 'power2.out',
                translateY: '-1.25rem'
            })
        }
    },[showNav])
    return(
        <div className={`bg-[rgba(8,6,24,0.66)] backdrop-blur-[2em] w-full h-screen fixed top-0 z-[0] ${showNav?'-translate-x-4 duration-300':'translate-x-full duration-300'}`}>

            
            <div className="h-full w-full px-4 flex items-start pt-[120px]">
                <ul className="text-white capitalize text-4xl font-normal flex flex-col w-full relative z-10">
                    <li onClick={handleShowNav} className="overflow-hidden py-6 relative"><a className="absolute text-animate" href="#inicio">Inicio</a></li>
                    <li onClick={handleShowNav} className="overflow-hidden py-6 relative"><a className="absolute text-animate" href="#proyectos">Proyectos</a></li>
                    <li onClick={handleShowNav} className="overflow-hidden py-6 relative"><a className="absolute text-animate" href="#sobre-mi">Sobre mi</a></li>
                    <li onClick={handleShowNav} className="overflow-hidden py-6 relative"><a className="absolute text-animate" href="">Contacto</a></li>
                </ul>
            </div>
        </div>
    )
}