import Cardcomp from "../components/Cardcomp.jsx";
import NavBar from "../components/NavBar";
import Copyright from "../components/cr.jsx";
import teamdata from "../data/team.js";
import "./mentors.css";
import quf from '../images/quf.png';
import nd from '../images/notredamef.png';

export default function Mentors() {
  return (
    <>
      <NavBar />
      <h5 style={{"margin":"2% 0 2% 17%"}}>EXECUTIVE LEADERSHIP TEAM</h5>
      <div className="layout">
        {teamdata.team.map((member, index) => (
          <Cardcomp key={index} member={member} />
        ))}
      </div>
      <div className="scnames">
        <img src = "https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/Incarnate-Word-Cardinals-Baseball-Logo-a9ae0fb.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:356,h:200,cg:true" />
        <img src = "https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/logo-vertical-stacked-black-text-77be3fe.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:271,h:200,cg:true" />
        <img src = "https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/Southalabama_jaguars_logo-bf9d3ad.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:276,h:200,cg:true" />
        <img src = "https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/mississippi-state-university-logo-free-77132b0.png/:/rs=w:320,h:200,cg:true,m/cr=w:320,h:200" />
        <img src = {quf}/>
        <img src = {nd} />
      </div>
      <Copyright />
    </>
  );
}
