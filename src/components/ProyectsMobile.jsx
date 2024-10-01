

export default function ProyectsMobile(){
    return(
        <section className="h-fit flex flex-col gap-y-8 w-full px-4 sm:hidden">
            <article className="flex flex-col gap-y-2">
                <img src="./opus.svg" alt="" />
                <div className="flex justify-between items-center">
                    <h2 className="text-black font-bold text-xl">Opus AI</h2>
                    <span className="text-xs text-black">Diseño, Desarrollo</span>
                </div>
                <p className="text-xs text-black">Chat de inteligencia artificial.</p>
            </article>
            <article className="flex flex-col gap-y-2">
                <img src="./tefiyoga.svg" alt="" />
                <div className="flex justify-between items-center">
                    <h2 className="text-black font-bold text-xl">TefiYoga</h2>
                    <span className="text-xs text-black">Desarrollo</span>
                </div>
                <p className="text-xs text-black">Clases de yoga.</p>
            </article>
            <article className="flex flex-col gap-y-2">
                <img src="./magicmarket.svg" alt="" />
                <div className="flex justify-between items-center">
                    <h2 className="text-black font-bold text-xl">Magic Market</h2>
                    <span className="text-xs text-black">Diseño, Desarrollo</span>
                </div>
                <p className="text-xs text-black">Ecommerce.</p>
            </article>
            <article className="flex flex-col gap-y-2">
                <img src="./flexfit.svg" alt="" />
                <div className="flex justify-between items-center">
                    <h2 className="text-black font-bold text-xl">Flex Fit</h2>
                    <span className="text-xs text-black">Diseño, Desarollo</span>
                </div>
                <p className="text-xs text-black">Planes de entrenamiento.</p>
            </article>
        </section>
    )
}