import React, {useEffect} from 'react'
import {useState, useContext} from 'react'
import {AuthContext} from '../AuthService'
import firebase from '../config/firebase'
import Messages from '../Messages'

const Room = () => {
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')
  useEffect(() => {
    firebase.firestore().collection('messages').orderBy('timeStamp', 'asc')
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map(doc => {
          return doc.data()
        })
        setMessages(messages)
      })
  }, [])

  const user = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(value.trim()) {
      firebase.firestore().collection('messages')
      .add({
        timeStamp: new Date(),
        content: value,
        user: user.displayName
      })
      setValue('')
    }else{
      alert('文字が入力されていません')
  }}

    console.log(user.displayName)

  return (
    <>
      <h1>Room</h1>
        <ul>
            {
              messages.map(message => {
                return (
                  <Messages message={message} />
                )
              })
            }
        </ul>
      <form onSubmit= {handleSubmit}>
      <input
        type='text'
        value={value}
          onChange={e => setValue(e.target.value)}
      />
      <button type='submit'>送信</button>
      </form>
      <button onClick={() => {firebase.auth().signOut()}}>Logout</button>
    </>
  )
}

export default Room
