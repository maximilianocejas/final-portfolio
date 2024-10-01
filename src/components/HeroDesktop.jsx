



export default function HeroDesktop(){
    return(
        <section className="h-[calc(100vh-80px)] w-full text-black px-20 py-24 relative hidden sm:block">
                <div>
                    <div className="flex gap-x-2 items-center font-medium text-base">
                        <p>Hola, soy</p>
                        <hr className="w-[60px] border-black"/>
                        <img className="size-[60px] object-contain" src="/profile.svg" alt="Profile image" />
                        <p>Desarrollador Web y Desarrollador Frontend UI</p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="uppercase font-extrabold text-9xl">Maximiliano</h1>
                        <p className="text-base font-normal mt-2">Creo experiencias únicas y atractivas en la web, enfocándome en<br/> combinar diseño y funcionalidad para lograr interfaces excepcionales.</p>
                    </div>
                    <div className="mt-4">
                        <button className="rounded-md px-16 py-4 bg-black text-white font-semibold text-lg">Contacto</button>
                    </div>
                </div>
                <div className="absolute w-24 h-fit bottom-[40px] right-[80px]">
                    <ul className="flex flex-col gap-y-2">
                        <li>
                            <a target="_BLANK" className="flex flex-row-reverse gap-x-2 items-center font-semibold text-lg" href="https://www.behance.net/maxicejas2">
                                                                <img className="size-[32px]" src="./incline-arrow.svg" alt="Arrow icon" />
                                Behance
                                </a>

                        </li>
                        <li>
                        <a target="_BLANK" className="flex flex-row-reverse gap-x-2 items-center font-semibold text-lg" href="https://github.com/maximilianocejas">
                                                            <img className="size-[32px]" src="./incline-arrow.svg" alt="Arrow icon" />
                                Github

                                </a>
                        </li>
                        <li>
                            
                        <a target="_BLANK" className="flex flex-row-reverse gap-x-2 items-center font-semibold text-lg" href="https://www.linkedin.com/in/maximiliano-cejas/">
                                                            <img className="size-[32px]" src="./incline-arrow.svg" alt="Arrow icon" />
                                Linkedin

                                </a>
                        </li>
                    </ul>
                </div>
        </section>
    )
}


