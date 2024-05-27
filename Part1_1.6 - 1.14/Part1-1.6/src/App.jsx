import { useState } from 'react'

const Good = ({add}) =>{return <p>good {add}</p>}
const Neutral = ({neu}) =>{return <p>neutral {neu}</p>}
const Bad = ({rest}) =>{return <p>bad {rest}</p>}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const hand_good= () => {
    setGood(good + 1)
    average(good,bad)
  }
  const hand_neutral= () => {
    setNeutral(neutral + 1)
    average(good,bad)
  }
  const hand_bad= () => {
    setBad(bad + 1)

  }
const total = good + bad + neutral
const average = total ? (good - bad) / total : 0
const positive = total ? (good / total) * 100 : 0

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={hand_good}>good</button>
      <button onClick={hand_neutral}>neutral</button>
      <button onClick={hand_bad}>bad</button>
      <h2>Statistics</h2>
      <Good add={good}/>
      <Neutral neu={neutral} />
      <Bad rest={bad} />
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
    )
}

export default App