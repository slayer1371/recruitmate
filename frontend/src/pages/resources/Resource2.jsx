import NavBar from "../../components/NavBar";
import "./res2.css";
import Copyright from "../../components/cr";

function Resource2() {
  return (
    <div>
      <NavBar />
      <div className="table">
        <h1>Recruiting Rules Overview</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Division</th>
              <th>Initial Contact</th>
              <th>Additional Rules</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>NCAA D1</th>
              <th>June 15 after sophomore year</th>
              <th>
                Coaches can send general info any time. Full contact (calls,
                emails, DMs) starts June 15 after sophomore year.
                Unofficial/official visits start August 1 before junior year.
              </th>
            </tr>
            <tr>
              <th>NCAA D2</th>
              <th>June 15 after sophomore year</th>
              <th>
                Similar to D1 but with more relaxed rules. Athletes can take
                unofficial visits any time. Full contact starts June 15 before
                junior year
              </th>
            </tr>
            <tr>
              <th>NCAA D3</th>
              <th>Anytime</th>
              <th>
                {" "}
                Minimal restrictions. Coaches can contact recruits any time.
                Off-campus contact and official visits start January 1 of junior
                year.
              </th>
            </tr>
            <tr>
              <th>NAIA </th>
              <th>Anytime </th>
              <th>
                Virtually no restrictions. Coaches can contact recruits at any
                time and as often as needed.
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bullet">
        <h2>
          <b>Detailed Division Rules</b>
        </h2>
        <h5>
          <b>NCAA Division 1</b>
        </h5>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            Anytime: General camp brochures, recruiting questionnaires, and
            non-athletic publications.
          </li>
          <li>
            June 15 after sophomore year: Full contact (Coach Initiated),
            including phone calls, texts, emails, social media DMs, and
            recruiting materials.
          </li>
          <li>
            August 1 before junior year: Off-campus contact, unofficial/official
            visits.
          </li>
        </ul>
        <h5>
          <b>NCAA Division 2</b>
        </h5>
        <ul style={{ listStyleType: "disc" }}>
          <li>Anytime: Unofficial visits and general materials allowed.</li>
          <li>
            June 15 before junior year: Full contact (Coach Initiated),
            including electronic communications and recruiting materials.
            Official visits and off-campus contact allowed.
          </li>
        </ul>
        <h5>
          <b>NCAA Division 3</b>
        </h5>
        <ul style={{ listStyleType: "disc" }}>
          <li>Recruiting Materials: Anytime.</li>
          <li>Electronic Communication: Anytime.</li>
          <li>Unofficial Visits: Anytime</li>
          <li>Official Visits: January 1 of junior year</li>
          <li>Off-campus Contact: After sophomore year.</li>
        </ul>
        <h5>
          <b>NAIA</b>
        </h5>
        <ul style={{ listStyleType: "disc" }}>
          <li>Contact: Anytime and unlimited.</li>
          <li>
            Recruiting Timeline: Generally starts after D1/D2 timelines,
            continuing well into senior year.
          </li>
        </ul>
      </div>
      <div className="images">
        <img src="src/images/page1-res2.png" width={"80%"}/>
        <img src="src/images/page2-res2.png" width={"80%"}/>
      </div>
      <Copyright />
    </div>
  );
}
export default Resource2;
