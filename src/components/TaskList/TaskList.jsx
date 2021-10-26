import React from 'react'
import { formatTime } from '../../Utils'
const TaskList = ({list}) => {
    const getAllTime = () => {
      return list.reduce((acc, el) => { return acc + el.time},0)
    }
    return (
        <section className="task-list mt-5">
            <span className="d-block mb-3">Tiempo total <strong>{formatTime(getAllTime(list))}</strong></span>
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
