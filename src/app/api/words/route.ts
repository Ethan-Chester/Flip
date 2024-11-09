import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });

    const [results]: [mysql.RowDataPacket[], mysql.FieldPacket[]] = await connection.query('SELECT * FROM Words');
    await connection.end();

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error querying the database: ', error);
    return NextResponse.json({ error: 'Database query failed' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { word, definition, pos, pronunciation, confidence } = body;

    if (!word || !definition || !pos || !pronunciation || !confidence) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });

    // Proper typing for INSERT query results
    const [insertResult]: [mysql.ResultSetHeader, mysql.FieldPacket[]] = await connection.query(
      'INSERT INTO Words (word, definition, pos, pronunciation, confidence) VALUES (?, ?, ?, ?, ?)',
      [word, definition, pos, pronunciation, confidence]
    );

    const insertId = insertResult.insertId;

    await connection.end();

    return NextResponse.json({ success: true, insertId: insertId }, { status: 201 });
  } catch (error) {
    console.error('Error inserting into the database: ', error);
    return NextResponse.json({ error: 'Database query failed' }, { status: 500 });
  }
}
