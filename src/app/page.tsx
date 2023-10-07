"use client"

import Image from "next/image"
import HumanBrain from "../../public/human_brain.png"
import MenuOpen from "../../public/menu-open.svg"
import MenuClose from "../../public/menu-close.svg"
import Menu from "./components/Menu"
import { useState } from "react"
import "./components/container.css"

export default function Home() {
	const [open, setOpen] = useState(false);

	return (
		<main>
			<div className="flex flex-col items-center gap-6">
				<h1 className="text-5xl text-black font-bold mt-8 font-poppins">NeuroMap</h1>
				<Image src={HumanBrain} alt="Imagem do cérebro" className="brain" width={320} height={320} />
			</div>
			<div className="flex flex-col gap-5 text-lg text-justify mx-20 mt-5">
				<p>Seja bem-vindo(a) ao NeuroMap! Este website tem como propósito proporcionar um entendimento acessível sobre o cérebro e seu funcionamento, direcionado especialmente a pessoas leigas no assunto. Contudo, o conteúdo aqui apresentado também pode ser enriquecedor para aqueles que possuem um conhecimento mais avançado nessa área.</p>
				<p>À esquerda, você encontrará um menu simplificado, o qual visa a facilitar a sua navegação pelo website. Ademais, as fontes relacionadas a cada conteúdo estarão disponíveis ao final de cada página.</p>
				{/* <p>Observação: Em algumas páginas, você se deparará com um bloco de texto intitulado “Facilitador”. Esse bloco tem como objetivo oferecer uma abordagem diferenciada ao tema, fornecer informações complementares ao que foi tratado na página ou apresentar tópicos essenciais para aprimorar a compreensão do assunto em questão.</p> */}
			</div>
			{open && <Menu />}
			<Image src={open ? MenuClose : MenuOpen} alt="Menu" className={`fixed top-3 left-4 cursor-pointer ${open ? "hover:bg-white hover:rounded-lg" : "hover:bg-slate-300 hover:rounded-lg"}`} width={30} height={30} onClick={() => setOpen(!open)} />
		</main>
	)
}
