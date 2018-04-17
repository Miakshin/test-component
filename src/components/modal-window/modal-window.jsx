import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { grey200 , grey900 , red100, red600} from 'material-ui/styles/colors';
import mockData from '../../mock-data/mock-data';
import selectVariables from '../../mock-data/select-variables'

class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: true,
        data: mockData
      };

    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  state = {
    open: true,
    data: mockData
  };

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

  onChangeType = (ev) => {
    console.dir(ev.target)
  }

  onChangeValue = (ev) => {
    console.log(ev.target.value)
  }

  onSaveItems = () => {
    this.setState({
      open: false,
      data: mockData
    })
  }

  onDeleteLine = (id) => {
    const newStateData = this.state.data.reduce((acum, curr) => {
      return curr.id === id ? acum : [...acum, curr]
    },[])

    this.setState({data: newStateData})
  }

  render() {

    const selectItems = selectVariables.map((sVar , i ) => {
      return(
        <MenuItem value={ sVar } key={i} primaryText ={ sVar } />
      )
    })

    const numberStructuresList = this.state.data.map( item => {
      return(
        <div key={item.id}>
          <SelectField
            value={item.type}
            maxHeight={200}
            style={{ margin : "0px 15px", top: "26px", width: "40%"}}
            onChange={this.onChangeType}>
            {selectItems}
          </SelectField>
          <TextField type="number"
            style={{ width: "10%", margin : "0px 15px"}}
            name={`text${item.id}`}
            value={item.value}
            onChange={this.onChangeValue}/>
          <IconButton
            style={{ background : red100 , borderRadius : "50%", padding : "0px"}}
            iconStyle={{width:  "40px", height:  "40px"}}>
            <NavigationClose color={red600}
            onClick={()=>this.onDeleteLine(item.id)}/>
          </IconButton>
        </div>
      )
    })

    return (
      <div style={{display: "flex", alignItems : "center", justifyContent : "center", height: "100vh"}}>
        <RaisedButton label="Open modal window" onClick={this.handleOpen} />
        <Dialog
          open = { this.state.open }
          autoScrollBodyContent = {true} >
          <AppBar
            style={{ background :  grey200 }}
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
            style={{margin: "15px 0px"}}
            hoverColor="#ffffff"
            rippleColor="#ffffff"
            onClick={this.onAddLine}/>
          <footer style={{margin: "15px"}}>
            <RaisedButton
              label="Сохранить"
              primary={true}
              onClick={this.onSaveItems}/>
            <FlatButton label="Отмена" default={true}
              onClick={this.handleClose}/>
          </footer>
        </Dialog>
      </div>
    );
  }
}

export default ModalWindow;
