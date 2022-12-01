import React from 'react';
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './Test.css';

export default function Test({selectedParagraph,timeRemaining,timeStarted,words,char,wpm,testInfo,handleInputChange}){
    return(
        <div className="test-challenge">
            <div className="details-container">
                <ChallengeCard cardName="Words" cardValue={words} />
                <ChallengeCard cardName="Characters" cardValue={char}/>
                <ChallengeCard cardName="Speed" cardValue={wpm}/>
            </div>
            <div className="test-cont">
                <TypingChallenge selectedParagraph={selectedParagraph}
                timeStarted={timeStarted}
                timeRemaining={timeRemaining}
                testInfo={testInfo}
                handleInputChange={handleInputChange}
                 />
            </div>
        </div>
    )
}