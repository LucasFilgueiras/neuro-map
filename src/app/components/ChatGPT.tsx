"use client"

import { useState } from "react";
import OpenAI from "openai";

export default function ChatGPT() {
    const [response, setResponse] = useState<any>();
    const [question, setQuestion] = useState("");

    const fetch = async () => {
        const openai = new OpenAI({
            apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true
        });
            
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: question }],
            model: "gpt-3.5-turbo",
        });
           
        setResponse(completion?.choices[0].message.content)
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