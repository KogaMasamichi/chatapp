import firebase from "./config/firebase";
import styled from "styled-components"

const Messages = ({message}) => {

  const handleDelete = () => {
    firebase.firestore().collection("messages").doc(message.id).delete().then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
  }
  
  return (

      <Li>
        <Icon src={message.url}/> {message.user} : {message.content} <button onClick={handleDelete}>削除</button>
      </Li>
  )
  
}

const Li = styled.li`
  list-style: none;
`

const Icon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  border-radius: 50%;
`

export default Messages
