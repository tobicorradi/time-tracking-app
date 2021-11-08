import { combineReducers } from "redux";
import timerReducer from './timerReducer'
import tasksReducer from './tasksReducer'
const reducers = combineReducers({
    timer: timerReducer,
    list: tasksReducer,
})

export default reducers