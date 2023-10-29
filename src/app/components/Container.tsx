"use client"

import Image from "next/image";
import { useState } from "react";
import Menu from "./Menu";
import MenuOpen from "../../../public/menu-open.svg"
import "./container.css"
import Scene from "./Scene";
import { MdClose } from "react-icons/md";

export default function Container({ children, title }: { children: any, title: string }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="mx-12 mt-10">
                <header className="flex justify-center">
                    <h1 className="text-3xl">{title}</h1>
                </header>
                <main className="flex text-justify mt-10 gap-10">
                    <span><Scene /></span>
                    <div className="content h-screen overflow-y-auto px-4">
                        <span>{children}</span>
                        <footer className="mt-5 mb-36 text-left">
                            <span>Fontes: <a className="text-blue-600 underline" href="https://pubmed.ncbi.nlm.nih.gov/">https://pubmed.ncbi.nlm.nih.gov/</a> | <a className="text-blue-600 underline" href="https://www.ninds.nih.gov/">https://www.ninds.nih.gov/</a> | <a className="text-blue-600 underline" href="https://www.sfn.org/">https://www.sfn.org/</a> | <a className="text-blue-600 underline" href="https://brain.harvard.edu/">https://brain.harvard.edu/</a> | <a className="text-blue-600 underline" href="https://dana.org/">https://dana.org/</a> | <a className="text-blue-600 underline" href="https://neuroscience.berkeley.edu/">https://neuroscience.berkeley.edu/</a></span>
                        </footer>
                    </div>
                </main>
            </div>
            {open && <Menu />}
			{open ?
				<MdClose 
					className={`fixed top-3 left-4 cursor-pointer hover:scale-110 transition-all text-white text-3xl`}
					onClick={() => setOpen(!open)}
				/>
				:
				<Image
					src={MenuOpen} 
					alt="Menu"
					className={`fixed top-3 left-4 cursor-pointer hover:scale-110 transition-all`}
					width={30}
					height={30}
					onClick={() => setOpen(!open)}
				/>
			}
        </>
    )
}