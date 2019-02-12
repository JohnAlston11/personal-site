import React, { Component } from 'react';
import ReactMorph from "react-morph";
import './Splash.css';

export default class Splash extends Component {
    moveSplash = (e) =>{
        document.querySelector(".svg").classList.toggle('move-splash');
        document.querySelector(".splash").classList.toggle('move-splash');
    }

    morph = ( ) => {}

    render(){
        return(
            <div>
                <svg className="svg" viewBox="0 0 215 110">
	                <rect className="polymorph" width="215" height="110"/>
                </svg>
                <div className="splash">
                    <div>
                        <h1>Johnathan Alston</h1>
                        <h2>Full Stack Web Developer</h2>
                    </div>
                    <br/><br/>
                    <div className="explore-button-container">
                        <button onClick={this.moveSplash} className="explore-button"><h3>Explore</h3></button>
                    </div>
                    <div class="shapeshifter play"></div>
                </div>
            </div>
        )
    }
}