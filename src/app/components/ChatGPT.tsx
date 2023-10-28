"use client"

import { useState } from "react";
import axios from "axios";

export default function ChatGPT() {
    const [response, setResponse] = useState<any>();
    const [question, setQuestion] = useState("");

    const fetch = async () => {
        const completion = await axios.post("http://localhost:3000/api/chatgpt", {
            question: question
        })

        setResponse(JSON.stringify(completion.data));
    }

    return (
        <div className="flex flex-col items-center gap-10 mb-10">
            <div className="flex gap-4">
                <input
                    className="p-3 rounded-lg outline-none w-[600px]"
                    type="text"
                    maxLength={100}
                    placeholder="Faça uma pergunta sobre o cérebro... (máximo 100 caracteres)"
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <button
                    className={question == "" ? "bg-zinc-500 rounded-lg p-3 text-white" : "bg-black rounded-lg p-3 text-white hover:brightness-125 hover:scale-105 transition-all"} 
                    disabled={question == ""}
                    onClick={fetch}
                >Enviar</button>
            </div>
            <div className="w-full h-full border border-black rounded-lg p-3">
                <strong>Resposta: </strong>
                <span>{response}</span>
            </div>
        </div>
    )
}