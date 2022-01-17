import React, {useState} from 'react'


const Button = ({onClick, text}) =>
    <button onClick={onClick}>
        {text}
    </button>

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Uint8Array(6))
    const getRandom = () => {
        return Math.floor(Math.random() * (anecdotes.length - 1))
    }
    const pickAnecdote = () => {
        setSelected(getRandom())

    }
    const addVote = (index) => {
        const copy = [...points]
        copy[index] += 1
        setPoints(copy)
        console.log(points)
    }

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{anecdotes[selected]}</p>
            <p>has {points[selected]} votes</p>
            <Button onClick={pickAnecdote} text='next anecdote'/>
            <Button onClick={() => addVote(selected)} text='vote'/>
            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[points.indexOf(Math.max(...points))]}</p>
        </div>
    )
}

export default App