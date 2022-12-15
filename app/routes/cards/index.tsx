import { useLoaderData } from "@remix-run/react";
import Airtable from "airtable";

//Airtable.configure({ apiKey: "" }); // DO NOT COMMIT!
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID ?? ""
);

export const loader = async () => {
  return base("Imported table")
    .select({
      maxRecords: 5,
      view: "Grid view",
    })
    .all();
};

export default function Cards() {
  const cards: [
    {
      fields: { question: string; section: string; answer: string };
      id: string;
    }
  ] = useLoaderData();
  //console.log(cards);

  return (
    <main>
      <h1>Cards</h1>
      <ul className="card">
        {cards.map((card) => (
          <li key={card.id}>{card.fields.question}</li>
        ))}
      </ul>
    </main>
  );
}
