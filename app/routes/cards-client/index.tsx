import Airtable from "airtable";
import type { AirtableBase } from "airtable/lib/airtable_base";
import { useEffect, useState } from "react";

type Card = {
  fields: { question: string; section: string; answer: string };
  id: string;
};

export default function CardsClient() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    let base: AirtableBase;
    if (typeof window !== "undefined") {
      console.log(window);
      base = new Airtable({ apiKey: window.ENV.AIRTABLE_API_KEY }).base(
        window.ENV.AIRTABLE_BASE_ID ?? ""
      );
    }

    const fetchCardsClient = async () => {
      const data = await base("Imported table")
        .select({
          maxRecords: 5,
          view: "Grid view",
        })
        .all();
      const result = data.map((d) => {
        return {
          fields: {
            question: d.fields.question as string,
            section: d.fields.section as string,
            answer: d.fields.answer as string,
          },
          id: d.id,
        };
      });

      setCards(result);
    };

    fetchCardsClient().catch(console.error);
  }, []);

  return (
    <>
      <h1>Cards (Client-Side)</h1>
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
    </>
  );
}
