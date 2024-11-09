'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons';
import { faFaceMeh } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link'

interface DataItem{
  word: string;
  definition: string;
  pos: string;
  pronunciation: string;
  confidence: number;
}

export default function Quiz(){
    const router = useRouter();
    const [selectedWord, setSelectedWord] = useState<DataItem>({
      word: '',
      definition: '',
      pos: '',
      pronunciation: '',
      confidence: 0
    });
    const [data, setData] = useState<DataItem[]>([]); 
    const [totalWords, setTotalWords] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    // fetch data
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response: Response = await fetch('/cards.json');
    //       if (!response.ok) {
    //         throw new Error(`Failed to fetch a response: ${response.statusText}`);
    //       }
    //       const jsonData = await response.json();
    //       const wordArray: DataItem[] = jsonData.words;
    //       console.log('Fetched data:', wordArray); 
    
    //       setData(wordArray); 
    //       setTotalWords(wordArray.length)
    //     } catch (error) {
    //       console.error('Error fetching JSON: ', error);
    //     }
    //   };
    
    //   fetchData();
    // }, []);


    useEffect(() => {
      const fetchWords = async () => {
        try {
          const response = await fetch('/api/words');
          const responseData = await response.json();
          setData(responseData);
          setTotalWords(responseData.length)
          
        } catch (error) {
          console.error('Error fetching words:', error);
        }
      };
  
      fetchWords();
    }, []);
    
    // Wait for fetch to call update the word
    useEffect(() => {
      updateWord()
      console.log("data:", data)
      console.log("total words:", totalWords)
    }, [data]);

    //Flip card back and forth
    const flipCard = () => {
        setIsFlipped(!isFlipped)
        //may remove with new algo
        if(data.length <= 0){
          router.push('/cards');
        }
      };
    const flipBackEasy = () => {
        selectedWord.confidence -= 1
        setTimeout(() => {
            if (selectedWord.confidence <= 0){
              deleteWord()
            }
            console.log(data)
            updateWord()
            setIsFlipped(!isFlipped)
        }, 200)  
    }
    const flipBackMedium = () => {
      setTimeout(() => {
          // selectedWord.confidence += 1
          console.log(data)
          updateWord()
          setIsFlipped(!isFlipped)
      }, 200)  
  }
  const flipBackHard = () => {
    setTimeout(() => {

        selectedWord.confidence += 1
        console.log(data)
        updateWord()
        setIsFlipped(!isFlipped)
    }, 200)  
}

    function deleteWord(){
      const updatedData = [...data]
      updatedData.splice(data.findIndex(item => item.word === selectedWord.word), 1)
      setData(updatedData);
    }

    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }
    
    const updateWord = () =>{
      const randNum = getRandomInt(data.length)
      console.log("Rand Number: ", randNum)
      changeWordByIndex(randNum)
    }

    const changeWordByIndex = (index: number) => {
      if (index >= 0) {
        setSelectedWord(data[index]);
      } else {
        console.error('Index out of range');
      }
    };

    const percentageRight =
    totalWords > 0 ? parseFloat(((((totalWords - data.length) / totalWords) * 100).toFixed(0))) : 0;

    return (
      <div>
        <Link href={"/cards"} className='m-3 font-noto bg-background2 p-2 mb-12 rounded-xl'>Back</Link>
        <div className="flex flex-col justify-between h-[95vh] w-full px-5">
        
        <h1 className="font-noto flex justify-center text-2xl mt-5">
          {percentageRight}% | {data.length}/{totalWords} Cards Left
        </h1>
        <hr className="ml-10 mr-10 border-1 border-black" />
        
        <div className="flex flex-col justify-center items-center flex-grow w-full">
          <div
            className={`flex-col flex justify-center w-full h-[28vh] border-2 border-black p-5 pt-12 pb-12 rounded-2xl transition-transform duration-200 ${isFlipped ? 'bg-background' : 'bg-background2'} max-w-screen"`}
            style={{
              transform: isFlipped ? 'perspective(300px) rotateY(180deg)' : 'rotateY(0deg)',
            }}>

            <h3 className={`${isFlipped ? 'font-noto hidden' : 'font-noto'}`}>
              {!isFlipped && selectedWord?.pos ? selectedWord.pos : ''}
            </h3>

            <h1
              className={`${
                isFlipped
                  ? 'font-noto text-3xl text-center transition-all'
                  : 'font-noto transition-all text-4xl leading-snug text-left max-w-[16ch]'
              }`}
              style={{ transform: isFlipped ? 'rotateY(-180deg)' : '' }}
            >
              {isFlipped ? selectedWord?.definition || '' : selectedWord?.word || ''}
            </h1>

            <h2 className={`${isFlipped ? 'hidden' : ''}`}>
              {!isFlipped && selectedWord?.pronunciation ? selectedWord.pronunciation : ''}
            </h2>

            </div>
        </div>

        {!isFlipped && (
          <div className="flex justify-center w-full transition-all duration-100">
            <div className={`inline-flex h-[50px] w-full max-w-screen border-2 border-black rounded-full items-center justify-center mb-12 ${data.length === 0 ? "bg-background" : ""}`}>
              <div className="font-noto w-full flex justify-center items-center text-center font-bold" onClick={flipCard}>
                {data.length === 0 ? "Done" : "Flip"}
              </div>
            </div>
          </div>
        )}

        {isFlipped && (
            <div className="flex flex-row justify-center mb-10 transition-all duration-170 transition-all">
            <div className="ml-7 mr-7 w-[60px] h-[60px] flex hover:text-2xl items-center justify-center">
                <FontAwesomeIcon icon={faFaceSmile} size='3x' onClick={flipBackEasy}/>
            </div>
            <div className="ml-7 mr-7 w-[60px] h-[60px] flex hover:text-2xl items-center justify-center">
                <FontAwesomeIcon icon={faFaceMeh} size='3x' onClick={flipBackMedium}/>
            </div>
            <div className="ml-7 mr-7 w-[60px] h-[60px] flex hover:text-2xl items-center justify-center">
                <FontAwesomeIcon icon={faFaceFrown} size='3x' onClick={flipBackHard}/>
            </div>
            </div>
        )}

        </div>
      </div>
      
      
    );
  
}