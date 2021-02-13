import {useState} from 'react'
import firebase from '../config/firebase'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
      console.log(user)
    })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error)
      });
  }

  return (
    <div>
     <h1>Sign Up</h1>
     <form onSubmit={handleSubmit}>
     <div>
     <label htmlFor="email">E-mail</label>
     <input 
     name='email'
     type="email"
     id='email'
     placeholder='Email'
     onChange={e => {
       setEmail(e.target.value)
     }}
     />
     </div>
    <div>
    <label htmlFor="password">Password</label>
    <input 
    name='password'
    type="password"
    id='password'
    placeholder='Password'
    onChange={e => {
      setPassword(e.target.value)
    }}
    />
    </div>
    <button type='submit'>Sign Up</button>
    </form>
    </div>
  )
}

export default SignUp
