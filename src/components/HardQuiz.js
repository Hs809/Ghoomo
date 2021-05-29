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
        if(q1 == "img4")
            c++
        if(q2 == "Bay of Bengal"){
            c++
        }
        if(q3 == 'Veena'){
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
        if(q7 == "06:30 pm IST"){
            c++
        }
        if(q8 == "img13"){
            c++
        }
        if(q9 == "Mawsynram, Meghalaya"){
            c++
        }
        if(q10 == "Rabindranath Tagore"){
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
                    <p>1. 	Which of the following is the famous painting Shakuntala, painted by Raja Ravi Varma?</p>
                    <div className="ans">
                    <p className="images"><input type="radio" name = "question1" value = "img1"/> <img src="/assets/Hard/img1.jpg" alt="" /> A. </p>
                    <p className="images"><input type="radio" name = "question1" value = "img2"/> <img src="/assets/Hard/img2.jpg" /> B. </p>
                    <p className="images"><input type="radio" name = "question1" value = "img3"/> <img src="/assets/Hard/img3.jpg" /> C. </p>
                    <p className="images"><input type="radio" name = "question1" value = "img4"/> <img src="/assets/Hard/img4.jpg" /> D. </p>
                    </div>
                </div>
                <div>
                <p>2.  Which water body is situated to the south-east of India?</p>
                <div className="ans textans">
                    <p className = "text"><input type="radio" name="question2" value="Indian Ocean" />A.Indian Ocean</p>
                    <p className = "text"><input type="radio" name="question2" value="Arabian SeaB.	Bay of Bengal" />B. Arabian SeaB </p>
                    <p className = "text"><input type="radio" name="question2" value="Bay of Bengal" />C.Bay of Bengal </p>
                    <p className = "text"><input type="radio" name="question2" value="None" />D.None</p>
                </div>
                </div>
                <div>
                <p>3.This classical music instrument is called- <img src="/assets/hard/img5.png" alt="" /></p>
                <div className="ans textans">
                    <p className = "text"><input type="radio" name="question3" value="Sarod" />A.Sarod	</p>
                    <p className = "text"><input type="radio" name="question3" value="Veena" />B. Veena </p>
                    <p className = "text"><input type="radio" name="question3" value="Violin" />C.	Violin  </p>
                    <p className = "text"><input type="radio" name="question3" value="Guitar" />D. Guitar</p>
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
                <p>7.What time would 13:00 UTC be in Indian Standard Time?</p>
                <div className="ans textans">
                    <p className = "text"><input type="radio" name="question7" value="19:30 IST" />A.19:30 IST</p>
                    <p className = "text"><input type="radio" name="question7" value="06:30 pm IST" />B. 06:30 pm IST </p>
                    <p className = "text"><input type="radio" name="question7" value="06:30 am IST!" />C.	06:30 am IST </p>
                    <p className = "text"><input type="radio" name="question7" value="What?!" />D. What?!</p>
                </div>
            </div>
            <div>
                <p>8.Which one of these is a National Animal of India?</p>
                <div className="ans">
                <p className="images"><input type="radio" name = "question8" value = "img11"/> <img src="/assets/Hard/img11.jpg" alt="" /> A. </p>
                <p className="images"><input type="radio" name = "question8" value = "img12"/> <img src="/assets/Hard/img12.jpg" /> B. </p>
                <p className="images"><input type="radio" name = "question8" value = "img13"/> <img src="/assets/Hard/img13.jpg" /> C. </p>
                <p className="images"><input type="radio" name = "question8" value = "img14"/> <img src="/assets/Hard/img14.jpg" /> D. </p>
                </div>
            </div>
            <div>
                <p>9. The highest annual rainfall is reported at-    </p>
                <div className="ans textans">
                    <p className = "text"><input type="radio" name="question9" value="Namchi, Sikkim" />A.	Namchi, Sikkim</p>
                    <p className = "text"><input type="radio" name="question9" value=" Churu, Rajasthan" />B. Churu, Rajasthan  </p>
                    <p className = "text"><input type="radio" name="question9" value="Mawsynram, Meghalaya" />C.Mawsynram, Meghalaya   </p>
                    <p className = "text"><input type="radio" name="question9" value="Chamba, Himachal Pradesh" />D. Chamba, Himachal Pradesh</p>
                </div>
            </div>
            <div>
                <p>10.Which one is the official saffron colour in Indian National Flag?</p>
                <div className="ans">
                <p className="images"><input type="radio" name = "question10" value = "img15"/> <img src="/assets/Hard/img15.jpg" alt="" /> A. </p>
                <p className="images"><input type="radio" name = "question10" value = "img16"/> <img src="/assets/Hard/img16.jpg" /> B. </p>
                <p className="images"><input type="radio" name = "question10" value = "img17"/> <img src="/assets/Hard/img17.jpg" /> C. </p>
                <p className="images"><input type="radio" name = "question10" value = "img18"/> <img src="/assets/Hard/img18.jpg" /> D. </p>
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
