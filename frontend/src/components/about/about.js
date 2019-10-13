import React from "react";
import './about.css';

const About = props => (
    <div className='about'>
        <h1>Meet the Developers</h1>
        <div className='column'>
            <h2>Arshia Khoshnood</h2>
            <img src='https://avatars3.githubusercontent.com/u/16123821?s=460&v=4' alt='arshia'></img>
            <div>
                <p>I am a software engineer experienced in Ruby, Rails, Javascript, MongoDB, Express, React, Redux and Node.js. My passion for coding started back in high school when I developed my first application on a TI graphing calculator which was a text based RPG, as I've always loved video games.</p>
            </div>
            <div className='social-links'>
                <a href='https://github.com/youthinkasido'><i className="fab fa-github"></i></a>
                <a href='https://www.linkedin.com/in/arshia-khoshnood/'><i className="fab fa-linkedin-in"></i></a>
                <a href='https://angel.co/arshiak'><i className="fab fa-angellist"></i></a>
            </div>
        </div>
        <div className='column'>
            <h2>Cameron Farina</h2>
            <img src='https://avatars3.githubusercontent.com/u/49376677?s=460&v=4' alt='cameron'></img>
            <div>
                <p>I’m a passionate software engineer with the innovative and creative mindset of an entrepreneur. I have experience building dynamic full-stack applications using JavaScript, React, Redux, Ruby on Rails, MongoDB, PostgreSQL, and HTML/SCSS.</p>
            </div>
            <div className='social-links'>
                <a href='https://github.com/cameronfarina'><i className="fab fa-github"></i></a>
                <a href='https://www.linkedin.com/in/cameron-farina-a559ba85/'><i className="fab fa-linkedin-in"></i></a>
                <a href='https://angel.co/cameron-farina'><i className="fab fa-angellist"></i></a>
            </div>
        </div>
        <div className='column'>
            <h2>Robert Yeakel</h2>
            <img src='https://avatars1.githubusercontent.com/u/23121782?s=460&v=4' alt='robert'></img>
            <div>
                <p>I'm a software engineer that enjoys making new things and optimizing old things. I'm motivated by learning how to write clean, efficient code and understanding better ways to solve problems. I've worked with React, Redux, JavaScript, Ruby, Ruby on Rails, PostgresSQL, MongoDB, Express, GraphQL, and Docker.</p>
            </div>
            <div className='social-links'>
                <a href='https://github.com/zeloxx'><i className="fab fa-github"></i></a>
                <a href='https://www.linkedin.com/in/rjy/'><i className="fab fa-linkedin-in"></i></a>
                <a href='https://angel.co/robert-yeakel'><i className="fab fa-angellist"></i></a>
            </div>
        </div>
        <div className='column'>
            <h2>Savannah Musladin</h2>
            <img src='https://avatars1.githubusercontent.com/u/49349891?s=460&v=4' alt='savannah'></img>
            <div>
                <p>I'm a software engineer experienced in working with JavaScript, React, Redux, and Rails. I'm passionate about problem solving and am happiest when completely immersed in a complex problem. I love the battle of developing an idea into existence, and forging the bridge between conceptualization and a tangible product.</p>
            </div>
            <div className='social-links'>
                <a href='https://github.com/savmus'><i className="fab fa-github"></i></a>
                <a href='https://www.linkedin.com/in/savannah-musladin-525948193/'><i className="fab fa-linkedin-in"></i></a>
                <a href='https://angel.co/savmus'><i className="fab fa-angellist"></i></a>
            </div>
        </div>
    </div>
);

export default About;