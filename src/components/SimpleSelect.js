import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

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
});

class SimpleSelect extends React.Component {
  state = {
    state: '',
    accessories: '',
    category: '',
    broken: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { state, broken } = this.state
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="state-required">Quel est son état ?</InputLabel>
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
        </FormControl>
          <TextField
              autoFocus
              margin="dense"
              id="broken"
              label="Si cassé, nature de la casse ?"
              type="text"
              name="broken"
              value={broken}
              onChange={this.handleChange}
              fullWidth
              placeholder="Soyez le plus précis possible"
            />
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
