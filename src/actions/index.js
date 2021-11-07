export const createTask = (payload) => {
    type: 'CREATE_TASK',
    payload
}

export const deleteTask = (payload) => {
    type: 'DELETE_TASK',
    payload
}

export const startTimer = (payload) => {
    type: 'START_TIMER',
    payload
}

export const stopTimer = (payload) => {
    type: 'STOP_TIMER',
    payload
}