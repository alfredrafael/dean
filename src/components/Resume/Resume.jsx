import React from "react";
import "./resume.css";
import { Container, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Resume = () => {
  return (
    <React.Fragment>
      <Container id="resumeContainer">
        <Fade>
          <div id="resume">
            <img
              className="profile-photo"
              src="https://www.alfredorafael.com/wp-content/uploads/2021/08/Nora_graduation.jpeg"
              alt="Nora Zadi"
            />
            <h1>Nora Zadi</h1>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "2em" }}>
                <i class="fas fa-phone-square-alt"></i>{" "}
                <a href="tel:+13233601842">(323) 360-1842</a>
              </p>
              <p>
                <i class="fas fa-envelope"></i>{" "}
                <a href="mailto:norazadi@bu.edu">norazadi@bu.edu</a>
              </p>
            </div>
            <p>
              <i class="fab fa-linkedin"></i>{" "}
              <a href="https://www.linkedin.com/in/djedjanorazadi/">
                https://www.linkedin.com/in/djedjanorazadi/
              </a>
            </p>
            <br />

            <dl>
              <dt>Education</dt>
              <dd>
                <div className="education-item">
                  <h2>
                    Masters in Science, Financial Management<span>2021</span>
                  </h2>
                  <p>
                    <strong>Boston University</strong> – Boston, MA
                    <br /> <br />
                    <strong>Minor:</strong> International Finance
                    <br />
                    <strong>Research: </strong>
                    <i>
                      Compared returns trends & performance in IPOs to develop a
                      regression model using EViews, achieving 95% accuracy
                    </i>
                  </p>
                </div>
                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "#d3d3d3",
                    maxWidth: "30%",
                  }}
                />
                <div className="education-item">
                  <h2>
                    Certificate in Finance<span>2019</span>
                  </h2>
                  <p>
                    <strong>University of California</strong> – Los Angeles, CA
                    <br />
                  </p>
                </div>
                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "#d3d3d3",
                    maxWidth: "30%",
                  }}
                />
                <div className="education-item">
                  <h2>
                    Bachelor of Science in Finance<span>2018</span>
                  </h2>
                  <p>
                    <strong>California State University</strong> – Northridge,
                    CA
                    <br /> <br />
                    <strong>Honors:</strong> Dean’s List (3 semesters
                    consecutives)
                    <br />
                    <strong>GPA:</strong> 3.40/4.0
                  </p>
                </div>
                <hr
                  style={{
                    marginTop: "7%",
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.5)",
                  }}
                />
              </dd>
            </dl>

            <dl>
              <dt>Experience</dt>
              <dd>
                <div className="experience-item" style={{ marginBottom: "4%" }}>
                  <h2>
                    Financial Analyst Intern
                    <span>Jun 2018 – Aug 2018</span>
                  </h2>
                  <h6 style={{ marginBottom: "3%" }}>
                    Bloomfield Investment | Abidjan, Côte d’Ivoire
                  </h6>
                  <ul>
                    <li>
                      Analyzed financial statements of various enterprises, and
                      prepared documents and presentations for rating committee
                    </li>
                    <li>
                      Performed quantitative and qualitative analysis of firms
                      by using company generated information
                    </li>
                    <li>
                      Conducted research in teams, and SWOT analysis of
                      companies for better decision making
                    </li>
                    <li>
                      Constructed and spearheaded interview summaries of heads
                      of several institutions, important in attributing credit
                      ratings (i.e., AAA, BBB, etc.) to those institutions
                    </li>
                  </ul>
                </div>

                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "#d3d3d3",
                    maxWidth: "30%",
                  }}
                />

                <div className="experience-item" style={{ marginBottom: "4%" }}>
                  <h2>
                    Mergers & Acquisitions Intern
                    <span>Nov 2017 – Apr 2018</span>
                  </h2>
                  <h6 style={{ marginBottom: "3%" }}>
                    Piana Investment | Los Angeles, CA
                  </h6>
                  <ul>
                    <li>
                      Evaluated investment opportunities (analysis of company
                      financials, markets, competition and strategy)
                    </li>
                    <li>
                      Forecasted and reviewed financial models, and conducted
                      industry and market analysis to support origination
                      efforts
                    </li>
                    <li>
                      Created investor deck, executive summary and supported
                      transactions (investment papers, due diligence)
                    </li>
                    <li>
                      Coordinated information flows and served as primary
                      contact with clients
                    </li>
                  </ul>
                </div>

                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "#d3d3d3",
                    maxWidth: "30%",
                  }}
                />

                <div className="experience-item" style={{ marginBottom: "4%" }}>
                  <h2>
                    Investment Banking Analyst <span>Jun 2017 – Aug 2017</span>
                  </h2>
                  <h6 style={{ marginBottom: "3%" }}>
                    New York Bay Capital | New York, NY
                  </h6>
                  <ul>
                    <li>
                      Developed financial models and company’s valuations using
                      multiples, comparable company, and DCF analysis
                    </li>
                    <li>
                      Coordinated client meetings with executives and business
                      owners to discuss key metrics for business valuation
                    </li>
                    <li>
                      Prepared investor presentation materials: financial
                      models, industry-specific research for clients, pitchbook,
                      information memoranda, executive summary etc
                    </li>
                  </ul>
                </div>
                <div className="experience-item" style={{ marginBottom: "4%" }}>
                  <h2>
                    Budget Direction Intern
                    <span>Jun 2015 – Aug 2015</span>
                  </h2>
                  <h6 style={{ marginBottom: "3%" }}>
                    CIE | Abidjan, Cote d’Ivoire
                  </h6>
                  <ul>
                    <li>
                      Managed the assessment of company’s vehicle to keep track
                      the development of the Geo-location project
                    </li>
                    <li>
                      Analyzed financials statement with Excel to determine
                      geo-location impact on company funding
                    </li>
                    <li>
                      Monitored carbon use, speed and trajectory of the 1,100
                      company vehicles to record expenses and increase
                      productivity
                    </li>
                  </ul>
                </div>
                <hr
                  style={{
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.5)",
                  }}
                />
              </dd>
            </dl>

            <dl>
              <dt>Leadership</dt>
              <dd>
                <h2>
                  Vice-President Scholarships and Awards
                  <span>2016</span>
                </h2>
                <p>
                  <strong>Delta Sigma Pi | CSUN </strong>– Northridge, CA
                  <br />
                  <ul>
                    <li>
                      Implemented mentorship programs to foster and recognize
                      member’s academic achievement improving grades by 8%
                    </li>
                    <li>
                      Guided and mentored award application process to recognize
                      member’s achievement and maintain chapter recognition
                    </li>
                    <li>
                      Oversaw chapter scholarships administration to maintain
                      programs for academic achievement
                    </li>
                  </ul>
                </p>
                <hr
                  style={{
                    marginTop: "7%",
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.5)",
                  }}
                />
              </dd>
            </dl>

            <dl>
              <dt>Skills</dt>
              <dd>
                <h2>Software & Analysis</h2>
                <div className="skills-item flexed-skills">
                  <p>
                    <ul>
                      <li>Python</li>
                      <li>Access</li>
                      <li>E-Views</li>
                      <li>Financial Modeling</li>
                      <li>Financial Analysis & Reporting</li>
                      <li>Forecasting</li>
                    </ul>
                  </p>
                  <p>
                    <ul>
                      <li>Valuation</li>
                      <li>Research</li>
                      <li>Regression Analysis</li>
                      <li>Corporate Finance & Consulting</li>
                      <li>Bloomberg Certificate</li>
                    </ul>
                  </p>
                </div>

                <h2>Communication skills</h2>
                <p>Native fluence in both English and French</p>

                <hr
                  style={{
                    marginTop: "7%",
                    height: "1px",
                    border: "none",
                    backgroundColor: "rgba(105, 186, 213, 0.5)",
                  }}
                />
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
