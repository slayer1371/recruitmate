import NavBar from "../components/NavBar";
import "./about.css";
import CenterModeCarousel from "../components/CenterModeCarousel";
import Copyright from "../components/cr.jsx";
import { Ytvideo } from "../components/Ytvideo.jsx";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function About() {
  return (
    <>
      <NavBar />
      <CenterModeCarousel />

      <div className="box1">
        <div className="story">
          <h3>OUR STORY</h3>
          <p>
            RecruitMate was founded by former track and field athletes who
            experienced firsthand the challenges of the college recruiting
            process. Navigating this complex journey highlighted the need for a
            platform that simplifies recruitment and offers mentorship from
            college athletes. Our passion for the sport and commitment to
            helping young athletes achieve their collegiate dreams and secure
            track and field scholarships led to the creation of RecruitMate.
          </p>
        </div>
        <div className="philosophy">
        <h3>OUR PHILOSOPHY</h3>
        <p>
          Our goal is to help high school athletes grow both athletically and
          personally. With 1-on-1 mentorship from college athletes, they’ll
          develop a personalized recruiting plan that prepares them for the
          college recruiting process. RecruitMate provides the guidance needed
          to navigate admissions and increase the chances of securing
          scholarships.
        </p>
        </div>
        <div className="teamclass">
        <h3>OUR TEAM</h3>
        <p>
          Our team consists of dedicated professionals passionate about track
          and field, committed to supporting young athletes. We unite a diverse
          group of experts, including current and former Division 1 track and
          field athletes, coaches, and recruiting specialists, all with the
          shared goal of helping athletes succeed. Leveraging their extensive
          experience and knowledge, our team members provide the best possible
          guidance and support to our users. Through personalized mentorship
          from college athletes, we ensure that young athletes receive expert
          advice tailored to their specific needs.
        </p>
      </div>
      </div>

      <div className="founder">
      <h3>The Founder</h3>
        <p>
          Joey Zayszly, the founder of RecruitMate, has a deep and personal
          understanding of the college recruiting process. As a track athlete,
          Zayszly navigated the recruiting journey three times—first out of high
          school and then through two transfers. Each experience brought its own
          set of challenges and frustrations, highlighting the need for a more
          streamlined and effective process. <br />
          Zayszly&apos;s firsthand experiences with the complexities and
          obstacles of the recruiting process inspired him to create
          RecruitMate. His goal is to simplify and enhance the recruiting
          journey for other track and field athletes, helping them achieve their
          collegiate dreams. Beyond his dedication to RecruitMate, Zayszly has
          also been actively involved in community and volunteer work. He has
          served as a Volunteer Assistant Track Coach, where he shared his
          knowledge and passion for the sport with young athletes.{" "}
        </p>
        <img
          src="https://img1.wsimg.com/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/Screenshot%202024-07-05%20at%202.00.00%E2%80%AFPM.png/:/cr=t:0%25,l:0%25,w:100%25,h:93.07%25/rs=w:800,h:800,cg:true"
          width={"300px"}
          height={"300px"}
        />
      </div>
      <div className="parentyt">
        <div className="yt">
          <Ytvideo />
          </div>
        <div className="connect">
          <h5>Connect With Us</h5>
          <br />
          <div className="images">
            <a
              href="https://www.facebook.com/people/RecruitMate/61562255909402/"
              target="_blank"
            >
              <FaFacebook size="50px" color="black" />{" "}
            </a>

            <a href="https://www.instagram.com/recruitmate.app" target="_blank">
              {" "}
              <FaInstagram size="50px" color="black" />{" "}
            </a>
            <a
              href="https://www.tiktok.com/@recruitmate?_t=8nm4JElFSsY&_r=1"
              target="_blank"
            >
              {" "}
              <FaTiktok size="50px" color="black" />
            </a>
            <a
              href="https://www.x.com/i/flow/login?redirect_after_login=%2Frecruitmateapp"
              target="_blank"
            >
              <FaXTwitter size="50px" color="black" />{" "}
            </a>
          </div>
          </div>
      </div>
      <Copyright />
    </>
  );
}
