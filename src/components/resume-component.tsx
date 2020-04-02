import React, { FunctionComponent, Fragment } from 'react';
import { Resume } from '../data/types';
import { SectionComponent } from './section-component';
import { SkillComponent } from './skill-component';
import './resume-component.scss';
import { JobComponent } from './job-component';

export const ResumeComponent: FunctionComponent<{ resume: Resume }> = ({
  resume,
}) => {
  return (
    <div className="Resume">
      <div className="Resume__Title">{resume.name}</div>
      <SectionComponent title="Profile" className="Profile">
        {resume.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <dl className="Profile__Favorites">
          {Object.entries(resume.favorites).map(([key, value]) => (
            <Fragment key={key}>
              <dt>{key}</dt>
              <dd>{value}</dd>
            </Fragment>
          ))}
        </dl>
      </SectionComponent>
      <SectionComponent title="Skills" className="Resume__Skills">
        {resume.skills.map((skill) => (
          <SkillComponent skill={skill} key={skill.name} />
        ))}
      </SectionComponent>
      <SectionComponent title="Languages" className="Resume__Languages">
        {resume.languages.map((language) => (
          <SkillComponent skill={language} key={language.name} />
        ))}
      </SectionComponent>
      <SectionComponent title="Employment">
        {resume.jobs.map((job) => (
          <JobComponent
            job={job}
            key={`${job.company}:${job.time.join('-')}`}
          ></JobComponent>
        ))}
      </SectionComponent>
    </div>
  );
};
