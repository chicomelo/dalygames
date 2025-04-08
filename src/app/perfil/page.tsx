import { Container } from "@/components/container";
import userImg from '../../../public/user.png'
import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";
import FavoriteCard from "./components/favorite";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Meu perfil - Daly Games",
    description: "Meu perfil - Daly Games sua plataforma de jogos"
}

export default function Profile(){
    return(
        <main className="w-full text-black">
            
            <Container>
                <section className="
                    mt-8 mb-6
                    flex flex-col items-center sm:items-start justify-between
                    relative gap-3
                    sm:flex-row
                    ">
                    <div className="
                        w-full text-lg
                        flex items-center gap-6 flex-col sm:flex-row
                        justify-center sm:justify-normal
                        ">
                        <Image
                        src={userImg}
                        alt="Imagem perfil do usuário"
                        className="rounded-full w-42 h-42 object-cover"
                        ></Image>
                        <h1 className="font-bold text-2xl">Nome do usuário</h1>
                    </div>

                    <div className="flex gap-3 flex-items-center justify-center my-3 sm:my-0">
                        <button className="cursor-pointer bg-gray-700 px-4 py-3 rounded-lg text-white">
                            Configurações
                        </button>
                        <button className="cursor-pointer bg-gray-700 px-4 py-3 rounded-lg">
                            <FaShareAlt size={24} color="#fff"></FaShareAlt>
                        </button>
                    </div>
                </section>


                <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <FavoriteCard />
                    <FavoriteCard />
                    <FavoriteCard />
                </section>
            </Container>

        </main>
    )
}