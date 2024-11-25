import { NextResponse } from 'next/server';
import { db } from '../../firebase'
import { collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { word } = body;

    if (!word) {
      return NextResponse.json({ error: 'Word is required' }, { status: 400 });
    }

    const wordsCollection = collection(db, 'Words');
    const q = query(wordsCollection, where('word', '==', word));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return NextResponse.json({ error: 'Word not found' }, { status: 404 });
    }

    // Delete each matching document
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error performing the delete operation:', error);
    return NextResponse.json({ error: 'Database query failed' }, { status: 500 });
  }
}
