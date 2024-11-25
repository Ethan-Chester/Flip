import { db } from '../../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const wordsCollection = collection(db, 'Words');
    const querySnapshot = await getDocs(wordsCollection);
    
    const words = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(words);
  } catch (error) {
    console.error('Error fetching documents:', error);
    return NextResponse.json({ error: 'Failed to fetch documents' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { word, definition, pos, pronunciation, confidence } = body;

    if (!word || !definition || !pos || !pronunciation || !confidence) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const wordsCollection = collection(db, 'Words');
    const docRef = await addDoc(wordsCollection, {
      word,
      definition,
      pos,
      pronunciation,
      confidence,
    });

    return NextResponse.json({ success: true, id: docRef.id }, { status: 201 });
  } catch (error) {
    console.error('Error adding document:', error);
    return NextResponse.json({ error: 'Failed to add document' }, { status: 500 });
  }
}
