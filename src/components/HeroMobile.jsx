export default function HeroMobile(){
    return(
        <section className="p-4 h-[calc(100%-60px)] w-full flex flex-col justify-end gap-y-4 sm:hidden">
            <div className="flex flex-col gap-y-4 items-start">
            <div className="flex h-fit items-center gap-x-2">
                    <p className="text-xs">Hola, soy</p>
                    <span className="h-[2px] w-[24px] bg-black"></span>
                    <p className="text-xs">Web developer & Frontend Developer UI</p>
                </div>
                <h1 className="uppercase text-[40px] font-extrabold text-black">Maximiliano</h1>
                <p className="text-xs text-black">Creo experiencias únicas y atractivas en la web, enfocándome<br/> en combinar diseño y funcionalidad para lograr interfaces<br/> excepcionales.</p>
                <button className="capitalize text-white bg-black rounded-md px-12 py-4 font-semibold text-xl">contacto</button>
            </div>
            <div>
                <img className="w-full " src="./profile-mobile.png" alt="Profile photo" />
            </div>
        </section>
    )
}