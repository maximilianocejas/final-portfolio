export default function About(){
    return(
        <section className="h-fit w-full rounded-t-xl bg-[#080618] text-[#ECF5FF] font-standard px-20 py-20 about">
            <div>
                <h2 className="font-normal text-8xl">Sobre mi</h2>
                <p className="text-[#ECF5FF] opacity-80 font-normal">
                    Soy un desarrollador frontend con conocimientos<br/> en diseño UX/UI de Argentina.
                </p>
            </div>
            <article className="flex gap-x-4 items-center justify-end mt-12">
                <img src="./profile-mobile.png" alt="Profile image" />
                <p className="text-base text-[#ECF5FF] opacity-80 font-normal">
                Me mantengo en constante formación y dedicación para<br/> mantenerme actualizado con las ultimas tendencias<br/> tecnológicas, creando sitios web responsivos y<br/> amigables a la vista.<br/>
                Soy una persona entusiasta y amante de los desafíos.<br/> Me encanta aprender siempre algo nuevo, de igual<br/> manera, me aseguro siempre de dar los mejores<br/> resultados posibles. 
                </p>
            </article>

        </section>
    )
}