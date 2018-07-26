import React, {Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Index from './containers/Index'
import About from './containers/About/about'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.set(0.8);

class App extends Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Index} />
              <Route path='/about' component={About} />
            </Switch>
          </BrowserRouter>
        </div>
    )
  }
}

export default App
