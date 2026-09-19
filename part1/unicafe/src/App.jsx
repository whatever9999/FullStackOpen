import { useState } from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Statistic = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.name} {props.value}
      </p>
    </>
  )
}

const Statistics = (props) => {
  console.log(props)
  return (
    <>
      <Statistic name={props.options[0].name} value={props.good}/>
      <Statistic name={props.options[1].name} value={props.neutral}/>
      <Statistic name={props.options[2].name} value={props.bad}/>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const data = {
    feedbackTitle: 'give feedback',
    statisticsTitle: 'statistics',
    options: [
      {
        name: 'good'
      },
      {
        name: 'neutral'
      },
      {
        name: 'bad'
      }
    ]
  }

  return (
    <>
      <Header name={data.feedbackTitle}/>

      <Button onClick={() => setGood(good + 1)} text={data.options[0].name} />
      <Button onClick={() => setNeutral(neutral + 1)} text={data.options[1].name} />
      <Button onClick={() => setBad(bad + 1)} text={data.options[2].name} />

      <Header name={data.statisticsTitle}/>
      <Statistics options={data.options} good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App