import React,{Component} from 'react'
import './dashboard.less';

class Dashboard extends Component{
    render(){
        return(
            <div className='dashboard'>
                <div className='side'>
                    left
                </div>
                <div className="content">
                    right
                </div>
            </div>
        )
    }
}

export default Dashboard