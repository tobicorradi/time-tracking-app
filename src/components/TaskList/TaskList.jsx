import React from 'react'
import { formatTime } from '../../Utils'
import { CloseButton } from "react-bootstrap";

const TaskList = ({list, setList}) => {
    const deleteTask = (id) => [
        setList(
            list.filter(el => el.id !== id)
        )
    ]
    const getAllTime = () => {
        return list.reduce((acc, el) => { return acc + el.time},0)
    }
    return (
        <section className="task-list mt-5">
            <span className="d-block mb-3">Tiempo total <strong>{formatTime(getAllTime(list))}</strong></span>
            {list.map(el => (
                <div key={el.id} className="task d-flex justify-content-between p-4 shadow-sm mb-3">
                    <div className="d-flex justify-content-between w-100 me-5">
                        <span>{el.text}</span>
                        <strong>{formatTime(el.time)}</strong>
                    </div>
                    <CloseButton onClick={() => deleteTask(el.id)}/>
                </div>
            ))}
        </section>
    )
}

export default TaskList
