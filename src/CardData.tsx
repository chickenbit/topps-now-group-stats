import * as fs from "fs";

export interface CardData {
  number: string | number;
  name: string;
  printRun: number;
  numberOrdered: number;
  otherHits: number;
  blueHits: number;
  purpleHits: number;
  redHits: number;
  orangeHits: number;
  yellowHits: number;
}

export async function loadCardDataFromJson(url: string): Promise<CardData[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: CardData[] = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching or parsing JSON: ${error}`);
    return [];
  }
}

// Function to read JSON file from disk and parse it
export function readCardDataFile(filePath: string): CardData[] {
  try {
    // Read file content
    const data = fs.readFileSync(filePath, "utf-8");

    // Parse JSON into an object
    const jsonData: CardData[] = JSON.parse(data);

    return jsonData;
  } catch (err) {
    console.error(`Error reading or parsing JSON file: ${err}`);
    return [];
  }
}
