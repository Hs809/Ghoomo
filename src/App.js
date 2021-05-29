import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import Quiz from './components/Quiz';
import Detail from './components/Detail';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Login from './components/Login'
import fire from './Firebase'
import db from './Firebase'
import {auth,provider} from './Firebase'
import Community from './components/Community';
import EasyQuiz from './components/EasyQuiz';
import MediumQuiz from './components/MediumQuiz';
import Infomation  from './components/Infomation';
import HardQuiz from './components/HardQuiz';
import RandomQuiz from './components/RandomQuiz';



function App() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const [culture,setCulture] = useState('');

    const clearInputs = () => {
        setEmail('');
        setPassword('')
    }

    const clearError = () => {
        setEmailError('');
        setPassError(''); 
    }
    const signin = () => {
      auth.signInWithPopup(provider).catch(alert);
  }

    const handleLogin = () => {
        clearError()
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPassError(err.message);
                    break;
            }
        })
    }
    const logout = () => {
      auth.signOut();
  }
    

    const handleSignUp = () => {
        clearError()
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code ){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPassError(err.message);
                    break;
            }
        })
    }

    const handleSignOut = () => {
        fire.auth().signOut();
    }

    const authListner = () => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInputs();
          setUser(user);
        } else {
          setUser('');
        }
      });
    }
    useEffect(() => {
        authListner();
    },[])
    useEffect(() => {
      
    

      fire.database().ref("culture1").on("value", snapshot => {
        let studentlist = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            studentlist.push(snap.val());
        });
        setCulture({ ...studentlist });
      });
    },[])
    

    
  

  
  return (
    <div className="App">
      <Router>
      <Navbar handleSignOut = {handleSignOut} logout = {logout} />
        <Switch>
          <Route exact path = "/">
            {
              !user ?  (
                <Login 
              setUser = {setUser}
              signin = {signin}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passError={passError} />
              ) : (
                <>    
                <Home culture = {culture} />
                </>
              )
            }
            
            

          </Route>
        </Switch>
        <Switch> 
                <Route exact  path = "/search" >
                  <SearchBar culture = {culture} />
                  </Route>  
                  <Route exact  path = "/information" >
                   <Infomation culture = {culture} />
                  </Route>  
                <Route exact path = "/quiz">
                  <Quiz />
                </Route>
                <Route exact path = "/detail/:id">
                    <Detail culture = {culture} />
                </Route>
                <Route exact path = "/community">
                   <Community />
                </Route>
                <Route exact path = "/easy">
                   <EasyQuiz />
                </Route>
                <Route exact path = "/medium">
                   <MediumQuiz />
                </Route>
                <Route exact path = "/medium">
                   <MediumQuiz />
                </Route>
                <Route exact path = "/hard">
                   <HardQuiz />
                </Route>
                <Route exact path = "/random">
                   <RandomQuiz />
                </Route>
          </Switch>
          <Footer />
        

      </Router>
      {/* <tbody>
            {Object.values(culture).map((data,key) => {
                console.log("Key"+data.id);
                
                
                return (
                    <tr>     
                    <td>{data.title}</td>
                    <td>{data.info}</td>
                    <td>{data.funfact}</td>
                    <td><img src={data.img1} alt="" />
                        <img src={data.img2} alt="" />
                        <img src={data.img3} alt="" />
                    </td>
                    </tr>
                    
                );
               
                })}
        
               
            </tbody> */}
    
    </div>
  );
}

export default App;
