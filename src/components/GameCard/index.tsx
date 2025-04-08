import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";

interface GameCardProps {
    data: GameProps;
    className?: string; // opcional e tipado corretamente
  }

  export function GameCard({ data, className }: GameCardProps) {
    return(
        <Link
            href={`/game/${data.id}`} 
            className="block p-4 mb-4 bg-slate-100 rounded-lg">
            <div className={`relative w-full h-56 transition-all duration-300 ${className}`}>
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