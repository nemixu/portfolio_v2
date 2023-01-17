import React from "react";
import "../styles/JobsStyles.css";

function Jobs() {
  const myJobs = [
    {
      company: "Oneview HealthCare",
      title: "Software Engineer",
      dates: "August 2021 - December 2022",
      role: [
        "done this done that",
        "done this and now that",
        "Also done this and that",
      ],
    },
    {
      company: "Oneview HealthCare",
      title: "Intern Software Engineer",
      dates: "March 2021 - August 2021",
      role: [
        "done this done that",
        "done this and now that",
        "Also done this and that",
      ],
    },
  ];
  return (
    <section className="jobs-section">
      <div className="jobs-container">
        <h2 className="text-white">Where I've Worked</h2>
        <div className="text-white">
          {myJobs.map((jobs, index) => (
            <div key={index}>
              <div className="tab-section">
                <button className="job-tab">{jobs.company}</button>
              </div>
              <div className="job-section">
                <h3>
                  <span className="jobs-text">{jobs.title} </span>
                  <span className="jobs-text">@ {jobs.company}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Jobs;
