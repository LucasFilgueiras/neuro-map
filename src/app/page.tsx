import Image from "next/image"
import Brain from "../../public/brain.svg"

export default function Home() {
	return (
		<main>
			<div className="flex flex-col items-center gap-6">
				<h1 className="text-5xl text-black font-bold mt-8 font-poppins">NeuroMap</h1>
				<Image src={Brain} alt="Imagem do cérebro" width={320} height={320} />
			</div>
			<div className="flex flex-col gap-5 text-lg text-justify mx-20 mt-5">
				<p>Seja bem-vindo(a) ao NeuroMap! Este website tem como propósito proporcionar um entendimento acessível sobre o cérebro e seu funcionamento, direcionado especialmente a pessoas leigas no assunto. Contudo, o conteúdo aqui apresentado também pode ser enriquecedor para aqueles que possuem um conhecimento mais avançado nessa área.</p>
				<p>À esquerda, você encontrará um menu simplificado, o qual visa a facilitar a sua navegação pelo website. Ademais, as fontes relacionadas a cada conteúdo estarão disponíveis ao final de cada página.</p>
				<p>Observação: Em algumas páginas, você se deparará com um bloco de texto intitulado “Facilitador”. Esse bloco tem como objetivo oferecer uma abordagem diferenciada ao tema, fornecer informações complementares ao que foi tratado na página ou apresentar tópicos essenciais para aprimorar a compreensão do assunto em questão.</p>
			</div>
		</main>
	)
}
