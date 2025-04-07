'use client'

import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler, useState } from "react"
import { FiSearch } from "react-icons/fi"

export function Input(){

    const [input, setInput] = useState("")
    const router = useRouter()

    function handleSearch(e: FormEvent){
        e.preventDefault();
        if(input === "") return

        router.push(`/game/search/${input}`)
        
    }

    return(
        <form onSubmit={handleSearch}
            className="w-full bg-slate-100 my-5 flex gap-2 items-center justify-between rounded-lg p-2">
            <input 
            type="text"
            placeholder="Procurando algum jogo ?"
            value={input}
            onChange={ (e) => setInput(e.target.value)}
            className="outline-0 bg-slate-100 w-11/12"
            ></input>

            <button type="submit" className="cursor-pointer">
                <FiSearch size={24} color="#ea580c"></FiSearch>
            </button>
        </form>
    )
}