export default function HeroMobile(){
    return(
        <section className="p-4 h-[calc(100%-60px)] w-full flex flex-col justify-end gap-y-4 sm:hidden font-standard text-primary">
            <div className="flex flex-col gap-y-4 items-start">
            <div className="flex h-fit items-center gap-x-2">
                    <p className="text-xs">Hola, soy</p>
                    <span className="h-[2px] w-[24px] bg-primary"></span>
                    <p className="text-xs">Web developer & Frontend Developer UI</p>
                </div>
                <h1 className="uppercase text-[40px] font-extrabold text-primary">Maximiliano</h1>
                <p className="text-xs text-primary">Creo experiencias únicas y atractivas en la web, enfocándome<br/> en combinar diseño y funcionalidad para lograr interfaces<br/> excepcionales.</p>
                <button className="rounded-lg  px-4 items-center py-3 flex justify-between gap-x-4 bg-button-dark font-standard text-white font-normal text-lg">Contacto
        <div className="bg-button-arrow size-8 rounded flex items-center justify-center">
            <img className="size-6" src="./icons/arrow-normal.svg" alt="" />
        </div>
    </button>
            </div>
            <div>
                <img className="w-full " src="./profile-mobile.png" alt="Profile photo" />
            </div>
        </section>
    )
}