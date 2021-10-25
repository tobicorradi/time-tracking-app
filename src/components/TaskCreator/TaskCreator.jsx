import React from 'react'
import Button from 'react-bootstrap/Button';

const TaskCreator = ({timer}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <h2>TimeTracker App</h2>
            <form onSubmit={handleSubmit} className="w-100 d-flex align-items-center">
                <input style={{flex: 1}} className="me-2" type="text"/>
                <span className="me-2">{timer}</span>
                <Button variant="primary" className="me-2">Start</Button>
                <Button>Stop</Button>
            </form>
        </>
    )
}

export default TaskCreator
