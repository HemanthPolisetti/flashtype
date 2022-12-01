import React, { useEffect } from 'react'
import './App.css';
import Navbar from '../Nav/Navbar'
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';

const apiUrl="http://metaphorpsum.com/paragraphs/1/9";
function App() {
  let [state,setState]=React.useState({
    selectedParagraph:'Hello World',
    words:0,
    char:0,
    wpm:0,
    testInfo:[]
  })
let totalTime=60;
  let [timeRemaining,setTimeRemaining]=React.useState(totalTime)
  let [timeStarted,setTimeStarted]=React.useState(false)
  const selectedParagraphArray=state.selectedParagraph.split("")
  const testInfo=selectedParagraphArray.map(selectedLetter => {
    return{
      testLetter:selectedLetter,
      status:'unAttempt'
    }
  })
  
const startTime=()=>{
  
}
{React.useEffect(()=>{
      setTimeStarted(true);
      const timer=setInterval(()=>{
        if (timeRemaining>0){
          setTimeRemaining(timeRemaining-1)
        }
      },1000)
      return ()=> clearInterval(timer)
    },[timeRemaining]);
}
  const handleInputChange=(inputValue)=>{
    Starttimer()
  }
  return (
    <div className='app'>
      <Navbar />
      <Landing />
      <ChallengeSection selectedParagraph={state.selectedParagraph} timeStarted={timeStarted} 
      timeRemaining={timeRemaining} words={state.words} char={state.char} wpm={state.wpm} testInfo={testInfo} 
      handleInputChange={handleInputChange}/>
      <Footer />
  </div>
    )
}
export default App;
