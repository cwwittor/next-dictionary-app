import { cache } from "memory-cache"; // Import the caching library

export default async function handler(req, res) {
  const { query } = req.body;

  try {
    // Check if the data is present in the cache
    const cachedData = cache.get(query);
    if (cachedData) {
      // If cached data exists, return it
      res.status(200).json(cachedData);
      return;
    }

    const staticData = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`,
      { cache: "no-store" }
    );

    if (!staticData.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await staticData.json();

    // Store the data in the cache
    cache.put(query, data);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
