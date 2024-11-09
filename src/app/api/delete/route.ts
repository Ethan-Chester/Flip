import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { word } = body;

        if (!word) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const connection = await mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
        });

        // Destructure query result and use appropriate type
        const [deleteResult] = await connection.query<mysql.ResultSetHeader>(
            'DELETE FROM Words WHERE word = ?',
            [word]
        );

        const affectedRows = deleteResult.affectedRows;

        await connection.end();

        if (affectedRows > 0) {
            return NextResponse.json({ success: true }, { status: 200 });
        } else {
            return NextResponse.json({ error: 'Word not found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error performing the database operation: ', error);
        return NextResponse.json({ error: 'Database query failed' }, { status: 500 });
    }
}
