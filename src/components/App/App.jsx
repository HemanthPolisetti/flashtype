import React, { useEffect } from 'react'
import './App.css';
import Navbar from '../Nav/Navbar'
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';

const apiUrl="https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text";
function App() {
let totalTime=60;
const [state,setState]=React.useState({
  words:0,
  char:0
})
  const [wpm,setWpm]=React.useState(0)
  const [testInfo,setTestInfo]=React.useState([])
  const [selectedParagraph,setSelectedParagraph]=React.useState("Hello World")
  const [timeRemaining,setTimeRemaining]=React.useState(totalTime)
  const [timeStarted,setTimeStarted]=React.useState(false)

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.text())
      .then((data) => {
        setSelectedParagraph(data);
        const selectedParagraphArray = data.split("");
        const temp = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "unAttempt",
          };
        });
        setTestInfo(temp);
      });
  }, []);

const startTimer = () => {
  setTimeStarted(true);
  const timer = setInterval(() => {
      if (timeRemaining > 0) {
           setTimeRemaining((timeRemaining)=>{
            return (timeRemaining-1)
           });}
           if (timeRemaining > 0) {
           const timeSpent=(totalTime-timeRemaining)
            const speed=(timeSpent>0)?((state.words/timeSpent)*totalTime):0
            setWpm((wpm)=>{
                return (wpm=parseInt(speed))})   

      } else {
          clearInterval(timer);
      }
  },1000);
};
const handlerevents=(inputValue)=>{
  const char=inputValue.length;
    const words=inputValue.split(" ").length;
    const index=char-1;
    if(index<=0){
      setTestInfo({
        testLetter:testInfo[0].testLetter,
        status:"unAttempt"
      })
      setTestInfo(testInfo)
      setState({words:0,char:0})
    }
    if(index>=selectedParagraph.length){
      setState({
        char:char,
        words:words})
      return;
    }
    const testInfor=testInfo;
    if(!(index===selectedParagraph-1))
      testInfor[index+1].status="unAttempt"
    const isCorrect=inputValue[index]===testInfor[index].testLetter;
    testInfor[index].status = isCorrect ? "correct" : "incorrect"
    setState({words:words,char:char})
    setTestInfo(testInfor)
    
}

  const handleInputChange=(inputValue)=>{
  if(!timeStarted) startTimer(inputValue);
  handlerevents(inputValue)
    
  }
  return (
    <div className='app'>
      <Navbar />
      <Landing />
      <ChallengeSection selectedParagraph={selectedParagraph} timeStarted={timeStarted} 
      timeRemaining={timeRemaining} words={state.words} char={state.char} wpm={wpm} testInfo={testInfo} 
      handleInputChange={handleInputChange}/>
      <Footer />
  </div>
    )
}
export default App;
