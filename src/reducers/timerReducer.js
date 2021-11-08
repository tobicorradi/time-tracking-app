const timerReducer = (state = 0, action) => {
    switch(action.type){
        case 'START_TIMER':
            return state
        case 'STOP_TIMER':
            return state = 0
        default:
            return state
    }
}

export default timerReducer