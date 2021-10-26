import React from 'react'
import Button from 'react-bootstrap/Button';

const TaskCreator = ({timer, setTimer, newTask, setNewTask, setList, list}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        setList([
            {
                id: Math.random() * 1000,
                text: newTask,
                time: timer
            },
            ...list
        ])
        setNewTask('')
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
    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }
    return (
        <>
            <h2>TimeTracker App</h2>
            <form onSubmit={handleSubmit} className="w-100 d-flex align-items-center">
                <input value={newTask} onChange={(e) => setNewTask(e.target.value)} style={{flex: 1}} className="me-2" type="text"/>
                <span className="me-2">{formatTime()}</span>
                <Button onClick={handleStart} variant="primary" className="me-2">Start</Button>
                <Button onClick={handleStop}>Stop</Button>
            </form>
        </>
    )
}

export default TaskCreator
