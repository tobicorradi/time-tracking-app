import React, {useState, useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { formatTime } from '../../Utils';
const TaskCreator = ({timer, setTimer, newTask, setNewTask, setList, list, timerActive, setTimerActive}) => {
    const countRef = useRef(null)
    const [showError, setShowError] = useState(false)
    const createTask = () => {
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
    const handleSubmit = (e) => {
        e.preventDefault()
        if(timer == 0){
            handleStart()
        } else {
            handleStop()
        }
    }
    const handleStart = () => {
        setTimerActive(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }
    const handleStop = () => {
        if(newTask != ''){
            clearInterval(countRef.current)
            setTimer(0)
            setTimerActive(false)
            createTask()
        } else {
            setShowError(true)
        }
    }
   
    return (
        <>
            <h2>TimeTracker App</h2>
            <form onSubmit={handleSubmit} className="w-100 d-flex align-items-center">
                <input required value={newTask} onChange={(e) => setNewTask(e.target.value)} style={{flex: 1}} className="me-2" type="text"/>
                <span className="me-2">{formatTime(timer)}</span>
                {timerActive
                ? <Button onClick={handleStop}>Stop</Button> 
                : <Button onClick={handleStart} variant="primary" className="me-2">Start</Button>}
            </form>
            {showError ?
                <Alert className="text-danger mt-3" variant="danger" onClose={() => setShowError(false)} dismissible>¡Debe ingresar un nombre!</Alert> 
            : null}
        </>
    )
}

export default TaskCreator
