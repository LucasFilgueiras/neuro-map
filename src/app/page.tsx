"use client"

import Image from "next/image"
import HumanBrain from "../../public/human_brain.png"
import MenuOpen from "../../public/menu-open.svg"
import MenuClose from "../../public/menu-close.svg"
import Menu from "./components/Menu"
import { useState } from "react"
import "./components/container.css"
import ChatGPT from "./components/ChatGPT"
import Scene2 from "./components/Scene2"

export default function Home() {
	const [open, setOpen] = useState(false);

	return (
		<main>
			<div className="flex flex-col items-center">
				<h1 className="text-5xl text-black font-bold mt-8 font-poppins">NeuroMap</h1>
				<Scene2 />
			</div>
			<div className="flex flex-col gap-5 text-lg text-justify mx-20 my-5">
				<ChatGPT />
				<p>Seja bem-vindo(a) ao NeuroMap! Este website tem como propósito proporcionar um entendimento acessível sobre o cérebro e seu funcionamento, direcionado especialmente a pessoas leigas no assunto. Contudo, o conteúdo aqui apresentado também pode ser enriquecedor para aqueles que possuem um conhecimento mais avançado nessa área.</p>
				<p>À esquerda, você encontrará um menu simplificado, o qual visa a facilitar a sua navegação pelo website. Ademais, as fontes relacionadas a cada conteúdo estarão disponíveis ao final de cada página.</p>
				{/* <p>Observação: Em algumas páginas, você se deparará com um bloco de texto intitulado “Facilitador”. Esse bloco tem como objetivo oferecer uma abordagem diferenciada ao tema, fornecer informações complementares ao que foi tratado na página ou apresentar tópicos essenciais para aprimorar a compreensão do assunto em questão.</p> */}
			</div>
			{/* {open && <Menu />} */}
			<Image src={open ? MenuClose : MenuOpen} alt="Menu" className={`fixed top-3 left-4 cursor-pointer hover:scale-110 transition-all`} width={30} height={30} onClick={() => setOpen(!open)} />
		</main>
	)
}
