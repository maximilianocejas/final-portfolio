

import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Header(){
    return(
        <header className="h-screen w-full"> 
            <NavDesktop/>
            <HeroDesktop/>
            <NavMobile/>
            <HeroMobile/>
        </header>
    )
}