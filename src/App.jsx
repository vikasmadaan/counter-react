import { useCallback, useState } from 'react'
import './App.css'
import Button from './components/Button/Button'

//using functional components so as to use react hooks
function App() {
  //initialising the state with value 0
  const [count, setCount] = useState(0)

  //text that will appear on the button
  const labelButton = "Increment Count"
  
  //click handler for the button
  //we are using memoized callback function to avoid the re-rendering 

  const handleClick = useCallback(()=>{
    //updating state using functional form 
    setCount(prevCount => prevCount+1);
  },[]);

  //return html content to be displayed
  return (
    <>
    <div className='container'>
      <h1 className='counter'>Counter: {count}</h1>
      <Button onClick={handleClick} label={labelButton}></Button>
    </div>
    </>
  )
}

export default App
