import firebase from "./config/firebase";

const Messages = ({message}) => {

  const handleDelete = () => {
    firebase.firestore().collection("messages").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
  }

  return (

      <li>
        {message.user} : {message.content} <button onClick={handleDelete}>削除</button>
      </li>
  )
  
}
 
export default Messages
