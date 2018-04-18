import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import App from '../App';
import ModalWindow from '../components/modal-window/modal-window'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import mockData from '../mock-data/mock-data';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('ModalWindow', module)
  .add('Fitst entry', () => {
    return(
      <MuiThemeProvider>
        <ModalWindow open={false} data={false} />
      </MuiThemeProvider>
    )
  })
  .add('Opened empty window', () => {
    return(
      <MuiThemeProvider>
        <ModalWindow open={true} data={false} />
      </MuiThemeProvider>
    )
  })
  .add('Edd line', () => {
    return(
      <MuiThemeProvider>
        <ModalWindow open={true} data={[{id:4, type: "", value: ""}]} />
      </MuiThemeProvider>
    )
  })
  .add('Select type', () => {
    return(
      <MuiThemeProvider>
        <ModalWindow open={true} data={[{id:4, type: "Twin", value: ""}]} />
      </MuiThemeProvider>
    )
  }).add('Select type and number', () => {
    return(
      <MuiThemeProvider>
        <ModalWindow open={true} data={[{id:4, type: "Twin", value: "22"}]} />
      </MuiThemeProvider>
    )
  })
  .add('Input some information', () => {
    return(
      <MuiThemeProvider>
        <ModalWindow open={true} data= {mockData} />
      </MuiThemeProvider>
    )
  })
  .add('Window was closed', () => {
    return(
      <MuiThemeProvider>
        <ModalWindow open={false} data= {mockData} />
      </MuiThemeProvider>
    )
  })
  .add('After closing the state of information does not change', () => {
    return(
      <MuiThemeProvider>
        <ModalWindow open={true} data= {mockData} />
      </MuiThemeProvider>
    )
  })
  .add('After saving data sending to another conponent and component refresh to initial state', () => {
    return(
      <MuiThemeProvider>
        <ModalWindow open={false} data= {[]} />
      </MuiThemeProvider>
    )
  })
