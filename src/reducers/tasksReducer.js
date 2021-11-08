const initialState = {
    list: [{ id: 1, text: "Estudio de react", time: 128}]
}

const tasksReducer  = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_TASK': 
            const addedTasks = [...state.list, action.payload]
            return{
                ...state,
                list: addedTasks
            }
        case 'DELETE_TASK':
            return{
                ...state,
                list: state.list.filter(el => el.id !== action.payload)
            } 
        default:
            return state
            
    }
}

export default tasksReducer