import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import App from '../App';
import ModalWindow from '../components/modal-window/modal-window';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import mockData from '../mock-data/mock-data';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('ModalWindow', module)
  .add('Fitst entry', () => (
    <MuiThemeProvider>
      <ModalWindow open={false} data={false} />
    </MuiThemeProvider>
  ))
  .add('Opened empty window', () => (
    <MuiThemeProvider>
      <ModalWindow open data={false} />
    </MuiThemeProvider>
  ))
  .add('Edd line', () => (
    <MuiThemeProvider>
      <ModalWindow open data={[{ id: 4, type: '', value: '' }]} />
    </MuiThemeProvider>
  ))
  .add('Select type', () => (
    <MuiThemeProvider>
      <ModalWindow open data={[{ id: 4, type: 'Twin', value: '' }]} />
    </MuiThemeProvider>
  ))
  .add('Select type and number', () => (
    <MuiThemeProvider>
      <ModalWindow open data={[{ id: 4, type: 'Twin', value: '22' }]} />
    </MuiThemeProvider>
  ))
  .add('Input some information', () => (
    <MuiThemeProvider>
      <ModalWindow open data={mockData} />
    </MuiThemeProvider>
  ))
  .add('Window was closed', () => (
    <MuiThemeProvider>
      <ModalWindow open={false} data={mockData} />
    </MuiThemeProvider>
  ))
  .add('After closing the state of information does not change', () => (
    <MuiThemeProvider>
      <ModalWindow open data={mockData} />
    </MuiThemeProvider>
  ))
  .add('After saving data sending to another conponent and component refresh to initial state', () => (
    <MuiThemeProvider>
      <ModalWindow open={false} data={[]} />
    </MuiThemeProvider>
  ));
