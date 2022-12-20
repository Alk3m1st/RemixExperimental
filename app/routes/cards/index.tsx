import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getCards } from "~/models/card.server";

type Card = {
  fields: { question: string; section: string; answer: string };
  id: string;
};

export const loader: LoaderFunction = async () => {
  return getCards();
};

export default function Cards() {
  const cards: Card[] = useLoaderData();

  return (
    <main className="container mx-auto">
      <h1>Cards</h1>
      <ul className="flex flex-wrap">
        {cards.map((card) => (
          <li
            key={card.id}
            className="basis-1/3 font-sans text-lg rounded-md border-2 border-gray-400 shadow-lg p-4 m-4 hover:bg-gray-200"
          >
            <h2>{card.fields.question}</h2>
            <p>{card.fields.answer}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
