import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import glogo from '../../../images/logos/g-logo.png'

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div className="text-center">
    <img className="my-5" style={{width:'150px'}} src={logo} alt=""/>
    <div style={{width:'400px'}} className=' mx-auto text-center p-5 border border-secondary rounded mt-5 bg-white'>
        <h4 className='font-weight-bold'>Login With</h4>
        <button onClick={handleGoogleSignIn} className='border rounded-pill mt-4 row d-flex justify-content-between align-items-center py-2 btn'>
            <img className='w-100 col-2 pl-0' src={glogo} alt=""/>
            <h6 className="col-10 m-0">Continue with Google</h6>
        </button>
        <p>Don’t have an account? <a href="">Create an account</a></p>
    </div>
</div>
  );
};

export default Login;