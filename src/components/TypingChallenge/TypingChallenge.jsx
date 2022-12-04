import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import './TypingChallenge.css';

export default function TypingChallenge({selectedParagraph,timeRemaining,timeStarted,testInfo,handleInputChange}){
    return(
        <div className="typing-challenge">
            <div className="timer-cont">
                <div className="timer">00:{timeRemaining>=10 ? timeRemaining : `0${timeRemaining}`}</div>
                <div className="timer-info">
                    {!timeStarted && "Start Typing To Start the Test"}
                    </div>
            </div>
            <div className="textarea-cont">
                    <div className="textarea-left">
                    <div className="textarea text-para">
                        {testInfo.map((individualItems,index)=>{
                           return( <>
                            <span>
                            <span> 
                            <TestLetter key={index} individualItems={individualItems}/>
                            </span>
                            </span>
                            
                            </>)
                        })}
                        </div>
                    </div>
                    <div className="textarea-right">
                        <textarea className="textarea" placeholder='Start Typing' onChange={(e)=>handleInputChange(e.target.value)}>
                        </textarea>
                    </div>
            </div>
            
        </div>
    )
}