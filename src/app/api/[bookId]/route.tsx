// route.js
// Import the necessary modules for SQLite
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { NextResponse } from 'next/server';

// Initialize a variable to hold the SQLite database connection
let db = null;
interface BookID{
  bookId:string
}
// Handler for GET requests to retrieve all todos
export async function GET(request:NextRequest,{params}:{params:BookId}) {


  if (request.url.length < 0)
        return new Response("Error"); // Unreachable
  
// Open a new connection if there is none
  if (!db) {
    console.log("1Connecting to the database...");
    db = await open({
     
      filename: 'data.db',
      driver: sqlite3.Database,
    });
    console.log("Connected to the database...");
  }

//const {bookId} = params.params.bookId;
 console.log(params.bookId);

  // Query to get all todos from the "todo" table
  const todos = await db.all("SELECT _id,title FROM POEMS where book_id = ? ",params.bookId);

  // Return the todos as a JSON response with a 200 status code
  return NextResponse.json(
    { todos },
    {
        status: 200
    }
);
}

