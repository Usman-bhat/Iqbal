// route.js
// Import the necessary modules for SQLite
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Initialize a variable to hold the SQLite database connection
let db = null;

// Handler for GET requests to retrieve all todos
export async function GET(req, res) {
  // Open a new connection if there is none
  if (!db) {
    db = await open({
      filename: "data.db",
      driver: sqlite3.Database,
    });
  }

  // Query to get all todos from the "todo" table
  const todos = await db.all("SELECT * FROM BOOKS");

  // Return the todos as a JSON response with a 200 status code
  return new Response(JSON.stringify(todos), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}
