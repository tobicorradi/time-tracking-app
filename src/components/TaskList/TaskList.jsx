import React from 'react'
import { formatTime } from '../../Utils'
import { CloseButton } from "react-bootstrap";
import {useSelector, useDispatch} from 'react-redux'
import { deleteTask } from '../../actions';
const TaskList = ({setList}) => {
    const dispatch = useDispatch()
    const state = useSelector((state) => (state.list))

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }asdasdaswefwefwef
    const getAllTime = () => {
        return state.list.reduce((acc, el) => { return acc + el.time},0)
    }
    return (
        <section className="task-list mt-5">
            <span className="d-block mb-3">Tiempo total <strong>{formatTime(getAllTime(state.list))}</strong></span>
            {state.list.map(el => (
                <div key={el.id} className="task d-flex justify-content-between p-4 shadow-sm mb-3">
                    <div className="d-flex justify-content-between w-100 me-5">
                        <span><small className="me-2">{el.id}</small>{el.text}</span>
                        <strong>{formatTime(el.time)}</strong>
                    </div>
                    <CloseButton onClick={() => handleDelete(el.id)}/>
                </div>
            ))}
        </section>
    )
}

export default TaskList
