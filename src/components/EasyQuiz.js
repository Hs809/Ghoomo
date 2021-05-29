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
            

    }

    return (
        <Container>
            <form  name="quiz" id="quiz">
                <div>
                    <p>1. 	Which of the following places is known as The Golden Temple?</p>
                    <div className="ans">
                    <p><input type="radio" name = "question1" value = "moontemple"/> <img src="/assets/img1.jpg" alt="" /> A. </p>
                    <p><input type="radio" name = "question1" value = "suntemple"/> <img src="/assets/img2.jpg" /> B. </p>
                    <p><input type="radio" name = "question1" value = "goldentemple"/> <img src="/assets/img3.jpg" /> C. </p>
                    <p><input type="radio" name = "question1" value = "yelowtemple"/> <img src="/assets/img4.jpg" /> D. </p>
                    </div>
                </div>
                <div>
                    <p>2.	What is the number of states and union territories in India?</p>
                    <div className="ans">
                        <p><input type="radio" name="question2" value="28 states, 7 union territories" />A.28 states, 7 union territories</p>
                        <p><input type="radio" name="question2" value="29 states, 8 union territories" />B. 29 states, 8 union territories </p>
                        <p><input type="radio" name="question2" value="28 states, 8 union territories" />C.	28 states, 8 union territories </p>
                        <p><input type="radio" name="question2" value="29 states, 7 union territories" />D. 29 states, 7 union territories</p>
                    </div>
                </div>
                <div>
                    <p>3.	This art form is popularly known as- <img src="/assets/img5.jpg" alt="" /></p>
                    <div className="ans">
                        <p><input type="radio" name="question3" value="Rangoli" />A.Rangoli     </p>
                        <p><input type="radio" name="question3" value="Mehndi" />B. Mehndi </p>
                        <p><input type="radio" name="question3" value="Mandala" />C.	Mandala   </p>
                        <p><input type="radio" name="question3" value="Dry Paint" />D. Dry Paint</p>
                    </div>
                </div>
                <div>
                    <p>4.	Gautama Buddha attained enlightenment while meditating underneath which tree?</p>
                    <div className="ans">
                        <p><input type="radio" name="question4" value="Ashoka Tree" />A.Ashoka Tree</p>
                        <p><input type="radio" name="question4" value="Mahabodhi Treeb" />B. Mahabodhi Tree </p>
                        <p><input type="radio" name="question4" value="Mango Tree" />C.	Mango Tree </p>
                        <p><input type="radio" name="question4" value="Neem Tree" />D. Neem Tree</p>
                    </div>
                </div>
                <div>
                    <p>5. 	Which of the following is an Indian dance form?</p>
                    <div className="ans">
                    <p><input type="radio" name = "question5" value = "img6"/> <img src="/assets/img6.jpg" alt="" /> A. </p>
                    <p><input type="radio" name = "question5" value = "img7"/> <img src="/assets/img7.jpg" /> B. </p>
                    <p><input type="radio" name = "question5" value = "img8"/> <img src="/assets/img8.jpg" /> C. </p>
                    <p><input type="radio" name = "question5" value = "img9"/> <img src="/assets/img9.jpg" /> D. </p>
                    </div>
                </div>
                <div>
                    <p>6.	This art form is popularly known as- <img src="/assets/img5.jpg" alt="" /></p>
                    <div className="ans">
                        <p><input type="radio" name="question6" value="Chole" />A.Chole     </p>
                        <p><input type="radio" name="question6" value="Vada Pav" />B. Vada Pav </p>
                        <p><input type="radio" name="question6" value="Tikki" />C.	Tikki    </p>
                        <p><input type="radio" name="question6" value="Samosa" />D.  Samosa</p>
                    </div>
                </div>
                <div>
                    <p>7.	Gautama Buddha attained enlightenment while meditating underneath which tree?</p>
                    <div className="ans">
                        <p><input type="radio" name="question7" value="Punjabe" />A.Punjabe</p>
                        <p><input type="radio" name="question7" value="Tamil Nadu" />B. Tamil Nadu </p>
                        <p><input type="radio" name="question7" value="Maharashtra" />C.	Maharashtra </p>
                        <p><input type="radio" name="question7" value="Gujarat" />D. Gujarat</p>
                    </div>
                </div>
                <div>
                    <p>8.	'Natya - Shastra' the main source of India's classical dances was written by</p>
                    <div className="ans">
                        <p><input type="radio" name="question8" value="Narad Muni" />A.Narad Muni</p>
                        <p><input type="radio" name="question8" value="Bharat Muni" />B. Bharat Muni </p>
                        <p><input type="radio" name="question8" value="Abhinav Gupt" />C.Abhinav Gupt </p>
                        <p><input type="radio" name="question8" value="Tandu Muni" />D.Tandu Muni</p>
                    </div>
                </div>
                <div>
                    <p>9.	This script is known as- <img src="/assets/img11.png" alt="" /></p>
                    <div className="ans">
                        <p><input type="radio" name="question9" value="Devanagri" />A.Devanagri</p>
                        <p><input type="radio" name="question9" value=" Brahmi" />B. Brahmi  </p>
                        <p><input type="radio" name="question9" value="Tamil" />C.Tamil   </p>
                        <p><input type="radio" name="question9" value="Kalinga" />D. Kalinga</p>
                    </div>
                </div>
                <div>
                    <p>10.	Gautama Buddha attained enlightenment while meditating underneath which tree?</p>
                    <div className="ans">
                        <p><input type="radio" name="question10" value="Sanskrit" />A.	Sanskrit</p>
                        <p><input type="radio" name="question10" value="Hindi" />B. Hindi </p>
                        <p><input type="radio" name="question10" value="Tamil" />C.Tamil</p>
                        <p><input type="radio" name="question10" value="None" />D. None</p>
                    </div>
                </div>

                

                <input type="submit" name="" value="I'm DOne" onClick = {(e) => {check(e)}} />
            </form>
            <p id="results"></p>
            
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

    }
    .ans{
        display:flex;
        p{
            text-align:center;
        }
        img{
            margin:10px;
        }

    }
    #results  {
        margin-top: 40px;
        font-size: 19px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom:60vh; 
        font-size: 50px;
        cursor:pointer;
    }
`
