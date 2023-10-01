import React from "react";
import "../components/Profile.css";
import avatar from "../assets/avatar7.png";
const Profile = () => {
  return (
    <div>
      <section className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-4 mb-sm-5">
              <div className="card card-style1 border-0">
                <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                      <img src={avatar} alt="..." />
                    </div>
                    <div className="col-lg-6 px-xl-10">
                      <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                        <h3 className="h2 text-white mb-0">Bharath Rama Chandra Kakarla</h3>
                        <span className="text-primary">Btech(CSE)</span>
                      </div>
                      <ul className="list-unstyled mb-1-9">
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">
                            Interests:
                          </span>
                          Web-Development,Software engineer,Software
                          Developer,Analyst roles{" "}
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">
                            B.Tech:
                          </span>
                          2019-2023
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">
                            Email:
                          </span>{" "}
                          bharath007ram@gmail.com
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">
                            LinkedIn:
                          </span>
                          <a href="https://www.linkedin.com/in/bharath-ram-804b72225/">
                            LinkedIn
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-4 mb-sm-5">
              <div>
                <span className="section-title text-primary mb-3 mb-sm-4">
                  About Me
                </span>
                <p>
                  An Aspiring Graduate from B-Tech Computer Science and Engineering at MVGRCE. Passionate about
                  Coding. Always love to find better approaches for solving
                  complex problems. Mainly Skilled in Python Programming , C++
                  ,Java and SQL. Engineered projects using Machine
                  Learning and Front End Tools.    
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12 mb-4 mb-sm-5">
                  <div className="mb-4 mb-sm-5">
                    <span className="section-title text-primary mb-3 mb-sm-4">
                      Skills
                    </span>
                    <div className="progress-text">
                      <div className="row">
                        <div className="col-6" style={{ color: "white" }}>
                          Python,C++,Java
                        </div>
                        <div
                          className="col-6 text-end"
                          style={{ color: "white" }}
                        >
                          70%
                        </div>
                      </div>
                    </div>
                    <div
                      className="custom-progress progress progress-medium mb-3"
                      style={{ height: "4px" }}
                    >
                      <div
                        className="animated custom-bar progress-bar slideInLeft bg-primary"
                        style={{ width: "70%" }}
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="10"
                        role="progressbar"
                      ></div>
                    </div>
                    <div className="progress-text">
                      <div className="row">
                        <div className="col-6" style={{ color: "white" }}>
                          Reactjs
                        </div>
                        <div
                          className="col-6 text-end"
                          style={{ color: "white" }}
                        >
                          75%
                        </div>
                      </div>
                    </div>
                    <div
                      className="custom-progress progress progress-medium mb-3"
                      style={{ height: "4px" }}
                    >
                      <div
                        className="animated custom-bar progress-bar slideInLeft bg-secondary"
                        style={{ width: "75%" }}
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="70"
                        role="progressbar"
                      ></div>
                    </div>
                    <div className="progress-text">
                      <div className="row">
                        <div className="col-6" style={{ color: "white" }}>
                          MongoDb & SQL
                        </div>
                        <div
                          className="col-6 text-end"
                          style={{ color: "white" }}
                        >
                          80%
                        </div>
                      </div>
                    </div>
                    <div
                      className="custom-progress progress progress-medium mb-3"
                      style={{ height: " 4px" }}
                    >
                      <div
                        className="animated custom-bar progress-bar slideInLeft bg-success"
                        style={{ width: "80%" }}
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="70"
                        role="progressbar"
                      ></div>
                    </div>
                    <div className="progress-text">
                      <div className="row">
                        <div className="col-6" style={{ color: "white" }}>
                          DataStructures
                        </div>
                        <div
                          className="col-6 text-end"
                          style={{ color: "white" }}
                        >
                          75%
                        </div>
                      </div>
                    </div>
                    <div
                      className="custom-progress progress progress-medium"
                      style={{ height: "4px" }}
                    >
                      <div
                        className="animated custom-bar progress-bar slideInLeft bg-danger"
                        style={{ width: "75%" }}
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="70"
                        role="progressbar"
                      ></div>
                    </div>
                    
                  </div>
                  <div>
                    <span className="section-title text-primary mb-3 mb-sm-4">
                      Education
                    </span>
                    <table style={{width:"100%",color:"white"}}>
                      <tr>
                        <th>School</th>
                        <th>Year</th>
                        <th>CGPA/Marks</th>
                      </tr>
                      <tr>
                        <td>MVGR College Of Engineering(MVGRCE)</td>
                        <td>2019-2023</td>
                        <td>8.44</td>
                      </tr>
                      <tr>
                        <td>Pragati Junior College</td>
                        <td>2017-2019</td>
                        <td>9.67</td>
                      </tr>
                      <tr>
                        <td>Pragati High School</td>
                        <td>2016-2017</td>
                        <td>9.7</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;