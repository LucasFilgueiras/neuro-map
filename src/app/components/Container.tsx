"use client"

import Image from "next/image";
import HumanBrain from "../../../public/human_brain.png"
import { useState } from "react";
import Menu from "./Menu";
import MenuOpen from "../../../public/menu-open.svg"
import MenuClose from "../../../public/menu-close.svg"
import "./container.css"

export default function Container({ children, title }: { children: any, title: string }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="mx-28 mt-10">
                <header>
                    <h1 className="text-3xl">{title}</h1>
                </header>
                <main className="flex items-start text-justify mt-10 gap-10">
                    {children}
                    <Image src={HumanBrain} alt="cérebro humano" className="brain" width={400} height={400} />
                </main>
                <footer className="mt-10">
                    <span>Fontes: <a className="text-blue-600 underline" href="https://pubmed.ncbi.nlm.nih.gov/">https://pubmed.ncbi.nlm.nih.gov/</a> | <a className="text-blue-600 underline" href="https://www.ninds.nih.gov/">https://www.ninds.nih.gov/</a> | <a className="text-blue-600 underline" href="https://www.sfn.org/">https://www.sfn.org/</a> | <a className="text-blue-600 underline" href="https://brain.harvard.edu/">https://brain.harvard.edu/</a> | <a className="text-blue-600 underline" href="https://dana.org/">https://dana.org/</a> | <a className="text-blue-600 underline" href="https://neuroscience.berkeley.edu/">https://neuroscience.berkeley.edu/</a></span>
                </footer>
            </div>
            {open && <span className="sidebar"><Menu /></span>}
			<Image src={open ? MenuClose : MenuOpen} alt="Menu" className={`menu fixed top-3 left-4 cursor-pointer`} width={30} height={30} onClick={() => setOpen(!open)} />
        </>
    )
}