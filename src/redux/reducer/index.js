import {combineReducers} from "redux";
import {ADD, MIN} from "../../components/helper";

//reducer 默認有2個參數. 1.state(全局的) 2.action(對應發送)

const initialState = {
    count : 0
}

const calReducer = (state = initialState, action) => {
//     if (action.type === 'Add') {
//         return state + 1
//     } else {
//         return state
//     }
// }
//
// const minReducer = (state = 0, action) => {
//     if (action.type === 'Min') {
//         return state - 1
//     }else {
//         return state
//     }
    switch (action.type) {
        case ADD :
            return {
                //count因為上面就是count
                // count : state.count + 1(法1)
                //...state新生成一個object
                ...state, count: state.count + 1
            }
        case MIN:
            return {
                //count因為上面就是count
                // count : state.count - 1(法1)
                //...state新生成一個object
                ...state, count: state.count - 1
            }
        default :
            return state
    }
}

export default combineReducers({
    calReducer,
    // minReducer
})