import NavBar from "../components/NavBar";
import "./programs.css";
import Copyright from "../components/cr.jsx";

export default function Programs() {
  const openNewWindow = () => {
    window.open(
      "https://calendly.com/msharma2-nd/30min?preview_source=et_card&month=2024-10",
      "Recruitmate Appointment",
      "resizable=yes, width=1300,height=700" 
    );
  };

  return (
    <>
      <NavBar />
      <div className="box">
        <div className="intro">
          <img src="src/images/program.jpg" alt="Program Image" />
          <div className="centre">
            <h2>Collegiate Prep Program</h2>
            <p>
              The Collegiate Prep Program is designed for high school athletes,
              offering 35-minute sessions with current college track athletes.
              This program focuses on personalized recruiting support, athletic
              development, and achieving college goals. Athletes work 1-on-1
              with their mentor to develop a personalized recruiting plan,
              navigate the recruiting process, and increase their chances of
              securing scholarships.
            </p>
          </div>
        </div>
        <br />
        <h2>BOOK</h2>
        <h2 style={{ margin: "2% 4%" }}>Collegiate Prep Program</h2>
        <div className="book">
          <div className="book1">
            <div>
              <h4>Personalized Recruiting Session (8-Week Bundle)</h4>
              <p>35 mins | $350</p>
            </div>
            <button className="bookbtn" type="button" onClick={openNewWindow}>
              BOOK
            </button>
          </div>


          <div className="book2">
            <div>
              <h4>Personalized Recruiting Session (One-Time)</h4>
              <p>35 mins | $50</p>
            </div>
            <button type="button" onClick={openNewWindow} className="bookbtn">
              BOOK
            </button>
          </div>
          
          <hr />
          <h2>Free Intro Consultation</h2>
          <div className="book3">
            <div>
              <h4>Personalized Recruiting Session (One-Time)</h4>
              <p>15 mins | Free</p>
              <p>Get more information and ask questions!</p>
            </div>
            <button type="button" onClick={openNewWindow} className="bookbtn">
              BOOK
            </button>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
}
