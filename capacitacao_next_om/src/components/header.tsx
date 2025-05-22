'use client'
import Logo from "../app/assets/SVG/logoSVG"
import ButtonContact from "@/components/button_contact";
import {useState} from 'react'
import { Menu } from "lucide-react";

function Header(){
    const [menuState, setmenuState] = useState(false)
    return(
        <>
        <header className="flex w-screen md:h-30 h-15 items-center bg-gradient-to-r from-[var(--azul_om)] to-[var(--azul_om2)]">
            <Logo className="mr-auto ml-5 object-cover md:h-25 md:w-25 h-12 w-12 "/>
            <nav className="hidden md:flex ml-auto font-[raleway] flex-row space-x-10 mr-10 text-xl">
                <p>Início</p>
                <p>Membros</p>
                <p>Depoimentos</p>
                <p>Blog</p>
                <p>Contato</p>
            </nav>
            <div className="block md:hidden flex flex-row gap-x-3 ml-auto mr-2 ">
                <ButtonContact/>
                <Menu onClick={() => setmenuState(!menuState)}/>
            </div> 
        </header>
        {/* menu para telas mobile */}
        <div
        className={`
          bg-gradient-to-r from-[var(--azul_om)] to-[var(--azul_om2)]
          overflow-hidden transition-all duration-800 ease-in-out
          ${menuState ? "w-full" : "w-0"}
        `}
      >
        <nav className="flex flex-col font-[raleway] text-lg justify-center items-center h-full">
          <p className="cursor-pointer">Início</p>
          <p className="cursor-pointer">Membros</p>
          <p className="cursor-pointer">Depoimentos</p>
          <p className="cursor-pointer">Blog</p>
          <p className="cursor-pointer">Contato</p>
        </nav>
      </div>
        </>
    )
}

export default Header;