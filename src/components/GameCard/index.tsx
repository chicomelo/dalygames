import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";

interface GameCardProps{
    data: GameProps
}

export function GameCard({data}: GameCardProps){
    return(
        <Link
            href={`/game/${data.id}`} 
            className="p-4 mb-4 bg-slate-100 rounded-lg">
            <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
                <Image
                    src={data.image_url}
                    alt={data.title}
                    quality={100}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 64vw"
                    className="rounded-lg object-cover"
                ></Image>
            </div>
            <div className="flex items-center mt-4 justify-between">
                <p className="text-sm font-bold text-ellipsis trancate whitespace-nowrap overflow-hidden">{data.title}</p>
                <BiRightArrowCircle size={24} color="#000"></BiRightArrowCircle>
            </div>
        </Link>
    )
}