const Messages = ({message}) => {
  return (

      <li>
        {message.user} : {message.content}
      </li>
  )
  
}
 
export default Messages
