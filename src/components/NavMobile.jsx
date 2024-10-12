import { useEffect, useState } from "react"
import NavMenu from "./NavMenu"

export default function NavMobile(){
    const [showNav,setShowNav] = useState(false)

    useEffect(()=>{
        if(showNav){
            document.body.classList.add('no-scroll')
        }
        else{
            document.body.classList.remove('no-scroll')
        }
    },[showNav])
    return(
        <nav className="px-4 flex justify-between items-center h-[60px] sm:hidden pt-4">
            <div>
                <ul className="flex gap-x-2">
                    <li className="flex flex-col text-primary">
                        <p className="font-bold text-xs">Horario</p>
                        <p className="text-xs">10:32pm (GMT-3)</p>
                    </li>
                    <li className="flex flex-col text-primary">
                        <p className="font-bold text-xs">Ubicación</p>
                        <p className="text-xs">Argentina</p>
                    </li>
                    
                </ul>
                
            </div>
            <div className="flex gap-x-4">
            <button className={`rounded-lg  px-4 h-[48px] z-10 items-center flex justify-between gap-x-4 relative bg-button-dark font-standard text-white font-normal text-lg ${showNav?'opacity-100 duration-75':'opacity-0 duration-500'}`}>Contacto
        <div className="bg-button-arrow size-8 rounded flex items-center justify-center">
            <img className="size-6" src="./icons/arrow-normal.svg" alt="" />
        </div>
    </button>
                <div onClick={()=> setShowNav(!showNav)} className={`rounded-[0.5rem] size-12 flex flex-col justify-center items-center relative bg-button-dark z-10`}>
                    <span className={`w-7 h-[2px] bg-primary absolute ${showNav?'duration-200 rotate-45 translate-y-0':' duration-300 -translate-y-1'}`}></span>
                    <span className={`w-7 h-[2px] bg-primary absolute ${showNav?'duration-200 -rotate-45 translate-y-0':' duration-300 translate-y-1'}`}></span>
                </div>
            </div>
            <NavMenu showNav={showNav}/>
        </nav>
    )
}