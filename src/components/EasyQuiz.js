import React, { useState } from 'react'
import styled from 'styled-components'



function EasyQuiz() {
    
    const check = (event) => {
        var c = 0
        var q1 = document.quiz.question1.value
        var q2 = document.quiz.question2.value
        var q3 = document.quiz.question3.value
        var q4 = document.quiz.question4.value
        var q5 = document.quiz.question5.value
        var q6 = document.quiz.question6.value
        var q7 = document.quiz.question7.value
        var q8 = document.quiz.question8.value
        var q9 = document.quiz.question9.value
        var q10 = document.quiz.question10.value
        var results = document.getElementById('results')
        var quiz = document.getElementById('quiz')
        if(q1 == "goldentemple")
            c++
        if(q2 == "29 states, 7 union territories"){
            c++
        }
        if(q3 == 'Rangoli'){
            c++
        }
        if(q4 == "Ashoka Tree"){
            c++
        }
        if(q5 == "img6"){
            c++         
        }
        if(q6 == "Samosa"){
            c++
        }
        if(q7 == "Gujarat"){
            c++
        }
        if(q8 == "Bharat Muni"){
            c++
        }
        if(q9 == "Devanagri"){
            c++
        }
        if(q10 == "None"){
            c++
        }
            quiz.style.display = "none"
            results.innerHTML = `Your Result is  ${c}`
            event.preventDefault()
            document.getElementById('results').style.display = "flex"
            document.getElementById('myVideo').style.display = "flex"
            

    }
    function videoplay() {
        var video = document.getElementById("myVideo");
        video.onplay()
       }

    return (
        <Container>
            <form  name="quiz" id="quiz">
                <div>
                    <p>1. 	Which of the following places is known as The Golden Temple?</p>
                    <div className="ans">
                    <p className="images"><input type="radio" name = "question1" value = "moontemple"/> <img src="/assets/img1.jpg" alt="" /> </p>
                    <p className="images"><input type="radio" name = "question1" value = "suntemple"/> <img src="/assets/img2.jpg" />  </p>
                    <p className="images"><input type="radio" name = "question1" value = "goldentemple"/> <img src="/assets/img3.jpg" />  </p>
                    <p className="images"><input type="radio" name = "question1" value = "yelowtemple"/> <img src="/assets/img4.jpg" />  </p>
                    </div>
                </div>
                <div>
                    <p>2.	What is the number of states and union territories in India?</p>
                    <div className="ans textans">
                        <p className = "text"><input type="radio" name="question2" value="28 states, 7 union territories" />28 states, 7 union territories</p>
                        <p className = "text"><input type="radio" name="question2" value="29 states, 8 union territories" /> 29 states, 8 union territories </p>
                        <p className = "text"><input type="radio" name="question2" value="28 states, 8 union territories" />	28 states, 8 union territories </p>
                        <p className = "text"><input type="radio" name="question2" value="29 states, 7 union territories" /> 29 states, 7 union territories</p>
                    </div>
                </div>
                <div>
                    <p>3.	This art form is popularly known as- <img src="/assets/img5.jpg" alt="" /></p>
                    <div className="ans textans">
                        <p className = "text"><input type="radio" name="question3" value="Rangoli" />Rangoli     </p>
                        <p className = "text"><input type="radio" name="question3" value="Mehndi" /> Mehndi </p>
                        <p className = "text"><input type="radio" name="question3" value="Mandala" />	Mandala   </p>
                        <p className = "text"><input type="radio" name="question3" value="Dry Paint" /> Dry Paint</p>
                    </div>
                </div>
                <div>
                    <p>4.	Gautama Buddha attained enlightenment while meditating underneath which tree?</p>
                    <div className="ans textans">
                        <p className = "text"><input type="radio" name="question4" value="Ashoka Tree" />Ashoka Tree</p>
                        <p className = "text"><input type="radio" name="question4" value="Mahabodhi Treeb" /> Mahabodhi Tree </p>
                        <p className = "text"><input type="radio" name="question4" value="Mango Tree" />	Mango Tree </p>
                        <p className = "text"><input type="radio" name="question4" value="Neem Tree" /> Neem Tree</p>
                    </div>
                </div>
                <div>
                    <p>5. 	Which of the following is an Indian dance form?</p>
                    <div className="ans">
                    <p className="images"><input type="radio" name = "question5" value = "img6"/> <img src="/assets/img6.jpg" alt="" /> </p>
                    <p className="images"><input type="radio" name = "question5" value = "img7"/> <img src="/assets/img7.jpg" />  </p>
                    <p className="images"><input type="radio" name = "question5" value = "img8"/> <img src="/assets/img8.jpg" />  </p>
                    <p className="images"><input type="radio" name = "question5" value = "img9"/> <img src="/assets/img9.jpg" />  </p>
                    </div>
                </div>
                <div>
                    <p>6.	This art form is popularly known as- <img src="/assets/img5.jpg" alt="" /></p>
                    <div className="ans textans">
                        <p className = "text"><input type="radio" name="question6" value="Chole" />Chole     </p>
                        <p className = "text"><input type="radio" name="question6" value="Vada Pav" /> Vada Pav </p>
                        <p className = "text"><input type="radio" name="question6" value="Tikki" />	Tikki    </p>
                        <p className = "text"><input type="radio" name="question6" value="Samosa" />  Samosa</p>
                    </div>
                </div>
                <div>
                    <p>7.	Gautama Buddha attained enlightenment while meditating underneath which tree?</p>
                    <div className="ans textans">
                        <p className = "text"><input type="radio" name="question7" value="Punjabe" />Punjabe</p>
                        <p className = "text"><input type="radio" name="question7" value="Tamil Nadu" /> Tamil Nadu </p>
                        <p className = "text"><input type="radio" name="question7" value="Maharashtra" />	Maharashtra </p>
                        <p className = "text"><input type="radio" name="question7" value="Gujarat" /> Gujarat</p>
                    </div>
                </div>
                <div>
                    <p>8.	'Natya - Shastra' the main source of India's classical dances was written by</p>
                    <div className="ans textans">
                        <p className = "text"><input type="radio" name="question8" value="Narad Muni" />Narad Muni</p>
                        <p className = "text"><input type="radio" name="question8" value="Bharat Muni" /> Bharat Muni </p>
                        <p className = "text"><input type="radio" name="question8" value="Abhinav Gupt" />Abhinav Gupt </p>
                        <p className = "text"><input type="radio" name="question8" value="Tandu Muni" />Tandu Muni</p>
                    </div>
                </div>
                <div>
                    <p>9.	This script is known as- <img src="/assets/img11.png" alt="" /></p>
                    <div className="ans textans">
                        <p className = "text"><input type="radio" name="question9" value="Devanagri" />Devanagri</p>
                        <p className = "text"><input type="radio" name="question9" value=" Brahmi" /> Brahmi  </p>
                        <p className = "text"><input type="radio" name="question9" value="Tamil" />Tamil   </p>
                        <p className = "text"><input type="radio" name="question9" value="Kalinga" /> Kalinga</p>
                    </div>
                </div>
                <div>
                    <p>10.	Gautama Buddha attained enlightenment while meditating underneath which tree?</p>
                    <div className="ans textans">
                        <p className = "text"><input type="radio" name="question10" value="Sanskrit" />	Sanskrit</p>
                        <p className = "text"><input type="radio" name="question10" value="Hindi" /> Hindi </p>
                        <p className = "text"><input type="radio" name="question10" value="Tamil" />Tamil</p>
                        <p className = "text"><input type="radio" name="question10" value="None" /> None</p>
                    </div>
                </div>

                

                <input type="submit" className = "submitbtn" name="" value="Submit" onClick = {(e) => {check(e)}} />
            </form>
            <p id="results"></p>

            <video  autoPlay loop id="myVideo" onLoad = {videoplay}>
            <source src="assets/Confetti - 61014.mp4" type="video/mp4" />
            </video>
            
        </Container>
    )
}

