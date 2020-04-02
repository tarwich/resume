import React from 'react';
import { render } from 'react-dom';
import { data } from './data/sam';
import { ResumeComponent } from './components/resume-component';
import './index.scss';

const root =
  document.querySelector('main') ||
  document.body.appendChild(document.createElement('main'));

render(<ResumeComponent resume={data} />, root);
document.title = 'Samuel Dillow - Résumé';
