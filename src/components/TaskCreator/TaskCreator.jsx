import React from 'react'
import Button from 'react-bootstrap/Button';

const TaskCreator = ({timer, setTimer}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleStart = () => {
        setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }
    const handleStop = () => {
        clearInterval()
        setTimer(0)
    }
    return (
        <>
            <h2>TimeTracker App</h2>
            <form onSubmit={handleSubmit} className="w-100 d-flex align-items-center">
                <input style={{flex: 1}} className="me-2" type="text"/>
                <span className="me-2">{timer}</span>
                <Button onClick={handleStart} variant="primary" className="me-2">Start</Button>
                <Button onClick={handleStop}>Stop</Button>
            </form>
        </>
    )
}

export default TaskCreator
