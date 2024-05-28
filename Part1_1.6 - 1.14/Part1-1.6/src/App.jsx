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