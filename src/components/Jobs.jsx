import React, { useState } from "react";
import { motion, transform } from "framer-motion";
import "../styles/JobsStyles.css";

function Jobs() {
  const [inView, setInView] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const myJobs = [
    {
      company: "Oneview Healthcare",
      title: "Software Engineer",
      dates: "August 2021 - December 2022",
      role: [
        "Developed and shipped highly interactive Android applications for Oneviews care experience platform",
        "Contributed production ready code to releases",
        "Resolved Front-end OST bugs for onsite customers using the care experience platform",
        "Contributed to the design and functionality of a major offline-mode feature that would shape the future for Oneviews care experience platform when maintenance is happening or sudden outages occur",
        "Implemented cross functionality of remote controls to different hardware suppliers, and maintained remote control mappings for each release",
      ],
    },
    {
      company: "Oneview Healthcare",
      title: "Intern Software Engineer",
      dates: "March 2021 - August 2021",
      role: [
        "Learning on the job C# and Xamarin Forms",
        "Working on bug tickets and tech debt",
        "Resolving issues with our care experience platform",
        "Working closely with mentors to ensure quality of code and pull requests are implemented correctly",
        "Learning how to gel with a crossfunctional Agile software team",
      ],
    },
  ];
  return (
    <motion.section
      id="experience"
      transition={{ duration: 0.7, ease: [0, 0.71, 0.2, 1.01] }}
      animate={
        inView
          ? { scale: [0, 0, 1], opacity: 1 }
          : { scale: [0, 0, 0], opacity: 0 }
      }
      onViewportEnter={() => setInView(!inView)}
      onViewportLeave={() => setInView(!inView)}
      className="jobs-section align-items-center"
    >
      <div className="jobs-container">
        <h2 className="text-white fz-heading">Where I've Worked</h2>

        <div className="text-white inner">
          <div className="job-tab-list">
            {myJobs.map((job, i) => {
              console.log(job, i);
              return (
                <div
                  style={{
                    backgroundColor:
                      activeTab === i ? "#333333" : "transparent",
                    color: activeTab === i ? "#73ab84" : "#fff",
                  }}
                  key={i}
                  onClick={() => {
                    setActiveTab(i);
                  }}
                  className="tab-button"
                  role="tab"
                >
                  {job.company}
                </div>
              );
            })}
          </div>

          <div className="job-main-pannel">
            {myJobs.map((jobs, index) => {
              return (
                <div
                  hidden={activeTab !== index}
                  key={index}
                  className="job-tab-pannel"
                >
                  <h3>
                    <span className="jobs-text">{jobs.title} </span>
                    <span className="jobs-text highlight">
                      @ {jobs.company}
                    </span>
                  </h3>
                  <p className="date-text">{jobs.dates}</p>
                  {jobs.role.map((role, idx) => {
                    return (
                      <ul key={idx}>
                        <li>{role}</li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Jobs;
