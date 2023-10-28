import 'dotenv/config'
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
    try {
        const openai = new OpenAI({
            apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true
        });

        const { question } = await req.json();
            
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: question }],
            model: "gpt-3.5-turbo",
        });
           
        return NextResponse.json(completion?.choices[0].message.content, { status: 200 })
    } catch (error) {
        return NextResponse.json(error)
    }
}