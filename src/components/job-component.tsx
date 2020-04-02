import React, { FunctionComponent } from 'react';
import { ResumeJob } from '../data/types';
import './job-component.scss';

export const JobComponent: FunctionComponent<{ job: ResumeJob }> = ({
  job,
}) => {
  return (
    <div className="Job">
      <div className="Job__Company">
        <span className="Job__CompanyName">{job.company}</span>
        <span className="Job__CompanyTime">
          {job.time.map((time, i) => (
            <span key={i}>{time}</span>
          ))}
        </span>
      </div>
      <div className="Job__Position">{job.title}</div>
      <ol className="Job__Impacts">
        {job.things.map((thing, i) => (
          <li key={i}>{thing}</li>
        ))}
      </ol>
      <div className="Job__Skills">
        {job.skills.map((skill) => (
          <span className="Job__Skill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
