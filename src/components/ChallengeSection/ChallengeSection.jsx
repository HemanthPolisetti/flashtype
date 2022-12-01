import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css';

export default function ChallengeSection({selectedParagraph,timeStarted,timeRemaining,words,char,wpm,testInfo,handleInputChange}){
    return(
        <div>
        <div className="Test-Container">
        <h1 data-aos="fade-down" className="Test-Heading">TAKE A SPEED TEST NOW!</h1>
        <TestContainer selectedParagraph={selectedParagraph} 
        timeStarted={timeStarted} 
        timeRemaining={timeRemaining} 
        words={words} char={char} wpm={wpm}
        testInfo={testInfo}
        handleInputChange={handleInputChange}/>
        </div>
        </div>
    )
}