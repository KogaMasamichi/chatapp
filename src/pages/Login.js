import {useState, useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import firebase from '../config/firebase'
import {AuthContext} from '../AuthService';

const Login = ({history}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const user = useContext(AuthContext);

  if(user  ) {
    return <Redirect to={'/'} />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user)
        history.push('/')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error)
      });
  }

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="email">E-mail</label>
    <input 
    type="email"
    id='email'
    name='email'
    placeholder='Email'
    onChange={e => {
      setEmail(e.target.value)
    }}
    />
    </div>
    <div>
    <label htmlFor="password">Password</label>
    <input 
    type="password"
    id='password'
    name='password'
    placeholder='password'
    onChange={e => {
      setPassword(e.target.value)
    }}
    />
    </div>
    <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default Login
