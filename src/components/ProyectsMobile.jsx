

export default function ProyectsMobile(){
    return(
        <section className="h-fit flex flex-col gap-y-8 w-full px-4 sm:hidden">
            <article className="flex flex-col gap-y-2">
                <a target="_BLANK" href="https://opus-ai.vercel.app/">
                <img src="./opus.svg" alt="" />
                </a>
                <div className="flex justify-between items-center">
                    <h2 className="text-black font-bold text-xl">Opus AI</h2>
                    <span className="text-xs text-black">Diseño, Desarrollo</span>
                </div>
                <p className="text-xs text-black">Chat de inteligencia artificial.</p>
            </article>
            <article className="flex flex-col gap-y-2">
                <a target="_BLANK" href="https://yacht-landing-eight.vercel.app/">
                <img src="./seaway.png" alt="Seaway" />
                </a>
                <div className="flex justify-between items-center">
                    <h2 className="text-black font-bold text-xl">Seaway</h2>
                    <span className="text-xs text-black">Diseño, Desarrollo</span>
                </div>
                <p className="text-xs text-black">Yates de lujo.<span className="text-blue-600">(En proceso)</span></p>
            </article>
            <article className="flex flex-col gap-y-2">
            <a target="_BLANK" href="https://tefiyoga.netlify.app/">
                <img src="./tefiyoga.svg" alt="" />
                </a>
                <div className="flex justify-between items-center">
                    <h2 className="text-black font-bold text-xl">TefiYoga</h2>
                    <span className="text-xs text-black">Desarrollo</span>
                </div>
                <p className="text-xs text-black">Clases de yoga.</p>
            </article>
            <article className="flex flex-col gap-y-2">
            <a target="_BLANK" href="https://magicmarket.netlify.app/">
                <img src="./magicmarket.svg" alt="" />
                </a>
                <div className="flex justify-between items-center">
                    <h2 className="text-black font-bold text-xl">Magic Market</h2>
                    <span className="text-xs text-black">Diseño, Desarrollo</span>
                </div>
                <p className="text-xs text-black">Ecommerce.</p>
            </article>
            <article className="flex flex-col gap-y-2">
            <a target="_BLANK" href="https://maximilianocejas.github.io/Desarrollo-Web-Coderhouse/">
                <img src="./flexfit.svg" alt="" />
                </a>
                <div className="flex justify-between items-center">
                    <h2 className="text-black font-bold text-xl">Flex Fit</h2>
                    <span className="text-xs text-black">Diseño, Desarollo</span>
                </div>
                <p className="text-xs text-black">Planes de entrenamiento.</p>
            </article>
        </section>
    )
}