export default EasyQuiz

const Container = styled.div`
overflow-x:hidden;
    img{
        width:290px;
        height:200px;

    }
    p{
        margin-top:40px;
       font-size:19px;
       margin-left:140px;

    }
    .ans{
        display:flex;
        justify-content:center;
        align-items:center;
        p{
            text-align:center;
        }
        img{
            margin:10px;
        }

    }
   
    .images{
        margin:10px;
    }
    .images:nth-child(1){
        width: 260px;
        height: 258px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #34AF00;
        border-radius: 8px;
        opacity: 1;
        img{
            width: 92%;
            height: 65%;
        }
    }
    .images:nth-child(2){
        width: 260px;
        height: 258px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #424B5A;
        border-radius: 8px;
        opacity: 1;
        img{
            width: 92%;
            height: 65%;
        }
    }
    .images:nth-child(3){
        width: 260px;
        height: 258px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #ED1818;
        border-radius: 8px;
        opacity: 1;
        img{
            width: 92%;
            height: 65%;
        }
    }
    .images:nth-child(4){
        width: 260px;
        height: 258px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #424B5A;
        border-radius: 8px;
        opacity: 1;
        img{
            width: 92%;
            height: 65%;
        }
    }
    .textans{
        display:grid;
        grid-template-columns:1fr 1fr;
    }
    .text{
        display: flex;
        justify-content: center;
        align-items: center;
    
    }
    .text:nth-child(1){
        width: 450px;
        height: 61px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #424B5A;
        border-radius: 8px;
        opacity: 1;   
    }
    .text:nth-child(2){
        width: 450px;
        height: 61px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #34AF00;
        border-radius: 8px;
        opacity: 1;
    }
    .text:nth-child(3){
        width: 450px;
        height: 61px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #424B5A;
        border-radius: 8px;
        opacity: 1;
    }
    .text:nth-child(4){
        width: 450px;
        height: 61px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #424B5A;
        border-radius: 8px;
        opacity: 1;
    }
    .submitbtn{
        width: 352px;
        height: 94px;
        background: #EDB818 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 8px;
        opacity: 1;
        border:none;
        margin:auto;
        text-align: center;
        font: normal normal normal 24px/28px Arial;
        letter-spacing: 0px;
        color: #F2F5F7;
        opacity: 1;
        position:relative;
        left:507px;
        cursor:pointer;
        margin-top: 40px;
        margin-bottom: 40px;
    }
    #results{
        width: 450px;
        height: 94px;
        background: #34AF00 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 8px;
        opacity: 1;
        margin:auto;
        display:none;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        position:absolute;
        left:507px;
        top:300px;
    }
    video{
        width:100%;
        display:none;
      }
`
