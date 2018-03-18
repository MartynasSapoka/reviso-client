import React from 'react';
import './JobDetails.css';

//TODO Add a chart visualizing the metrics
const JobDetails = ({job}) => (
  <div className="job-details">
    <div className="container">
      <div className="col-xs-12 col-sm-6">
        <img src={job.company.logo} alt={job.company.name}/>
      </div>
      <div className="col-xs-12 col-sm-6 text-left">
        <label>Title</label>
        <p>{job.title}</p>
        <label>Job Description</label>
        <p>{job.description}</p>
        <label>Location</label>
        <p>{`${job.location.city}, ${job.location.country}`}</p>
        <label>Company Description</label>
        <p>{job.company.description}</p>
        <a href={job.link} target="_blank">Link</a>
      </div>
    </div>
  </div>
);

export default JobDetails;