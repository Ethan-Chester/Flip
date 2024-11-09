'use client';
import Link from 'next/link'
import { useState } from 'react';


export default function AddCards(){
    const [formData, setFormData] = useState({
        word : '',
        pos : '',
        definition : '',
        pronunciation : '',
        confidence : 2
    })

    const postWords = async () => {
        try {
        const requestData = formData
    
        await fetch('/api/words', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
    
        } catch (error) {
        console.error('Error posting words:', error);
        }
    };
    



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
    };


    
    return(
        <div>
            <Link href="/cards" className="m-3 font-noto bg-background2 p-2 mb-12 rounded-xl">Back</Link>
            <form className="flex flex-col" id='card-form' onSubmit={postWords}>
                <h1 className="font-noto flex justify-center text-2xl">Add a Word:</h1>
                <input required type="text" value={formData.word} name="word" onChange={handleInputChange} placeholder="Enter word" className="placeholder:text-center text-center font-noto border-2 border-black ml-8 mr-8 m-4 rounded-xl"/>
                <input required type="text" value={formData.pos} name="pos" onChange={handleInputChange} placeholder="Enter part of speech (adj.)" className="placeholder:text-center text-center font-noto border-2 border-black ml-8 mr-8 m-4 rounded-xl"/>
                <input required type="text" value={formData.pronunciation} name="pronunciation" onChange={handleInputChange} placeholder="Enter Pronunciation" className="placeholder:text-center text-center font-noto border-2 border-black ml-8 mr-8 m-4 rounded-xl"/>
                <textarea required maxLength={150} name="definition" placeholder="Enter definition" className="h-32 placeholder:text-center text-center font-noto border-2 border-black ml-8 mr-8 m-4 rounded-xl" value={formData.definition} onChange={handleInputChange}/>
            </form>
            <div className='flex justify-center mt-6'>
                <button className='flex justify-center bg-background2 p-2 pl-10 pr-10 font-noto rounded-xl' type='submit' form='card-form' value="Submit">Add</button>
            </div>
            
        </div>
    );
}