import React, {useState} from 'react'

const Button = ({onClick, text}) =>
    <button onClick={onClick}>
        {text}
    </button>

const StatisticsLine = ({text, value}) => {
    return (
        <>
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
        </>
    )
}

const Statistics = ({good, bad, neutral, total, score}) => {
    if (total === 0) {
        return (
            <div>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <h2>statistics</h2>
            <table>
                <tbody>
                <StatisticsLine text='good' value={good}/>
                <StatisticsLine text='neutral' value={neutral}/>
                <StatisticsLine text='bad' value={bad}/>
                <StatisticsLine text='total' value={total}/>
                <StatisticsLine text='average' value={score / total}/>
                <StatisticsLine text='positive' value={(good / total) * 100 + ' %'}/>
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)
    const [score, setScore] = useState(0)
    const increaseGood = () => {
        setGood(good + 1)
        setTotal(total + 1)
        setScore(score + 1)
    }
    const increaseBad = () => {
        setBad(bad + 1)
        setTotal(total + 1)
        setScore(score - 1)

    }
    const increaseNeutral = () => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
    }

    return (
        <div>
            <h2>give feedback</h2>
            <Button onClick={increaseGood} text='good'/>
            <Button onClick={increaseNeutral} text='neutral'/>
            <Button onClick={increaseBad} text='bad'/>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} score={score}/>

        </div>
    )
}

export default App