import * as React from 'react';
import { render } from 'react-dom';

const root =
  document.querySelector('main') ||
  document.body.appendChild(document.createElement('main'));

render(<div>Hi there!</div>, root);
