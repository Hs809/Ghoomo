import React from 'react'
import styled from 'styled-components'

function RandomQuiz() {
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
        if(q4 == "North of the Equator"){
            c++
        }
        if(q5 == "img6"){
            c++         
        }
        if(q6 == "Jawaharlal Nehru and MK Gandhi"){
            c++
        }
        if(q7 == "Urdu"){
            c++
        }
        if(q8 == "img11"){
            c++
        }
        if(q9 == "Tabla"){
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
                    <p className="images"><input type="radio" name = "question1" value = "moontemple"/> <img src="/assets/img1.jpg" alt="" /> A. </p>
                    <p className="images"><input type="radio" name = "question1" value = "suntemple"/> <img src="/assets/img2.jpg" /> B. </p>
                    <p className="images"><input type="radio" name = "question1" value = "goldentemple"/> <img src="/assets/img3.jpg" /> C. </p>
                    <p className="images"><input type="radio" name = "question1" value = "yelowtemple"/> <img src="/assets/img4.jpg" /> D. </p>
                    </div>
                </div>
                <div>
                    <p>2.	What is the number of states and union territories in India?</p>
                    <div className="ans textans">
                        <p className = "text"><input type="radio" name="question2" value="28 states, 7 union territories" />A.28 states, 7 union territories</p>
                        <p className = "text"><input type="radio" name="question2" value="29 states, 8 union territories" />B. 29 states, 8 union territories </p>
                        <p className = "text"><input type="radio" name="question2" value="28 states, 8 union territories" />C.	28 states, 8 union territories </p>
                        <p className = "text"><input type="radio" name="question2" value="29 states, 7 union territories" />D. 29 states, 7 union territories</p>
                    </div>
                </div>
                <div>
                    <p>3.	This art form is popularly known as- <img src="/assets/img5.jpg" alt="" /></p>
                    <div className="ans textans">
                        <p className = "text"><input type="radio" name="question3" value="Rangoli" />A.Rangoli     </p>
                        <p className = "text"><input type="radio" name="question3" value="Mehndi" />B. Mehndi </p>
                        <p className = "text"><input type="radio" name="question3" value="Mandala" />C.	Mandala   </p>
                        <p className = "text"><input type="radio" name="question3" value="Dry Paint" />D. Dry Paint</p>
                    </div>
                </div>
                <div>
                <p>4.	The southernmost point of peninsular India i.e. Kanyakumari is situated-</p>
                <div className="ans textans">
                    <p className = "text"><input type="radio" name="question4" value="North of Tropic of Cancer" />A.North of Tropic of Cancer</p>
                    <p className = "text"><input type="radio" name="question4" value="South of the Equator" />B. South of the Equator </p>
                    <p className = "text"><input type="radio" name="question4" value="South of the Tropic of Capricorn" />C.North of the EquatorSouth of the Tropic of Capricorn </p>
                    <p className = "text"><input type="radio" name="question4" value="North of the Equator" />D.North of the Equator</p>
                </div>
            </div>
            <div>
                <p>5. 	Which one is the National Tree of India?</p>
                <div className="ans">
                <p className="images"><input type="radio" name = "question5" value = "img6"/> <img src="/assets/Hard/img6.jpg" alt="" /> A. </p>
                <p className="images"><input type="radio" name = "question5" value = "img7"/> <img src="/assets/Hard/img7.jpg" /> B. </p>
                <p className="images"><input type="radio" name = "question5" value = "img8"/> <img src="/assets/Hard/img8.jpg" /> C. </p>
                <p className="images"><input type="radio" name = "question5" value = "img9"/> <img src="/assets/Hard/img9.jpg" /> D. </p>
                </div>
            </div>
            <div>
                <p>6.The personalities visible in this photograph are- <img src="/assets/Hard/img10.jpg" alt="" /></p>
                <div className="ans textans">
                    <p className = "text"><input type="radio" name="question6" value="Rajendra Prasad and MK Gandhi" />A. Rajendra Prasad and MK Gandhi     </p>
                    <p className = "text"><input type="radio" name="question6" value="Jawaharlal Nehru and MK Gandhi" />B. Jawaharlal Nehru and MK Gandhi </p>
                    <p className = "text"><input type="radio" name="question6" value="Bhagat Singh and MK Gandhi	" />C.	Bhagat Singh and MK Gandhi	    </p>
                    <p className = "text"><input type="radio" name="question6" value="Jawaharlal Nehru and Rajendra Prasad" />D.  Jawaharlal Nehru and Rajendra Prasad</p>
                </div>
            </div>
            <div>
                <p>7. Ghazal, a form of poetry, is usually written in which language in India?</p>
                <div className="ans textans">
                    <p className = "text"><input type="radio" name="question7" value="Hindi" />A.Hindi</p>
                    <p className = "text"><input type="radio" name="question7" value="Punjabi" />B. Punjabi </p>
                    <p className = "text"><input type="radio" name="question7" value="Kannada" />C.	Kannada </p>
                    <p className = "text"><input type="radio" name="question7" value="Urdu" />D. Urdu</p>
                </div>
            </div>
            <div>
                <p>8. Which of the following is a picture of a vehicle popularly known as Tuk-tuk?</p>
                <div className="ans">
                <p className="images"><input type="radio" name = "question8" value = "img11"/> <img src="/assets/medium/img11.jpg" alt="" /> A. </p>
                <p className="images"><input type="radio" name = "question8" value = "img12"/> <img src="/assets/medium/img12.jpg" /> B. </p>
                <p className="images"><input type="radio" name = "question8" value = "img13"/> <img src="/assets/medium/img13.jpg" /> C. </p>
                <p className="images"><input type="radio" name = "question8" value = "img14"/> <img src="/assets/medium/img14.jpg" /> D. </p>
                </div>
            </div>
            <div>
                <p>9. What is the name of this classical music instrument? <img src="/assets/medium/img15.jpg" alt="" /></p>
                <div className="ans textans">
                    <p className = "text"><input type="radio" name="question9" value="Tabla" />A.	Tabla</p>
                    <p className = "text"><input type="radio" name="question9" value=" Drums" />B. Drums  </p>
                    <p className = "text"><input type="radio" name="question9" value="Mridangam" />C.Mridangam   </p>
                    <p className = "text"><input type="radio" name="question9" value="Dholak" />D. Dholak</p>
                </div>
            </div>
            <div>
                    <p>10.	Gautama Buddha attained enlightenment while meditating underneath which tree?</p>
                    <div className="ans textans">
                        <p className = "text"><input type="radio" name="question10" value="Sanskrit" />A.	Sanskrit</p>
                        <p className = "text"><input type="radio" name="question10" value="Hindi" />B. Hindi </p>
                        <p className = "text"><input type="radio" name="question10" value="Tamil" />C.Tamil</p>
                        <p className = "text"><input type="radio" name="question10" value="None" />D. None</p>
                    </div>
                </div>
                <input type="submit" name="" className="submitbtn" value="I'm DOne" onClick = {(e) => {check(e)}} />
                </form>
                <p id="results"></p>
                <video  autoPlay loop id="myVideo" onLoad = {videoplay}>
                    <source src="assets/Confetti - 61014.mp4" type="video/mp4" />
                </video>
        </Container>
    )
}

export default RandomQuiz
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

