import React, { FunctionComponent } from 'react';
import { ResumeSkill } from '../data/types';
import './skill-component.scss';

export const SkillComponent: FunctionComponent<{ skill: ResumeSkill }> = ({
  skill,
}) => {
  return (
    <div className="Skill">
      <img className="Skill__Icon" src={skill.icon} />
      <div className="Skill__Name">{skill.name}</div>
      <div className="Skill__Level">{skill.level}</div>
    </div>
  );
};
