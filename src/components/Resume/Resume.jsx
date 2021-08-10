import React from "react";
import "./resume.css";
import { Container, Col} from "reactstrap";
import Fade from "react-reveal/Fade";

const Resume = () => {
  return (
    <React.Fragment>
      <Container id="resumeContainer">
        <Fade>
          <div id="resume">
            <img className="profile-photo"
              src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/214358637_5593584167378522_8732891868090118653_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=-ZwMeGlfvZ8AX-eea6m&_nc_ht=scontent-bos3-1.xx&oh=a25fe1041d9df5f7df06f82c23cd32e6&oe=6138D1D5"
              alt="Dean Corsaro"
            />
            <h1>Dean A. Corsaro Jr</h1>
            <p>
              Cell: <a href="#">412-320-9569</a>
            </p>
            <p>
              Email: <a href="#">DeanCorsaro14@gmail.com</a>
            </p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/dean-corsaro-a6721a156/">https://www.linkedin.com/in/dean-corsaro</a>
            </p>
            <p id="objective">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat architecto nesciunt impedit ipsum. Vitae inventore est aperiam magni dicta iure ducimus repudiandae mollitia atque dignissimos vel, amet voluptatum consequuntur enim.
            </p>
            <dl id="skillset">
              <dt>Skills Set</dt>
              <dd>
                <h2>Architecture Software</h2><br />
                <div className="2skillColumns" style={{ display: 'flex' }}>

                  <Col className="skillColumn1" style={{ flex: '1', }}>

                    <p><img src="https://www.alfredorafael.com/wp-content/uploads/2021/08/logo.png" style={{maxWidth: '20%', filter: 'grayscale(100)'}} alt="logo"/>Autodesk Revit</p>
                    <p><img src="https://www.alfredorafael.com/wp-content/uploads/2021/08/262-2621689_autocad-autocad-logo-svg.png" style={{maxWidth: '10%', marginLeft: '4%', filter: 'grayscale(100)'}} alt="logo"/> &nbsp; Autodesk Auto CAD</p>                
                  </Col>

                  <Col className="skillColumn2" style={{ flex: '1', }}>
                  <p><img src="https://www.alfredorafael.com/wp-content/uploads/2021/08/adobe-creative-cloud-1855032-1571413.webp" style={{maxWidth: '12%', marginLeft: '4%', filter: 'grayscale(100)'}} alt="logo"/>&nbsp; Adobe Suite</p>
                    <p><img src="https://www.alfredorafael.com/wp-content/uploads/2021/08/twinmotion-128px-hd.png" style={{maxWidth: '10%', marginLeft: '4%'}} alt="logo"/> &nbsp; Twin Motion</p>
                  </Col>

                </div>

                <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)' }} />
              </dd>
            </dl>

            <dl>
              <dt>Experience</dt>
              <dd>
              <div className="experience-item" style={{marginBottom: '4%'}}>
                <h2>
                Architectural Designer | Residential<span>05/2019-08/2020</span>
                </h2>
                <h6 style={{marginBottom: '3%'}}>Mitchell Construction Group – Boston, MA</h6>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                </ul>
                </div>
                <div className="experience-item" style={{marginBottom: '4%'}}>
                <h2>
                Architectural Designer | Healthcare<span>05/2019-08/2020</span>
                </h2>
                <h6 style={{marginBottom: '3%'}}>Tsoi Kobus Associates – Boston, MA</h6>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                </ul>
                </div>
                <div className="experience-item" style={{marginBottom: '4%'}}>
                <h2>
                Architectural Designer | Healthcare + <span>05/2016–03/2019</span>
                </h2>
                <h6 style={{marginBottom: '3%'}}>Avanti Architects Ltd. – Pittsburgh, PA</h6>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                </ul>
                </div>
                <div className="experience-item" style={{marginBottom: '4%'}}>
                <h2>
                Estimator<span>02/2015–05/2015</span>
                </h2>
                <h6 style={{marginBottom: '3%'}}>New England Window Systems – SouthBoston, MA</h6>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                </ul>
                </div>
                <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)' }} />
              </dd>
            </dl>
            
            <dl>
              <dt>Education</dt>
              <dd>
                <h2>Masters of Architecture, (M-Arch.) <span>2018</span></h2>
                <p>
                  <strong>Wentworth Institute of Technology </strong>– Boston, MA 
                  <br />
                  <strong>Minor:</strong> Applied Mathematics
                </p>
                <br/>
                <h2>Bachelor of Science, Architecture (B.S.–Arch.)<span>2017</span></h2>
                <p>
                  <strong>Wentworth Institute of Technology </strong>– Boston, MA 
                </p>
                <hr style={{ marginTop: '7%', height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)' }} />
              </dd>
            </dl>
            <dl>
              <dt>Other Skills</dt>
              <dd>
                <h2>Software</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab pariatur corporis libero expedita aut laudantium debitis, nam excepturi possimus, ipsa qui beatae provident tenetur cum est odio? Dolorem, perferendis!
                </p>
                <h2>Communication skills</h2>
                <p>
                  Microsoft productivity software (Word, Excel, etc), Adobe
                  Creative Suite, Windows
                </p>
              </dd>
            </dl>
            <dl>
              <dt>References</dt>
              <dd>Available on request</dd>
            </dl>
            {/*  
                <p className="objective" style={{ marginTop: "2rem" }}>
                (
                    <a href="http://thenewcode.com/553/Build-A-Responsive-Web-Résumé">
                    Return to the original blog article
                    </a>
                    .)
                    </p>
            */}
          </div>
        </Fade>
      </Container>
    </React.Fragment>
  );
};

export default Resume;
