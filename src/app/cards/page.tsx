'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
// import { useRouter } from 'next/navigation';

interface DataItem{
    word: string;
    definition: string;
    pos: string;
    pronunciation: string;
    confidence: number;
}

export default function Categories(){
    const [data, setData] = useState<DataItem[]>([]);
    const [flippedCards, setFlippedCards] = useState(new Array(data.length).fill(false));

    // const router = useRouter();

    useEffect(() => {
        const fetchWords = async () => {
          try {
            const response = await fetch('/api/words');
            const cards = await response.json();
            setData(cards)
          } catch (error) {
            console.error('Error fetching words:', error);
          }
        };
    
        fetchWords();
      }, []);


      const deleteWord = async (word: string) => {
        try {
    
        await fetch('/api/delete', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ word })
        });
        window.location.reload();
    
        } catch (error) {
        console.error('Error posting words:', error);
        }
    };

    const handleFlip = (index: number) => {
        setFlippedCards((prev) => {
          const updatedFlips = [...prev];
          updatedFlips[index] = !updatedFlips[index];
          return updatedFlips;
        });
      };

    return(
        <div>
            <h1 className="font-noto text-3xl flex justify-center mt-6 mb-6 underline">Words</h1>
            <div className="grid grid-cols-1">
            <Link href="/quiz" className='flex justify-center mb-5 font-noto border-2 w-[250px] h-[40px] mx-auto text-2xl rounded-xl border-black'>Practice</Link>
            <div className="relative h-[230px] m-3 rounded-2xl border-2 border-black p-5 pt-12 pb-12 transition-transform duration-200 bg-gray-500 max-w-screen">
                <Link href="add_cards" className='absolute inset-1 text-7xl flex justify-center items-center'>+</Link>
            </div>
            {data.map((card, index: number) => (
            <div
                key={index}
                className={` ${ flippedCards[index] ? "bg-background" : "bg-background2"} h-[230px] m-3 rounded-2xl border-2 border-black p-5 pt-12 pb-12 rounded-2xl transition-transform duration-200 max-w-screen`}
                style={{
                transform: flippedCards[index] ? 'perspective(1000px) rotateY(180deg)' : 'rotateY(0deg)',
                }}
                onClick={() => handleFlip(index)}>
                <h3 className="font-noto flex justify-left">{flippedCards[index] ? "" : card.pos}</h3>
                <h1 className="font-noto flex justify-left text-xl" 
                style={{
                transform: flippedCards[index] ? 'perspective(1000px) rotateY(180deg)' : 'rotateY(0deg)',
                }}
                >{flippedCards[index] ? card.definition : card.word}</h1>
                
                <h2 className='flex justify-left'>{flippedCards[index] ? "" : card.pronunciation}</h2>
                <div className={`flex justify-center mt-10 ${flippedCards[index] ? 'hidden' : ''}`}>
                  <button className='bg-red-500 p-2 rounded-xl' onClick={(e) => {
                    e.stopPropagation();
                    deleteWord(card.word);
                  }}>DELETE</button>
                </div>
                
            </div>
            ))}
            
            </div>
        </div>
    );
}