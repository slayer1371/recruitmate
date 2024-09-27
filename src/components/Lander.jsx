import { Container, Row, Col } from 'react-bootstrap';
import './lander.css';
import SignUpPopup from './Signup';

const SignUpSection = () => { 
  return (
    <div className='land'>
    <Container fluid className="signup-section">
      <Row className="align-items-stretch h-100 row">
        {/* Left Image Section */}
        <Col md={6} className="p-0 d-flex align-items-stretch">
          <img
            src="https://img1.wsimg.com/isteam/stock/122668/:/rs=w:1688,h:1125,cg:true,m/cr=w:1688,h:1125/fx-gs"
            alt="Sign Up"
            className="signup-image"
          />
        </Col>
        {/* Right Text Section */}
        <Col md={4} className="d-flex align-items-center justify-content-center text-container">
          <div className="text-box">
            <h3>WORK WITH COLLEGE ATHELETES TO BUILD YOUR RECRUITING PLAN</h3>
            <SignUpPopup />
          </div>
        </Col> 
      </Row>
    </Container>
    </div>
  );
};

export default SignUpSection;
