import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import '../App.css';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    width: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  visible:{
    display: "block"
  },
  hidden:{
    display: "none"
  },
});

class SimpleSelect extends React.Component {
  state = {
    state: '',
    accessories: '',
    category: '',
    broken: ''
  };

  handleChange = event => {
    // console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
    // this.state.state === "broken" ? <SimpleSelectBroken /> : ''
    
  };

  render() {
    const { classes } = this.props;
    const { state, broken } = this.state
    console.log('vf',state)

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="state-required">Quel est l'état de votre iPhone ?</InputLabel>
          <Select
            value={state}
            onChange={this.handleChange}
            name="state"
            inputProps={{
              id: 'state-required',
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value="new">Neuf (jamais servi - Dans sa boite d'origine)</MenuItem>
            <MenuItem value="good">Bon (quelques rayures, invisibles sur l'écran)</MenuItem>
            <MenuItem value="correct">Correct (marques d'usure plus prononcées)</MenuItem>
            <MenuItem value="broken">Ecran/Bouton cassé (mais iPhone fonctionnel)</MenuItem>
          </Select>
          {/* <FormHelperText>
            Indiquer ici la récurrence de l'événement
          </FormHelperText> */}
        </FormControl>

           <TextField
              className={state === "broken" ? "visible" : "hidden"}
              autoFocus
              margin="dense"
              id="broken"
              label="Si cassé, merci de nous préciser la nature de la casse"
              type="text"
              name="broken"
              value={broken}
              onChange={this.handleChange}
              fullWidth
            />
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
