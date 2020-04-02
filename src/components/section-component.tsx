import React, { FunctionComponent } from 'react';
import './section-component.scss';

export const SectionComponent: FunctionComponent<{
  title?: string;
  className?: string;
}> = ({ children, className = '', title }) => {
  return (
    <div className={`Section ${className}`}>
      <div className="Section__Title">{title}</div>
      <div className="Section__Body">{children}</div>
    </div>
  );
};
