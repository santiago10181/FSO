import { useState } from 'react'

const Statistics = ({good,neutral,bad,total,average,positive})=>{
  return(
    <div>
      <Good add={good}/>
      <Neutral neu={neutral} />
      <Bad rest={bad} />
      <tr><td><p>all</p></td><td>{total}</td> </tr>
      <tr><td><p>average</p></td><td>{average}</td> </tr>
      <tr><td><p>positive </p></td><td>{positive}%</td></tr>
    </div>
  )
}

const Good = ({add}) =>{return  <tr><td><p>good</p></td> <td>{add}</td></tr> }
const Neutral = ({neu}) =>{return <tr><td><p>neutral</p></td> <td>{neu}</td></tr>}
const Bad = ({rest}) =>{return <tr><td><p>bad</p></td> <td>{rest}</td></tr>}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  

  const hand_good= () => {
    setGood(good + 1)
  }
  const hand_neutral= () => {
    setNeutral(neutral + 1)
  }
  const hand_bad= () => {
    setBad(bad + 1)

  }
const total = good + bad + neutral
const average = total ? (good - bad) / total : 0
const positive = total ? (good / total) * 100 : 0

  return (
    <div>
      <table>
      <thead><h1>Give Feedback</h1></thead>  
      <tr>
        <button onClick={hand_good}>good</button>
        <button onClick={hand_neutral}>neutral</button> 
        <button onClick={hand_bad}>bad</button>
      </tr> 
      <thead><h2>Statistics</h2></thead>
      {total? 
      <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} positive={positive}/>
      : <tr><p>No feedBack given</p></tr>}
      </table>
    </div>
    )
}

export default App