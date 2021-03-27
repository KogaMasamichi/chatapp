import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from '../AuthService'
import firebase from '../config/firebase'
import Messages from '../Messages'
import styled from "styled-components"


const Room = () => {
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')
  useEffect(() => {
    firebase.firestore().collection('messages').orderBy('timeStamp', 'asc')
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setMessages(messages)
      })
  }, [])

  const user = useContext(AuthContext)
  console.log(user)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim()) {
      firebase.firestore().collection('messages')
        .add({
          timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
          content: value,
          user: user.displayName,
          url: user.photoURL
        })
      setValue('')
    } else {
      alert('文字が入力されていません')
    }
  }

  return (
    <>
      <h1>Room</h1>
      <ul>
        {
          messages.map(message => {
            return (
              <Right>
                <Messages message={message} key={message.id} />
              </Right>
            )
          })
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type='submit'>送信</button>
      </form>
      <button onClick={() => { firebase.auth().signOut() }}>Logout</button>
    </>
  )
}

const Right = styled.div`
text-align: right;
`

export default Room
