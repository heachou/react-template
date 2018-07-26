import About from '../../pages/About/about'
import {connect} from 'react-redux'
import {IncrementAction,IncrementSyncAction,DecrementAction} from '../../actions/counter'


const mapStateToProps = (state)=>{
  return state.counter
}

const mapActionToProps = {IncrementAction,IncrementSyncAction,DecrementAction}

const AppContainer = connect(mapStateToProps,mapActionToProps)(About)

export default AppContainer