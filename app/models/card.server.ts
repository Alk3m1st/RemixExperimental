import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID ?? ""
);

export const getCards = async () => {
  return base("Imported table")
    .select({
      maxRecords: 5,
      view: "Grid view",
    })
    .all();
};
