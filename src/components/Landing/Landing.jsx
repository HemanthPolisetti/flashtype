import React from 'react';
import './Landing.css'
import flash from './../../assets/flash.png';
import AOS from 'aos'
import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
export default function Landing(){
    useEffect(()=>{
        AOS.init({duration:900})
    },[]);
    return(
        <div className='Container'>
            <div data-aos="fade-right">
            <h1  className='Text'>Can You Type..?</h1>
            <div className='Changing-text'>
            <Typewriter 
                    options={{
                    strings: ['Fast','Correct','Accurate'],
                    autoStart: true,
                    loop: true,
                    }}
                    /></div>

            </div>
            <div data-aos="fade-left">
            <img src={flash} className='Image'></img>
            </div>
        </div>
        
    )
}
