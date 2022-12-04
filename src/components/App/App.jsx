import React, { useEffect } from 'react'
import './App.css';
import Navbar from '../Nav/Navbar'
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import { SAMPLE_PARAGRAPHS } from '../../data/Paragraphs';
const apiUrl="https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text";
function App() {
let totalTime=60;
const [state,setState]=React.useState({
  words:0,
  char:0,
  wpm:0
})
  const [testInfo,setTestInfo]=React.useState([])
  const [selectedParagraph,setSelectedParagraph]=React.useState("HELLO WORLD")
  const [timeRemaining,setTimeRemaining]=React.useState(totalTime)
  const [timeStarted,setTimeStarted]=React.useState(false)

const fetchNewPara=()=>{
    const data1= SAMPLE_PARAGRAPHS[Math.floor(Math.random()*SAMPLE_PARAGRAPHS.length)];
    const selectedParagraphArray = data1.split("");
    const temp = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "unAttempt",
      };
    });
    setTestInfo(temp);
    setSelectedParagraph(data1)
  }

const myComponent=()=>{
  fetch(apiUrl)
  .then((response) => response.text())
  .then((data) => {
    const selectedParagraphArray = data.split("");
    const temp = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "unAttempt",
      };
    });
    setTestInfo(temp);
    setSelectedParagraph(data);
  });
}
const startAgain=()=>myComponent()

useEffect(() => {
    fetchNewPara()
},[]);

const handlerevents=(inputValue)=>{
  
    const char=inputValue.length;
    const words=inputValue.split(" ").length;
    const index=char-1;
    const timeSpent=(totalTime-timeRemaining)
    const speed=(timeSpent>0)?((state.words/timeSpent)*totalTime):0
    const wpm=parseInt(speed)
    if(index<=0){
      setTestInfo({
        testLetter:testInfo[0].testLetter,
        status:"unAttempt"
      })
      setTestInfo(testInfo)
      setState({words:0,char:0,wpm:0})
    }
    if(index>=selectedParagraph.length){
      setState({words:words,char:char,wpm:wpm})
      return;
    }
    const testInfor=testInfo;
    if(!(index===selectedParagraph-1))
      testInfor[index+1].status="unAttempt"
    const isCorrect=inputValue[index]===testInfor[index].testLetter;
    testInfor[index].status = isCorrect ? "correct" : "incorrect"
    setTestInfo(testInfor)
    setState({words:words,char:char,wpm:wpm})
    
}
const startTimer = () => {
  setTimeStarted(true);
  const timer = setInterval(() => {
      if (timeRemaining > 0) {
           setTimeRemaining((timeRemaining)=>{
            return (timeRemaining-1);});
          }
      else {
          clearInterval(timer);
      }
  },1000);
};

const handleInputChange=(inputValue)=>{
  if(!timeStarted)startTimer();
  handlerevents(inputValue)
  }
  return (
    <div className='app'>
      <Navbar />
      <Landing />
      <ChallengeSection selectedParagraph={selectedParagraph} timeStarted={timeStarted} 
      timeRemaining={timeRemaining} words={state.words} char={state.char} wpm={state.wpm} testInfo={testInfo} 
      handleInputChange={handleInputChange} startAgain={startAgain}/>
      <Footer />
  </div>
    )
}
export default App;
