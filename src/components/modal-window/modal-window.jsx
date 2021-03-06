import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { grey900 } from 'material-ui/styles/colors';
import Line from './modal-window-line';
import Footer from './modal-window-footer'

import styles from './styles.js'

class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: props.open || false,
        data: props.data || []
      };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  onAddLine = () => {
    const newLine = {
      id: Date.now(),
      type: "",
      value: 0
    }
    const newStateData = [...this.state.data , newLine];

    this.setState({data: newStateData})
  }

  onChangeType = (id,type) => {
    const newDataState = this.state.data.map( item => {
      return item.id === +id ?
        { id: item.id , type: type, value: item.value } :
        item
    })

    this.setState({data: newDataState})
  }

  onChangeValue = (ev) => {
    const id = ev.target.name.split("-")[1]
    const newDataState = this.state.data.map( item => {
      return item.id === +id ?
        { id: item.id , type: item.type, value: ev.target.value } :
        item
    })

    this.setState({data: newDataState})
  }

  onSaveItems = () => {
    this.setState({
      open: false,
      data: []
    })
    console.log("value saved")
  }

  onDeleteLine = (id) => {
    const newStateData = this.state.data.reduce((acum, curr) => {
      return curr.id === id ? acum : [...acum, curr]
    },[])

    this.setState({data: newStateData})
  }

  render() {

    const numberStructuresList = (()=>{
      return  (this.state.data && this.state.data.length > 0) ?
        this.state.data.map((item) =>{
        return(
          <Line item = {item}
            onChangeType = {this.onChangeType}
            onChangeValue = {this.onChangeValue}
            onDeleteLine = {this.onDeleteLine}
            key={item.id}/>
        )
      })
      :
      <h2 style={styles.emptyData}>Добавьте строку</h2>
  })()

    return (
      <div style={styles.bg}>
        <RaisedButton
          label="Open modal window"
          onClick={this.handleOpen} />
        <Dialog
          open = { this.state.open }
          autoScrollBodyContent = {true}
          bodyStyle={styles.window}
          overlayStyle={styles.overlay}>
          <AppBar
            style={styles.header}
            title={<span style={{color : grey900}}>Структура номеров</span>}
            iconElementRight={
              <IconButton>
                <NavigationClose color={grey900}
                  onClick={this.handleClose}/>
              </IconButton>}
            iconElementLeft = {<div></div>}/>
          {numberStructuresList}
          <br/><FlatButton label="Добавить"
            primary={true}
            style={styles.addBtn}
            hoverColor="#ffffff"
            rippleColor="#ffffff"
            onClick={this.onAddLine}/>
          <Footer
            onSaveItems = {this.onSaveItems}
            handleClose = {this.handleClose}/>
        </Dialog>
      </div>
    );
  }
}

ModalWindow.propTypes = {
  open:PropTypes.bool,
  data:PropTypes.array
}

export default ModalWindow;
