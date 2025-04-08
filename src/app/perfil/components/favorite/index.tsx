"use client"

import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";

export default function FavoriteCard(){

    const [input, setInput] = useState("")
    const [showInput, setShowInput] = useState(false)
    const [gameName, setGameName] = useState("")

    function handleButton(){
        setShowInput(!showInput)
        if(input !== ""){
            setGameName(input)
        }
        setInput("")
    }

    return(
        <div className="w-full min-h-44 bg-gray-800 p-4 text-white rounded-lg flex flex-col justify-between">
            {
                showInput ? (
                    <div className="flex items-center justify-center gap-3">
                        <input 
                            className="w-full rounded-md h-8 text-white outline-0 bg-gray-700 px-2"
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        ></input>
                        <button onClick={handleButton}>
                            <FiX size={24} color="#fff"></FiX>
                        </button>

                    </div>
                ) : (
                    <button
                        onClick={handleButton} 
                        className="cursor-pointer self-start hover:scale-110 duration-300 transition-all">
                        <FiEdit size={24} color="#fff"></FiEdit>
                    </button>
                )
            }

            {
                gameName && (
                    <div>
                        <span className="text-white">Jogo favorito:</span>
                        <p className="font-bold text-white">{gameName}</p>
                    </div>
                )
            }

            {
                !gameName && (
                    <p className="font-bold text-white">Adicionar jogo</p>
                )
            }
            
        </div>
    )
}