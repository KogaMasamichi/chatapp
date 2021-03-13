import firebase from './firebase' 



const FacebookProvider = new firebase.auth.FacebookAuthProvider()
 FacebookProvider.addScope('user_birthday')
 firebase.auth().signInWithRedirect(FacebookProvider)
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.log(error)
        })

export default FacebookProvider
