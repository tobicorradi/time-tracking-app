import React from 'react'
import { formatTime } from '../../Utils'
const TaskList = ({list}) => {

    return (
        <section className="task-list mt-5">
            {list.map(el => (
                <div className="task d-flex justify-content-between p-4 shadow-sm mb-3">
                    <span>{el.text}</span>
                    <strong>{formatTime(el.time)}</strong>
                </div>
            ))}
        </section>
    )
}

export default TaskList
