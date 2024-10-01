import gsap from "gsap"
import { useEffect } from "react"

export default function NavMenu({showNav}){
    useEffect(()=>{
        let targets = gsap.utils.toArray('.text-animate')
        gsap.set(targets,{translateY: '2rem'})
        if(showNav){
            gsap.to(targets,{
                duration: 0.8,
                ease: 'power2.out',
                translateY: '-1.25rem'
            })
        }
    },[showNav])
    return(
        <div className={`bg-black w-full h-screen fixed top-0 z-[0] ${showNav?'-translate-x-4 duration-300':'translate-x-full duration-300'}`}>
            <button className='px-6 h-[48px] bg-white text-black text-xl font-semibold rounded-full fixed top-[8px] right-[calc(16px+62px)]'>Contacto</button>
            <div className="h-full w-full px-4 flex items-start pt-[120px]">
                <ul className="text-white uppercase text-4xl font-bold flex flex-col gap-y-4 w-full ">
                    <li className="overflow-hidden py-4 relative"><a className="absolute text-animate" href="">inicio</a></li>
                    <li className="overflow-hidden py-4 relative"><a className="absolute text-animate" href="">proyectos</a></li>
                    <li className="overflow-hidden py-4 relative"><a className="absolute text-animate" href="">sobre mi</a></li>
                    <li className="overflow-hidden py-4 relative"><a className="absolute text-animate" href="">contacto</a></li>
                </ul>
            </div>
        </div>
    )
}