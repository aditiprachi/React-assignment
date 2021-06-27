import React from 'react'
import "./edu.css"
const Education = () => {
    return (
        <div>
           <div class="timeline">
           <div class="timeline__component">
                    <div class="timeline__date timeline__date--right">Present</div>
                </div>
                <div class="timeline__middle">
                    <div class="timeline__point"></div>
                </div>
                <div class="timeline__component timeline__component--bg">
                    <h2 class="timeline__title">Sir M Visvesvaraya Institute of Technology</h2>
                    <p class="timeline__paragraph">
                    I am in pre-final year of BE in Information Science and Engineering. <br/>
                    CGPA till now: 9.12
                    </p>
                </div>
                <div class="timeline__component timeline__component--bg">
                    <h2 class="timeline__title">Kendriya Vidyalaya, Muzaffarpur, Bihar</h2>
                    <p class="timeline__paragraph">
                    I completed my class 12th. My subjects were Physics, Chemistry, Mathematics, Hindi and English.
                    I was the school topper with 94%.
                    </p>
                </div>
                <div class="timeline__middle">
                    <div class="timeline__point"></div>
                </div>
                <div class="timeline__component">
                    <div class="timeline__date">May 2017</div>
                </div>
                <div class="timeline__component">
                    <div class="timeline__date timeline__date--right">May, 2015</div>
                </div>
                <div class="timeline__middle">
                    <div class="timeline__point"></div>
                </div>
                <div class="timeline__component timeline__component--bg">
                    <h2 class="timeline__title">Kendriya Vidyalaya, Shahjahanpur, UP</h2>
                    <p class="timeline__paragraph">
                    I completed my class 10th.
                    CGPA: 10
                    </p>
                </div>
                </div>
        </div>
    )
}

export default Education
