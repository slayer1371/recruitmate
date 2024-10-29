import NavBar from "../components/NavBar";
import "./faq.css";

export default function Faq() {
  return (
    <>
      <NavBar />
      <div className="mainbox" >
      <h2>Track and Field Recruiting Hub</h2>
      <div className="blog1" id="tfr">
        <p>September 16, 2024 | Track and Field Recruiting</p>
        <h4>How Fast Do You Need to Be to Run Track in College?</h4>
        <h5>
          One of the most important questions for aspiring college track
          athletes is, &quot;How fast do I need to be to compete at the
          collegiate level?&qout; The answer varies depending on the division
          and the specific program you&apos;re aimin...
        </h5>
        <a href = "/how-fast-do-you-need-to-be-to-run-track-in-college"><button>Continue Reading</button></a>
      </div>
      <div className="blog2" id="tfr">
        <p>September 9, 2024 | Track and Field Recruiting</p>
        <h4>Are Track and Field Scholarships Full Ride?</h4>
        <h5>
          One of the most common questions aspiring college athletes have is
          whether track and field scholarships are full ride. The reality is
          that most track scholarships are not full ride, but there are
          opportunities to combine...
        </h5>
        <button>Continue Reading</button>
      </div>
      <div className="blog3" id="tfr">
        <p>September 9, 2024 | Track and Field Recruiting</p>
        <h4>How Many High School Track Runners Go to D1?</h4>
        <h5>
          One of the most common questions among high school track athletes is,
          &quot;What are my chances of competing at the Division 1 level?&quot;
          While many athletes dream of going D1, the reality is that only a
          small percentage actuall...{" "}
        </h5>
        <button>Continue Reading</button>
      </div>
      <div className="blog4" id="tfr">
        <p>September 2, 2024 | Track and Field Recruiting</p>
        <h4>When Can Colleges Start Recruiting for Track?</h4>
        <h5>
          Understanding when and how the college recruiting process begins is
          crucial for high school track and field athletes. The timeline can
          vary depending on the division and specific program, but there are
          general guidelines...
        </h5>
        <button>Continue Reading</button>
      </div>
      <div className="blog5" id="tfr">
        <img src="https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/Screenshot%202024-08-28%20at%206.35.30%E2%80%AFPM.png/:/cr=t:5.36%25,l:5.36%25,w:89.29%25,h:89.29%25/rs=w:1280" />
        <div>
          <p>August 30, 2024 | Track and Field Recruiting</p>
          <h4>When Can Colleges Start Recruiting for Track?</h4>
          <h5>
            Understanding when and how the college recruiting process begins is
            crucial for high school track and field athletes. The timeline can
            vary depending on the division and specific program, but there are
            general guidelines...
          </h5>
          <button>Continue Reading</button>
        </div>
      </div>
      <div className="blog6" id="tfr">
        <p>August 26, 2024 | Track and Field Recruiting</p>
        <h4>How to get Recruited for Track and field?</h4>
        <h5>
          Getting recruited for track and field is a goal for many high school
          athletes, but the process can seem overwhelming. It&apos;s not just about
          running fast or jumping far; it&apos;s also about knowing how to showcase
          your talents ...
        </h5>
        <button>Continue Reading</button>
      </div>
      </div>
    </>
  );
}
