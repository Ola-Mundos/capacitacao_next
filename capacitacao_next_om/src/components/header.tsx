'use client'
import Logo from "../app/assets/SVG/logoSVG"
import ButtonContact from "@/components/button_contact";
import {useEffect, useState} from 'react'
import { Menu } from "lucide-react";

function Header(){
    const [menuState, setmenuState] = useState(false)
    const [widthScreen, setwidthScreen] = useState<number | null >(null)
    useEffect(() => {
      const handleResize = () => {
        const newWidth = window.innerWidth
        setwidthScreen(newWidth)
        if (newWidth > 768){
          setmenuState(false)
        }
      }

      handleResize()
      window.addEventListener('resize', handleResize)

      return() => {
        window.removeEventListener('resize', handleResize)
      }

    },[])
    return(
        <>
        <header className="flex w-screen md:h-30 h-15 items-center bg-[var(--azul_om)] header_details fixed top-0">
            <Logo className="mr-auto ml-[30px] md:ml-[85px] object-cover md:h-25 md:w-25 h-12 w-12 "/>
            <nav className="hidden md:flex ml-auto font-[raleway] flex-row space-x-[65px] mr-[85px] text-xl font-extrabold text_header ">
              <div className="flex flex-col justify-center">
                <p className="cursor-pointer break-words whitespace-pre-line text-center leading-tight">
                  Metodologia{'\n'}e Ensino
                </p>
              </div>
              <p className="cursor-pointer flex items-center">Sobre nós</p>
              <p className="cursor-pointer flex items-center">Depoimentos</p>
              <p className="cursor-pointer flex items-center">Blog</p>
              <p className="cursor-pointer flex items-center">Membros</p>
              <p className="cursor-pointer flex items-center">Contato</p>
            </nav>
            <div className="block md:hidden flex flex-row gap-x-3 ml-auto mr-2 ">
                <ButtonContact/>
                <Menu onClick={() => setmenuState(!menuState)}/>
            </div> 
        </header>
        {/* menu para telas mobile */}
        <div
        className={`md:hidden
          fixed top-15
          bg-[var(--azul_om)]
          overflow-hidden transition-all duration-800 ease-in-out
          ${menuState ? "w-full" : "w-0"}
        `} id="mobile_menu"
      >
        <nav className="flex flex-col font-[raleway] justify-center items-center h-full font-extrabold not-italic text_header_mobile">
          <p className="cursor-pointer">Metodologia e Ensino</p>
          <p className="cursor-pointer">Sobre nós</p>
          <p className="cursor-pointer">Depoimentos</p>
          <p className="cursor-pointer">Blog</p>
          <p className="cursor-pointer">Membros</p>
          <p className="cursor-pointer">Contato</p>
        </nav>
      </div>
        </>
    )
}

export default Header;