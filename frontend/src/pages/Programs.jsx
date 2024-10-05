import { useState } from "react"; // Import useState to manage component state
import NavBar from "../components/NavBar";
import Calendar from "../components/page";
import "./programs.css";
import Copyright from "../components/cr.jsx";


export default function Programs() {
  // Separate state for each calendar
  const [isFirstCalendarVisible, setFirstCalendarVisible] = useState(false);
  const [isSecondCalendarVisible, setSecondCalendarVisible] = useState(false);
  const [price, setPrice] = useState("");

  // Function to handle the first booking button click
  const handleFirstBookClick = () => {
    setPrice("350.00");
    setFirstCalendarVisible(true); // Show the first calendar
    setSecondCalendarVisible(false); // Hide the second calendar if visible
  };

  // Function to handle the second booking button click
  const handleSecondBookClick = () => {
    setPrice("50.00");
    setSecondCalendarVisible(true); // Show the second calendar
    setFirstCalendarVisible(false); // Hide the first calendar if visible
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
        </div><br />
        <h2>BOOK</h2>
        <h2 style={{margin:"2% 4%"}}>Collegiate Prep Program</h2>
        <div className="book">
        <div className="book1">
 
          <div>

          <h4>Personalized Recruiting Session (8-Week Bundle)</h4>
          <p>35 mins | $350</p>
          </div>
          <button
            className="bookbtn"
            type="button"
            onClick={handleFirstBookClick}
          >
            BOOK
          </button>
          </div>

          {/* Render the first Calendar component conditionally */}
          {isFirstCalendarVisible && <Calendar price={price}/>}


          <div className="book2">
          <div>
          <h4>Personalized Recruiting Session (One-Time)</h4>
          <p>35 mins | $50</p>
          </div>
          <button
            type="button"
            onClick={handleSecondBookClick}
            className="bookbtn"
          >
            BOOK
          </button>
          </div>

          {/* Render the second Calendar component conditionally */}
          {isSecondCalendarVisible && <Calendar price={price}/>}
          <hr />
          <h2>Free Intro Consultation</h2>
          <div className="book3">
          <div>
          <h4>Personalized Recruiting Session (One-Time)</h4>
          <p>15 mins | Free</p>
          <p>Get more information and ask questions!</p>
          </div>
          <button
            type="button"
            onClick={handleSecondBookClick}
            className="bookbtn"
          >
            BOOK
          </button>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
}
