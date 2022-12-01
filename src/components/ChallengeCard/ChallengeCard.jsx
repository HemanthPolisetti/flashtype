import React from 'react'
import './ChallengeCard.css'

export default function ChallengeCard({cardName , cardValue}){
        return(
        <div className="details-card-cont">
            <div className="card-name">{cardName}</div>
            <div className="card-value">{cardValue}</div>
        </div>
)}