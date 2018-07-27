import React, {Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import './static/reset.css'


import Index from './containers/Index'
import About from './containers/About/about'
import LoginContainer from "./containers/Login/login"
import ForgetContainer from "./containers/Forget/forget"
import RegisterContainer from "./containers/Register/register"
import DashboardContainer from "./containers/Dashboard/dashboard"




class App extends Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/forget' component={ForgetContainer} />
              <Route exact path='/register' component={RegisterContainer} />
              <Route exact path='/login' component={LoginContainer} />
              <Route exact path='/dashboard' component={DashboardContainer} />
              <Route path='/about' component={About} />
            </Switch>
          </BrowserRouter>
        </div>
    )
  }
}

export default App
