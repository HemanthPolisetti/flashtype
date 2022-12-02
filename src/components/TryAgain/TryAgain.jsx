import React from 'react';
import './TryAgain.css';

export default function TryAgain({words,char,wpm,startAgain}){
    return(
        <div className="Tryagain-Cont">
            <h1 className="testheading">Test Results</h1>
            <div className="result-cont">
                <p><b>Words:</b>{words}</p>
                <p><b>Characters:</b>{char}</p>
                <p><b>Speed:</b>{wpm}</p>
            </div>
            <div>
            <button className="end-buttons re-try" >Re-Try</button>
            <button onClick={()=>{
                window.open(
                "https://www.facebook.com/sharer/sharer.php?u=",
                "facebook-share-dialog",
                "width=800,height=600")
            }}
            className="end-buttons share">Share</button>
               <button
                    onClick={() =>
                        window.open(
                            "https://twitter.com/intent/tweet?text=Check%20this%20out%20",
                            "Twitter",
                            "width=800,height=600"
                        )
                    }
                    className="end-buttons tweet-btn"
                >
                    Tweet
                </button>
                </div>
        </div>
    )
    }