import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";
import { UserContext } from '../../App';
import handleError from '../Input/ErrorHandler';
import InputItem from '../Input/InputItem';
import g from './g.svg';
import { createUserWithEmailAndPassword, handleGoogleSignIn, initializeFirebase, signInWithEmailAndPassword } from './HandleLogin';
initializeFirebase()
const initUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {}
}


const GoogleButton = () => {
  
  const { user, setUser } = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [userInfo, setUserInfo] = useState({ ...initUser });

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        if (res.error) {
          setUserInfo({ ...userInfo, errors: res })
        } else {
          setUser({ ...res })
          history.replace(from)
        }
      })
  }

    return (
      <>
      <div className="orr mt-2 w-60">Or</div>
            <div className="google-sign-in mt-2 w-51" onClick={googleSignIn}>
              <span> Continue with  <img className="google" src={g} alt="google" /></span>
            </div>
      </>
    );
  };

  export default GoogleButton;