import { useEffect, useState } from "react"


export default function NavDesktop(){
    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date())
        },15000)
        return ()=> clearInterval(timer)
    },[])
    const getDataTimeBS = (date)=>{
        return new Intl.DateTimeFormat('es-AR',{
            timeZone: 'America/Argentina/Buenos_Aires',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }).format(date)
    }
    const buenosAiresTime = getDataTimeBS(time)
    return(
        <nav className="w-full h-fit px-20 pt-2 text-primary font-standard items-center absolute top-0 left-0 justify-between hidden sm:flex">
            <div className="bg-button-dark text-primary rounded-full flex items-center justify-center px-6 py-4">
                <p className="uppercase text-base font-semibold">Disponible para trabajar</p>
            </div>
            <div className="flex gap-x-24">   
                    <div>
                    <p className="text-base font-bold">Ubicación</p>
                    <p className="text-base font-normal opacity-70">Argentina</p>
                </div>
                <div>
                    <p className="text-base font-bold">Horario</p>
                    <p className="text-base font-normal opacity-70">{buenosAiresTime}(GMT-3)</p>
                </div>
             <div>
                    <p className="text-base font-bold">Idioma</p>
                    <div className="text-base font-normal flex gap-x-3">
                        <button className="opacity-70">ES</button>
                        <button className="opacity-70">EN</button>
                    </div>
                </div>

            </div>

        </nav>
    )
}