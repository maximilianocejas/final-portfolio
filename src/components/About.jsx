
export default function About(){
    return(
        <section className="h-fit w-full bg-primary text-secondary font-standard px-20 py-20">
           
            
                
           
            <article className="grid grid-cols-12 mt-12 w-full gap-x-20">
            <div className="w-full col-span-7">
                    <p className="text-secondary font-semibold text-7xl uppercase">Sobre mi</p>
                    <p className="text-secondary text-2xl font-semibold">
                    Soy un desarrollador frontend con conocimientos en diseño UX/UI de Argentina.
                </p>
                    <div className="pt-5">


                    <p className="text-secondary font-normal text-lg">
                
                Soy una persona entusiasta y amante de los desafíos. Me encanta aprender siempre algo nuevo, de igual manera, me aseguro siempre de dar los mejores resultados posibles. 
                </p>

                    </div>

                </div>
                <div className="w-full h-full col-span-5 py-5">
                <img className="aspect-auto w-full" src="./profile-mobile.png" alt="Profile image" />
                </div>
                

               
            </article>

        </section>
    )
}