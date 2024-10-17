

export default function ProyectsMobile(){
    return(
        <section id="proyectos" className="h-fit flex flex-col gap-y-8 w-full px-4 sm:hidden bg-[#FFFFFF] text-black font-standard py-14 rounded-t-3xl">
            <article className="flex flex-col gap-y-2">
                <a target="_BLANK" href="https://yacht-landing-eight.vercel.app/">
                <img src="./seaway.png" alt="Seaway" />
                </a>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl">Seaway</h2>
                    <div className=" text-xs">
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F4FE] text-[#006dcbf2] mr-2">Diseño</span>
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F6EB] text-[#00713fde]">Desarrollo</span>
                                </div>
                </div>
                <p className="text-xs ">Yates de lujo</p>
            </article>
            <article className="flex flex-col gap-y-2">
                <a target="_BLANK" href="https://opus-ai.vercel.app/">
                <img src="./opus.svg" alt="" />
                </a>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl">Opus AI</h2>
                    <div className=" text-xs">
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F4FE] text-[#006dcbf2] mr-2">Diseño</span>
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F6EB] text-[#00713fde]">Desarrollo</span>
                                </div>
                </div>
                <p className="text-xs ">Chat de IA</p>
            </article>
            <article className="flex flex-col gap-y-2">
            <a target="_BLANK" href="https://tefiyoga.netlify.app/">
                <img src="./tefiyoga.png" alt="" />
                </a>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl">TefiYoga</h2>
                    <div className=" text-xs">
                               
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F6EB] text-[#00713fde]">Desarrollo</span>
                                </div>
                </div>
                <p className="text-xs ">Clases de yoga</p>
            </article>
            <article className="flex flex-col gap-y-2">
            <a target="_BLANK" href="https://magicmarket.netlify.app/">
                <img src="./magicmarket.svg" alt="" />
                </a>
                <div className="flex justify-between items-center">
                    <h2 className="text-seondary font-bold text-xl">Magic Market</h2>
                    <div className=" text-xs">
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F4FE] text-[#006dcbf2] mr-2">Diseño</span>
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F6EB] text-[#00713fde]">Desarrollo</span>
                                </div>
                </div>
                <p className="text-xs">Eccommerce</p>
            </article>
            <article className="flex flex-col gap-y-2">
            <a target="_BLANK" href="https://maximilianocejas.github.io/Desarrollo-Web-Coderhouse/">
                <img src="./flexfit.svg" alt="" />
                </a>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl">Flex Fit</h2>
                    <div className=" text-xs">
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F4FE] text-[#006dcbf2] mr-2">Diseño</span>
                                <span className="rounded-[4px] py-2 px-4 bg-[#E6F6EB] text-[#00713fde]">Desarrollo</span>
                                </div>
                </div>
                <p className="text-xs">Entrenamiento</p>
            </article>
        </section>
    )
}


