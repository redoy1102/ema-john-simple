import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFrameWork = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const {displayName, email} = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email
      }
        return signedInUser;
    })
    //error handling
    .catch(err => {
      console.log(err);
      console.log(err.message);
      })
  }

 export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  var user = result.user;
  return user;
  console.log(user);
  // ...
}).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  var email = error.email;
  var credential = error.credential;
});
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        isSignedIn: false,
        name:'',
        email:'',
        error:'',
        success:false
      }
      return signedOutUser;
    })
    .catch(err => {
      console.log(err);
    })
}

// export const createUserWithEmailAndPassword = () => {
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//       .then(res => {
//         const newUserInfo ={...user};
//         newUserInfo.error = '';
//         newUserInfo.success = true;
//         setUser(newUserInfo);
//         updateUserName(user.name);
//       })
//       .catch(error => {
//         const newUserInfo = {...user};
//         newUserInfo.error = error.message;
//         newUserInfo.success = false;
//         setUser(newUserInfo);
//       });
// }

// export const signInWithEmailAndPassword = () => {
//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//       .then(res => {
//         const newUserInfo ={...user};
//         newUserInfo.error = '';
//         newUserInfo.success = true;
//         setUser(newUserInfo);
//         setLoggedInUser(newUserInfo);
//         history.replace(from);
//         console.log('Sign in user info', res.user);
//       })
//       .catch(error => { 
//         const newUserInfo = {...user};
//         newUserInfo.error = error.message;
//         newUserInfo.success = false;
//         setUser(newUserInfo);
//       });
// }

// const updateUserName = name =>{
//     const user = firebase.auth().currentUser;

//     user.updateProfile({
//       displayName: name
//     }).then(function() {
//       console.log('User Name updated successfully')
//     }).catch(function(error) {
//       console.log(error)
//     });
//   }