import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { NextResponse } from 'next/server';

let db = null;

interface PoemID {
    poemId: string;
}

export async function GET(request: NextRequest, { params }: { params: PoemID }) {
    if (!db) {
        db = await open({
            filename: 'data.db',
            driver: sqlite3.Database,
        });
    }

    const todos = await db.all("SELECT _id, title, data FROM POEMS where _id = ?", params.poemId);

    return NextResponse.json(
    { todos },
    {
        status: 200
    }
);
}
