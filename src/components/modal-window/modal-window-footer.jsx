import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './styles.js'

const Footer = (props) => {
  return(
    <footer style={styles.footer}>
      <RaisedButton
        label="Сохранить"
        primary={true}
        onClick={props.onSaveItems}/>
      <FlatButton label="Отмена" default={true}
        onClick={props.handleClose}/>
    </footer>
  )
}

export default Footer
