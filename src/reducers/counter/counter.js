import {INCREMENT,DECREMENT} from '../../type/type.js'

const initialState = {
    num: 1
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                num:state.num + 1 
            }
        case DECREMENT:
            return {
                num:state.num - 1 
            }
        default:
            return state
    }
}


export default counter