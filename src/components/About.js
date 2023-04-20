import React from "react";
import Links from "./Links";

function About(props) {
  //console.log(props.github)
  if(!props.bio || ""){
    return null;
  }else{
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */<Links githubs={props.github} linkedins={props.linkedin}/>}
      </div>
    );
  }
  

}

export default About;
