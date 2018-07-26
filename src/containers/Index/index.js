import Index from '../../pages/Index/index'
import {connect} from 'react-redux'
import {IncrementAction,IncrementSyncAction,DecrementAction} from '../../actions/counter'


const mapStateToProps = (state)=>{
  return state.counter
}

const mapActionToProps = {IncrementAction,IncrementSyncAction,DecrementAction}

const AppContainer = connect(mapStateToProps,mapActionToProps)(Index)

export default AppContainer