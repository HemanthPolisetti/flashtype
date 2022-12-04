import React from 'react';
import './TestLetter.css';

export default function TestLetter({individualItems},{testInfo}){
    const status=individualItems.status;
    const statusClass={
        correct:"test-correct",
        incorrect:"test-incorrect",
        unAttempt:"test-unattempt"
    }[status];
    return(
        <span className= {`test-letter ${statusClass}`} > {individualItems.testLetter}</span>
    )
}