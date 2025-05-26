import Image from "next/image";
import Logo from "../app/assets/SVG/logoSVG"
import ClassImage from "@/app/assets/aula_1.png"
import DataImage from "@/components/data"
import TurmaHercy from "../app/assets/turmainteira_hercy.png"
import Jade from "@/app/assets/jade_png.png"

export default function Home() {
  return (
    <>
    <main className="h-screen w-screen">
      <section className=" flex justify-center md:pt-[175px] pt-[100px] flex-col items-center">
          <Image
        src={ClassImage}
        alt="Imagem Aula Olá, Mundos!"
        id="firstImage"
        />
        <DataImage className="data_menu"/>
      </section>
      <section id="sec_section">
        <h1 id="title_sec_section">
          NÓS SOMOS OLÁ, MUNDOS!
        </h1>
        <div className="pl-[20vw] pt-[5vh] flex flex-row">
          <Image
        src={TurmaHercy}
        alt="Alunos do Olá, Mundos!"
        id="hercyImage"
        />
        </div>
        <div className="flex flex-row  object-contain " id="classImage">
          <Image
          src={Jade}
          alt="Jade - Mascote do Olá, Mundos!"
          />
          <div className="mt-[320px] flex flex-col">
              <h1 className="font-[raleway] font-extrabold non-italic text-[80px] text-[#E8F1F8] ">
                SOBRE NÓS 
              </h1>
              <p className="text-[#FFF] font-[raleway] text-[40px] font-medium break-words whitespace-pre-line">
                A Olá Mundos é um projeto de extensão do IC  que visa democratizar o ensino de {'\n'} computação nas escolas de Campinas. 
              </p>
          </div>
        </div>
      </section>
    </main>
    
    </>
  );
}
