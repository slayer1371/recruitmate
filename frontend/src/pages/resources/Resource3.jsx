import NavBar from "../../components/NavBar";
import "./res3.css";
import Copyright from "../../components/cr";


function Resource3() {
  return (
    <div>
      <NavBar />
      <div className="whole">
      <div className="entry">
      <div className="header">
        <h3>Essential Information to Include in Your Email:</h3>
        <table >
          <tr>
            <th>Full Name</th>
          </tr>
          <tr>
            <th>School Name</th>
          </tr>
          <tr>
            {" "}
            <th>Event Stats</th>
          </tr>
          <tr>
            <th>GPA/Test scores</th>
          </tr>
          <tr>
            <th>Cell Phone Number</th>
          </tr>
        </table>
        </div>
        <h3>How to Use The Email Templates:</h3>
        <p>
          When reaching out to college coaches, it&apos;s important to
          personalize your emails to make a strong impression. Here are some
          instructions to help you use the templates effectively:
        </p>
        <ol style={{ listStyle: "number" }}>
          <li>
            Personalize Your Introduction:
            <ul style={{ listStyle: "disc" }}>
              <li>
                Replace the placeholders with your specific information. This
                includes your name, grade, high school name, and the name of the
                college/university you are interested in.
              </li>
            </ul>
          </li>

          <li>
            Highlight Your Achievements:
            <ul style={{ listStyle: "disc" }}>
              <li>
                Fill in your best times/marks for your events. Make sure to
                include any personal records and notable achievements.
              </li>
            </ul>
          </li>

          <li>
          Academic Information:
            <ul style={{ listStyle: "disc" }}>
              <li>
                Include your ACT and SAT scores, as well as your GPA. If
                applicable, add your height and weight.
              </li>
            </ul>
          </li>

          <li>
          Express Genuine Interest:
            <ul style={{ listStyle: "disc" }}>
              <li>
              Explain why you are interested in the college/university and how
their program aligns with your goals. Mention your intended major to
show you are also focused on academics.
              </li>
            </ul>
          </li>

          <li>
          Ask Relevant Questions:
            <ul style={{ listStyle: "disc" }}>
              <li>
              Ask specific questions about the program, team dynamics, training
schedule, etc. This shows you are genuinely interested.
              </li>
            </ul>
          </li>

          <li>
          Proofread:
            <ul style={{ listStyle: "disc" }}>
              <li>
              Before sending, make sure to proofread your email for any errors
and ensure it sounds genuine and personalized.
              </li>
            </ul>
          </li>

        </ol>
      </div>
      <div className="sample1">
        <h3 style={{marginBottom:"2%"}}>Sample Email Script 1:</h3>
        <h5 style={{marginBottom:"1%"}}>Subject: [Your Name], ACT [Score], Best Event (Event)</h5>
        <p style={{marginBottom:"2%"}}>
          Dear Coach [Last Name], <br /><br />My name is [Your Name], and I&apos;m a [grade]
          at [high school name]. I&apos;m very interested in [college/university
          name] because of its strong academics and athletics. My ACT score is
          ____, SAT is _____, and I have a GPA of _____. <br /><br />I&apos;ve made great
          progress in track since starting in [year]. This year, I ran
          [time/mark] in the [Event]. (Optional: I also have a PR of [time/mark]
          in the [Event].) I plan to major in [study of interest], one of the
          top programs at [college/university name]. Given your team&apos;s
          success in my event, I believe your program is the ideal place for me
          to excel. Could you tell me more about the training schedule and how
          your athletes balance academics and athletics? <br /><br />Looking forward to
          hearing from you. Feel free to contact me at [Phone Number] if you
          need any more information. <br /><br />Thanks, <br/> [Your Name]
        </p>
      </div>
      <div className="sample2">
        <h3 style={{marginBottom:"2%"}}>Sample Email Script 2:</h3>
        <h5 style={{marginBottom:"1%"}}>Subject: [Your Name], SAT [Score], Best Event (Event)</h5>
        <p style={{marginBottom:"2%"}}>
          Dear Coach [Last Name], <br /><br />My name is [Your Name], and I&apos;m a [grade]
          at [high school name]. I&apos;m very interested in [college/university
          name]&apos;s track and field program for its academic and athletic
          excellence. My ACT score is ____, SAT is _____, and my GPA is _____.<br /><br />I
          started track in [year] and recently ran [time/mark] in the [Event].
          (Optional: My PR in the [Event] is [time/mark].) I plan to major in
          [study of interest], and your program&apos;s reputation for developing
          top athletes makes it the perfect place for me. Could you share more
          about your approach to athlete development? <br /><br /> I&apos;m eager to learn
          more about your program and how I could contribute to your team.
          Please feel free to contact me at [Phone Number] if you need any more
          information.<br /><br /> Best regards, <br /> [Your Name]
        </p>
      </div>
      <div className="sample3">
        <h3 style={{marginBottom:"2%"}}>Sample Email Script 3:</h3>
        <h5 style={{marginBottom:"1%"}}>Subject: [Your Name], GPA [Score], Best Event (Event)</h5>
        <p style={{marginBottom:"1%"}}>
          Dear Coach [Last Name],<br /><br /> My name is [Your Name], and I&apos;m a [grade]
          at [high school name]. I&apos;m interested in [college/university
          name] for its strong academics and athletics. My ACT score is ____,
          SAT is _____, and I have a GPA of _____.<br /><br /> I&apos;ve been running track
          since [year] and recently ran [time/mark] in the [Event]. (Optional:
          My PR in the [Event] is [time/mark].) I plan to major in [study of
          interest], and I&apos;m excited about the opportunities at
          [college/university name]. I&apos;m impressed by your team&apos;s
          success and believe your program will help me reach my goals. Could
          you tell me more about the support systems for student-athletes?<br /><br />
          I&apos;d love to discuss how I can contribute to your team. Feel free
          to contact me at [Phone Number] if you need any more information.<br /><br />
          Thank you,<br /> [Your Name]
        </p>
      </div>
    </div>
    <Copyright />
    </div>
  );
}
export default Resource3;
