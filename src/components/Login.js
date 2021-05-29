import React from 'react'
import "../Login.css";
import styled from 'styled-components'

function Login({
  setUser,
  signin,
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignUp,
  hasAccount,
  setHasAccount,
  emailError,
  passError,
}) 




{
  return (
    <section className="login">
      <div className="loginContainer">
        <label htmlFor="">UserName</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errMessage">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="passwordErr">{passError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>
                Don't have an Account ?
                <span onClick = {() => setHasAccount(!hasAccount)}> Sign Up</span>
              </p>
              \
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Sign Up</button>
              <p>
                Have an Account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
              </p>
            </>
          )}
          <SignInButton onClick={() => signin()} >
                    Sign in with Google
          </SignInButton>
          
        </div>
      </div>
    </section>
  );
}

export default Login;

const SignInButton = styled.button`
    margin-top:50px;
    background-color: #EDB818;
    color:white;
    border:none;
    height:40px;
    border-radius:5px;
    cursor:pointer;
    font-size:15px;
    padding:10px 30px;

`;
