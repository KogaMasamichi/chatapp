import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {AuthProvider} from './AuthService'

import Room from './pages/Room'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

import LoggedInRoute from './LoggedInRoute'

const App = () => {
  return (
    <AuthProvider>
    <h1>Chat</h1>
    <Router>
      <Switch>
        <LoggedInRoute exact path='/' component={Room} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </Router>
    </AuthProvider>
  )
}


export default App
