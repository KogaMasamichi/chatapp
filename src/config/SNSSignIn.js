import firebase from './firebase'


const FacebookProvider = () => {
  const provider = new firebase.auth.FacebookAuthProvider()
  provider.addScope('user_birthday')
  firebase.auth().signInWithRedirect(provider)
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
};
export default FacebookProvider
