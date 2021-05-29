import React from 'react'
import styled from 'styled-components'

function MediumQuiz() {
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
        if(q1 == "img2")
            c++
        if(q2 == "15"){
            c++
        }
        if(q3 == 'Onam'){
            c++
        }
        if(q4 == "Buddhism"){
            c++
        }
        if(q5 == "img8"){
            c++         
        }
        if(q6 == "Assam"){
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
        if(q10 == "Rabindranath Tagore"){
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
                <p>1. 	Which of the following is the national flower of India?</p>
                <div className="ans">
                <p><input type="radio" name = "question1" value = "img1"/> <img src="/assets/medium/img1.jpg" alt="" /> A. </p>
                <p><input type="radio" name = "question1" value = "img2"/> <img src="/assets/medium/img2.jpg" /> B. </p>
                <p><input type="radio" name = "question1" value = "img3"/> <img src="/assets/medium/img3.jpg" /> C. </p>
                <p><input type="radio" name = "question1" value = "img4"/> <img src="/assets/medium/img4.jpg" /> D. </p>
                </div>
            </div>
            <div>
                <p>2.   The number of major languages recognized in the Indian Union as official language are-</p>
                <div className="ans">
                    <p><input type="radio" name="question2" value="15" />A.15</p>
                    <p><input type="radio" name="question2" value="22" />B. 22 </p>
                    <p><input type="radio" name="question2" value="12" />C.	12 </p>
                    <p><input type="radio" name="question2" value="9" />D.9</p>
                </div>
            </div>
            <div>
                <p>3.Which Indian festival is celebrated with boat races? <img src="/assets/medium/img5.jpg" alt="" /></p>
                <div className="ans">
                    <p><input type="radio" name="question3" value="Onam" />A.Onam     </p>
                    <p><input type="radio" name="question3" value="Bihu" />B. Bihu </p>
                    <p><input type="radio" name="question3" value="Navratri" />C.	Navratri  </p>
                    <p><input type="radio" name="question3" value="Pongal" />D. Pongal</p>
                </div>
            </div>
            <div>
                <p>4.	Jataka tales are associated with which religion?</p>
                <div className="ans">
                    <p><input type="radio" name="question4" value="Hindusim" />A.Hindusim</p>
                    <p><input type="radio" name="question4" value="Buddhism" />B. Buddhism </p>
                    <p><input type="radio" name="question4" value="Jainism" />C.	Jainism </p>
                    <p><input type="radio" name="question4" value="Neem Tree" />D.Islam</p>
                </div>
            </div>
            <div>
                <p>5. 	Which of the following is an image of the Konark Sun temple which is situated in Puri?</p>
                <div className="ans">
                <p><input type="radio" name = "question5" value = "img6"/> <img src="/assets/medium/img6.jpg" alt="" /> A. </p>
                <p><input type="radio" name = "question5" value = "img7"/> <img src="/assets/medium/img7.jpg" /> B. </p>
                <p><input type="radio" name = "question5" value = "img8"/> <img src="/assets/medium/img8.jpg" /> C. </p>
                <p><input type="radio" name = "question5" value = "img9"/> <img src="/assets/medium/img9.jpg" /> D. </p>
                </div>
            </div>
            <div>
                <p>6.This traditional attire is popular in which state? <img src="/assets/medium/img10.jpg" alt="" /></p>
                <div className="ans">
                    <p><input type="radio" name="question6" value="Assam" />A.Assam     </p>
                    <p><input type="radio" name="question6" value="Delhi" />B. Delhi </p>
                    <p><input type="radio" name="question6" value="Gujrat" />C.	Gujrat    </p>
                    <p><input type="radio" name="question6" value="Karnataka" />D.  Karnataka</p>
                </div>
            </div>
            <div>
                <p>7. Ghazal, a form of poetry, is usually written in which language in India?</p>
                <div className="ans">
                    <p><input type="radio" name="question7" value="Hindi" />A.Hindi</p>
                    <p><input type="radio" name="question7" value="Punjabi" />B. Punjabi </p>
                    <p><input type="radio" name="question7" value="Kannada" />C.	Kannada </p>
                    <p><input type="radio" name="question7" value="Urdu" />D. Urdu</p>
                </div>
            </div>
            <div>
                <p>8. Which of the following is a picture of a vehicle popularly known as Tuk-tuk?</p>
                <div className="ans">
                <p><input type="radio" name = "question5" value = "img11"/> <img src="/assets/medium/img11.jpg" alt="" /> A. </p>
                <p><input type="radio" name = "question5" value = "img12"/> <img src="/assets/medium/img12.jpg" /> B. </p>
                <p><input type="radio" name = "question5" value = "img13"/> <img src="/assets/medium/img13.jpg" /> C. </p>
                <p><input type="radio" name = "question5" value = "img14"/> <img src="/assets/medium/img14.jpg" /> D. </p>
                </div>
            </div>
            <div>
                <p>9. What is the name of this classical music instrument? <img src="/assets/medium/img15.jpg" alt="" /></p>
                <div className="ans">
                    <p><input type="radio" name="question9" value="Tabla" />A.	Tabla</p>
                    <p><input type="radio" name="question9" value=" Drums" />B. Drums  </p>
                    <p><input type="radio" name="question9" value="Mridangam" />C.Mridangam   </p>
                    <p><input type="radio" name="question9" value="Dholak" />D. Dholak</p>
                </div>
            </div>
            <div>
                <p>10. This is a self-portrait of which artist? <img src="/assets/medium/img16.jpg" alt="" /></p>
                <div className="ans">
                    <p><input type="radio" name="question9" value="M.F.Husain" />A.	M.F. Husain</p>
                    <p><input type="radio" name="question9" value=" Rabindranath Tagore" />B. Rabindranath Tagore  </p>
                    <p><input type="radio" name="question9" value="Raja Ravi Varma" />C.Raja Ravi Varma   </p>
                    <p><input type="radio" name="question9" value="S.H. Raza" />D. S.H. Raza</p>
                </div>
            </div>
           

            

            <input type="submit" name="" value="I'm DOne" onClick = {(e) => {check(e)}} />
        </form>
        <p id="results"></p>
        
    </Container>
    )
} 

export default MediumQuiz

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
