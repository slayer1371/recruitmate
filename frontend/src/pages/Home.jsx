import NavBar from "../components/NavBar";
import Lander from "../components/Lander";
import "./home.css";
import Copyright from "../components/cr.jsx";
import { useState } from "react";
import ComparisonTable from "../components/ComparisonTable";
import SignUpPopup from "../components/Signup";

function Home() {
  const [username, setUsername] = useState(null); // State for username
  return (
    <>
      <NavBar username={username} />
      <Lander /> 
      <div className="one">
        <h4>RUN FOR A CAUSE</h4>
        <div className="text-image">
          <img src="src/images/run_for_cause.png" width={"45%"} />
          <div className="text">
            <h4>Our Mission</h4>
            <p className="ow-break">
              At RecruitMate, we&apos;re dedicated to helping high school track
              and field athletes navigate the college recruiting process.
              Athletes work 1-on-1 with a college athlete mentor to develop a
              personalized recruiting plan. They’ll meet with their mentor
              monthly (or more, if needed) to track progress, ask questions
              about recruiting, and get advice on training, nutrition, and more.
              Founded by athletes, RecruitMate simplifies the path to college
              athletics, making track and field accessible to everyone and
              empowering athletes to reach their full potential.
            </p>
          </div>
        </div>
        <br />
        <h4>STAND OUT FROM THE CROWD</h4>
        <div className="standout">
          <p>
            Track and field was the most popular high school sport in 2022-2023,
            with 1,091,338 participants across both boys&apos; and girls&apos;
            events (NFHS, 2024). With over a million athletes competing, how
            will your student athlete stand out in the track and field
            recruiting process? RecruitMate connects your student-athlete with a
            college athlete mentor to create a personalized recruiting plan.
            With ongoing guidance, they’ll have the support needed to secure a
            spot on a college team and maximize their chances of earning track
            and field scholarships.
          </p>
        </div>
        <h4>YOUR CHILD&apos;S PATH TO SUCCESS</h4>
        <div className="flexbox">
          <div className="homecard">
            <h3>
              Connect with <br />
              Current Athletes
            </h3>
            <p>
              Your student-athlete will be paired with a college athlete who
              will serve as their mentor. They will receive guidance from
              someone who understands what it&apos;s like, offering insights and
              advice based on their recent successful track and field recruiting
              process. Our matching process considers your
              student-athlete&apos;s specific goals, event, and personal
              preferences, ensuring the best fit.
            </p>
          </div>
          <div className="homecard">
            <h3>
              Personalized <br />
              Mentorship
            </h3>
            <p>
              Gain valuable insights and advice by asking questions directly to
              current Division 1 track athletes. Whether your student athlete is
              curious about training routines, balancing academics and
              athletics, or navigating the recruiting process, the mentorship
              from college athletes they will receive can greatly help them
              achieve their athletic goals and hopefully secure track and field
              scholarships.
            </p>
          </div>
          <div className="homecard">
            <h3>
              Get <br />
              Recruited :)
            </h3>
            <p>
              Student-athletes will learn how to effectively connect with
              college coaches and present themselves as strong candidates for
              track and field scholarships. They will gain insights on how to
              craft compelling emails, prepare for coach interactions, and make
              a memorable impression. This mentorship from college athletes will
              help them stand out in the competitive track and field recruiting
              landscape.
            </p>
          </div>
        </div>
        <div className="programs">
          <h4>Our Programs</h4>
          <p>
            At RecruitMate, our Collegiate Prep Program is tailored specifically
            for high school athletes. Athletes work with their mentors to create
            a recruiting plan and gain insights on securing track and field
            scholarships. They can meet with their mentor monthly or as needed
            to stay on track and achieve their goals.
          </p>
          <a href="/programs">
            <button>LEARN MORE</button>
          </a>
        </div>
        <div className="resources">
          <h4>Free Recruiting Resources Available</h4>
          <p>
            We offer direct access to recruit questionnaires for every D1
            school, along with an overview of recruiting rules and calendars for
            all NCAA divisions. You&apos;ll also find easy-to-use email templates to
            help your student-athlete reach out to coaches, and clear recruiting
            standards with the marks and performance levels needed to earn track
            and field scholarships.
          </p>
          <a href="/resources1">
            <button>FREE RESOURCES</button>
          </a>
        </div>
        <br />
        <br/>
        <div>
          <h4>WHAT MAKES US DIFFERENT</h4>
          <ComparisonTable />
        </div>
        <div className="last-btn">
          <h3>SIGN UP TODAY !!</h3>
          <SignUpPopup />
          <br />
          <a href="mailto:info@recruitmate.app">
            <h6>info@recruitmate.app</h6>
          </a>
          <h6>(857) 600-0791</h6>
        </div>
      </div>
      <Copyright />
    </>
  );
}

export default Home;
