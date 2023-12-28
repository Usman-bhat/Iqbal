import sqlite3 from "sqlite";
import { open } from "sqlite";

let db = null;

interface PoemID {
  poemId: string;
}

export async function GET(request: NextRequest, { params }: { params: PoemID }) {
  if (!db) {
    db = await open({
      filename: "../../data.db",
      driver: sqlite3.Database,
    });
  }

  const todos = await db.all("SELECT _id, title, data FROM POEMS where _id = ?", params.poemId);

  return new Response(JSON.stringify(todos), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}
