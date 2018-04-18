import { grey200, grey900, red100 } from 'material-ui/styles/colors';

const styles = {
  select: {
    margin: '0px 15px',
    top: '26px',
    width: '40%',
  },
  numberField: {
    width: '10%',
    margin: '0px 15px',
  },
  buttonOuter: {
    background: red100,
    borderRadius: '50%',
    padding: '0px',
  },
  buttonIner: {
    width: '40px',
    height: '40px',
  },
  bg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  window: {
    padding: '30px 60px 60px 30px',
  },
  addBtn: {
    margin: '0px 0px 20px 0px',
  },
  header: {
    background: grey200,
    height: '75px',
  },
  footer: {
    margin: '15px',
  },
  emptyData: {
    color: grey900,
    margin: '15px',
  },
  overlay: {
    background: grey200,
  },
};

export default styles;
