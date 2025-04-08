import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Label } from "./components/label";
import { GameCard } from "@/components/GameCard";
import { Metadata } from "next";

type PageParams = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { id } = await params;

  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, {
      next: { revalidate: 60 }
    });

    const data = await response.json();

    return {
      title: `${data.title} - Daly Games`,
      description: data.description
        ? `${data.description.slice(0, 100)}...`
        : "Descubra jogos incríveis para se divertir",
      openGraph: {
        title: data.title,
        images: data.image_url ? [data.image_url] : []
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true
        }
      }
    };
  } catch {
    return {
      title: "Daly Games - Descubra jogos incríveis para se divertir"
    };
  }
}

async function getData(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, {
      next: { revalidate: 60 }
    });
    return await res.json();
  } catch {
    throw new Error("Failed to fetch game data");
  }
}

async function getGameSorted() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {
      cache: "no-store"
    });
    return await res.json();
  } catch {
    throw new Error("Failed to fetch sorted game");
  }
}

export default async function Game(pageProps: PageParams) {
  const { id } = await pageProps.params;

  const data: GameProps = await getData(id);
  const sortedGame: GameProps = await getGameSorted();

  if (!data) redirect("/");

  return (
    <main className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          src={data.image_url}
          alt={data.title}
          priority
          quality={100}
          fill
          className="h-80 sm:h-96 object-cover opacity-70"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 64vw"
        />
      </div>

      <Container>
        <h1 className="font-bold text-3xl my-6">{data.title}</h1>
        <p>{data.description}</p>

        <h2 className="font-bold text-lg mt-8 mb-4">Plataformas</h2>
        <div className="flex gap-2 flex-wrap">
          {data.platforms.map((item) => (
            <Label key={item}>{item}</Label>
          ))}
        </div>

        <h2 className="font-bold text-lg mt-8 mb-4">Categorias</h2>
        <div className="flex gap-2 flex-wrap">
          {data.categories.map((item) => (
            <Label key={item}>{item}</Label>
          ))}
        </div>

        <p className="mt-8 mb-4">
          <strong>Data de lançamento:</strong> {data.release}
        </p>

        <h2 className="font-bold text-lg mt-8 mb-4">Jogo recomendado:</h2>

        <div className="flex">
          <div className="flex-grow">
            <GameCard data={sortedGame} />
          </div>
        </div>
      </Container>
    </main>
  );
}
