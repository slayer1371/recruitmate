import "./pdf.css";

const SchoolList = ({ conferences }) => {

  return (
    <div className="grid-container">
      {conferences.map((conference, index) => (
        <div key={index} className="conference-card">
          <h2>{conference.name}</h2> {/* Display the conference name */}
          
          {conference.schools.map((school, idx) => (
            <div key={idx} className="school-card">
              <img src={school.img} alt="hello" />
              <h3>{school.name}</h3> {/* Display the school name */}
              <p><strong>City:</strong> {school.city}</p> {/* Display the city */}
              <p><strong>State:</strong> {school.state}</p> {/* Display the state */}
              
              {typeof school.recruit_questionnaire === 'string' && school.recruit_questionnaire !== 'No' ? (
                <p>
                  <strong>Recruit Questionnaire:</strong>{' '}
                  <a href={school.recruit_questionnaire} target="_blank" rel="noopener noreferrer">
                    {school.recruit_questionnaire}
                  </a>
                </p>
              ) : null}

              {typeof school.recruit_questionnaire === 'object' && (
                <div>
                  <p><strong>Men&apos;s Recruit Questionnaire:</strong> 
                    <a href={school.recruit_questionnaire.men} target="_blank" rel="noopener noreferrer">
                      {school.recruit_questionnaire.men}
                    </a>
                  </p>
                  <p><strong>Women&apos;s Recruit Questionnaire:</strong> 
                    <a href={school.recruit_questionnaire.women} target="_blank" rel="noopener noreferrer">
                      {school.recruit_questionnaire.women}
                    </a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SchoolList;
