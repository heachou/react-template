import { INCREMENT, DECREMENT } from '../type/type.js'

const IncrementAction = () => {
    return {
        type: INCREMENT
    }
}

const DecrementAction = () => {
    return {
        type:DECREMENT
    }
}
const IncrementSyncAction = ()=>{
    return dispatch => {
      setTimeout(() => {
        dispatch(IncrementAction())
      }, 2000);
    }
}
export {IncrementAction,DecrementAction,IncrementSyncAction}