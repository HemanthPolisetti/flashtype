import React from 'react';
import Test from '../Test/Test';
import TryAgain from '../TryAgain/TryAgain';
import './TestContainer.css';
export default function TestContainer({selectedParagraph,timeRemaining,timeStarted,words,char,wpm,testInfo,handleInputChange,startAgain}){
    
    return( <div className="testcontainer">
        {timeRemaining > 0 ? (
            <div data-aos="fade-down" className="typing-challenge-cont">
                <Test selectedParagraph={selectedParagraph} timeRemaining={timeRemaining} timeStarted={timeStarted}
                 words={words} char={char} wpm={wpm} testInfo={testInfo} handleInputChange={handleInputChange} />
            </div>
        ) : (
        <div className="tryagain-cont">
         <TryAgain words={words} char={char} wpm={wpm} startAgain={startAgain}/>
        </div>)}
        </div>
        
    )
}