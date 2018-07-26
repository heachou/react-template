import React,{Component} from 'react'
import {Button} from 'antd'
import {Link} from 'react-router-dom'

class Index extends Component{
  render(){
    return (
      <div>
        <Button type="primary" onClick={() => {
          this.props.IncrementAction()
        }}> 添 加 </Button>
        <Button type="primary" onClick={() => {
          this.props.DecrementAction()
        }}> 减 少 </Button>
        <Button type="primary" onClick={() => {
          this.props.IncrementSyncAction()
        }}> 两秒后增加 </Button>
        <Link to='/about'>
          <Button type='primary'>去关于页面</Button>
        </Link>
        <p>{this.props.num}</p>
      </div>
    )
  }
}

export default Index