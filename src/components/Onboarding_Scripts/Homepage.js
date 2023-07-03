import React from "react";
import { Link } from "react-router-dom";



export default function HomePage()
{
  
  

 
    
  

  const slider1 = (<div className="onboarding_main"><div id="onboarding_main_img_holder"><img id="onboarding_main_img" src="https://img.freepik.com/premium-vector/hands-holding-money-vector-illustration_10548-962.jpg" alt="not found" /></div>
  <h2 id="onboarding_main_header">Gain total control <br/>
     of your money</h2>
  <p id="onboarding_main_para">Become your own money manager <br/> and make every cent count</p></div> )

function handleClick(event)
{
 document.getElementById("1").style.backgroundColor="#EEE5FF"; document.getElementById("2").style.backgroundColor="#EEE5FF"
; document.getElementById("3").style.backgroundColor="#EEE5FF"

  document.getElementById(event.target.id).style.backgroundColor="#7F3DFF";  
switch(event.target.id)
{
  case "1" : document.getElementById("onboarding_main_img").src="https://img.freepik.com/premium-vector/hands-holding-money-vector-illustration_10548-962.jpg";
  document.getElementById("onboarding_main_header").textContent="Gain total control of your money"
  break;
  case "2": document.getElementById("onboarding_main_img").src = "https://st.depositphotos.com/1695366/1395/v/600/depositphotos_13951588-stock-illustration-cartoon-bills-past-due.jpg" ;
  document.getElementById("onboarding_main_header").textContent="Know where your money goes";
  document.getElementById("onboarding_main_para").textContent="Track your transaction easily, with categories and financial report";

  break;
  case "3": document.getElementById("onboarding_main_img").src = "https://thumbs.dreamstime.com/b/woman-planning-month-to-do-list-modern-businesswoman-cartoon-character-vector-illustration-154020930.jpg" ;
  document.getElementById("onboarding_main_header").textContent="Planning Ahead";
  document.getElementById("onboarding_main_para").textContent="TSetup your budget for each category so you in control";
  break;
}

}
  return(<div id="onboarding">
     {slider1}

  <div  id="onboarding_sliders">
    <div onMouseOver={handleClick} style={{backgroundColor:"#7F3DFF"}} id="1" ></div>
    <div onMouseOver={handleClick} id="2" ></div>
    <div onMouseOver={handleClick} id="3" ></div>
  </div>
  <div id="onboarding_signup"><Link to="signUp">Sign Up</Link></div>
  <div id="onboarding_login"><Link to="signIn" >Log In</Link></div>
    </div>)
}
