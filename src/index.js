import React from 'react';
import {render} from 'react-dom';
import './index.css';
import routes from './config/routes';

render(
  <routes />,
  document.getElementById('root')
);
