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
        <nav className="px-4 flex justify-between items-center h-[60px] sm:hidden">
            <div>
                <ul className="flex gap-x-2">
                    <li className="flex flex-col text-black">
                        <p className="font-bold text-xs">Horario</p>
                        <p className="text-xs">10:32pm (GMT-3)</p>
                    </li>
                    <li className="flex flex-col text-black">
                        <p className="font-bold text-xs">Ubicación</p>
                        <p className="text-xs">Argentina</p>
                    </li>
                    
                </ul>
                
            </div>
            <div>
                <div onClick={()=> setShowNav(!showNav)} className={`rounded-full size-12 flex flex-col justify-center items-center relative z-10 ${showNav?'bg-white duration-300':'bg-black duration-300'}`}>
                    <span className={`w-7 h-[2px] absolute ${showNav?'bg-black duration-200 rotate-45 translate-y-0':'bg-white duration-300 -translate-y-1'}`}></span>
                    <span className={`w-7 h-[2px] absolute ${showNav?'bg-black duration-200 -rotate-45 translate-y-0':'bg-white duration-300 translate-y-1'}`}></span>
                </div>
            </div>
            <NavMenu showNav={showNav}/>
        </nav>
    )
}