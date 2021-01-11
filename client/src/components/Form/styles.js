import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderBottom: '1px solid gray',
    borderTop: '1px solid gray',
    marginTop: '40px',
    backgroundColor:'#F3EBE8',
    width: '350px'
  
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 20,
    height: 40,
    width: 100,
    color: 'white',
    
  },
  buttonClear: {
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 30,
    height: 40,
    width: 100,
    color: 'white',
    
  },

  
}));