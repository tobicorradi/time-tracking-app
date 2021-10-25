import React from 'react'

const TaskList = ({list}) => {
    return (
        <div className="task-list mt-5">
            {list.map(el => (
                <div className="task d-flex justify-content-between">
                    <span>{el.text}</span>
                    <strong>{el.time}</strong>
                </div>
            ))}
        </div>
    )
}

export default TaskList
