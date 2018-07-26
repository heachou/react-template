import React,{Component} from 'react'
import {Button} from 'antd'


class About extends Component{
  render(){
    return (
      <div>
        <p>在关于页面</p>
        <Button type='primary' onClick={()=>{
          this.props.history.goBack()
        }}>返回上一页</Button>
      </div>
    )
  }
}

export default About