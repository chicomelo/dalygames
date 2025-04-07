export const dynamic = "force-dynamic";

import { Container } from "@/components/container";
import { GameCard } from "@/components/GameCard";
import { Input } from "@/components/input";
import { GameProps } from "@/utils/types/game";

async function getData(title: string) {
  const decodeTitle = decodeURI(title);

  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`
    );
    return res.json();
  } catch (err) {
    return null;
  }
}

// define tipo fora da função
type PageProps = {
  params: {
    title: string;
  };
};

export default async function Search(props: PageProps) {
  const title = props.params?.title;

  const games: GameProps[] = await getData(title);

  return (
    <main className="w-full text-black">
      <Container>
        <Input />

        <h2 className="font-bold text-xl mt-8 mb-4">
          Veja o que encontramos na nossa base:
        </h2>

        {!games && <p>Esse jogo não foi encontrado ...</p>}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games &&
            games.map((item) => (
              <GameCard key={item.id} data={item} />
            ))}
        </section>
      </Container>
    </main>
  );
}
