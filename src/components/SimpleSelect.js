import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // this.state.state === "broken" ? <SimpleSelectBroken /> : ''
    console.log(this.state.state)
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="state-required">Quel est l'état de votre iPhone ?</InputLabel>
          <Select
            value={this.state.state}
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

        {/* <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="accessories-required">Avez-vous des accessoires ?</InputLabel>
          <Select
            value={this.state.accessories}
            onChange={this.handleChange}
            name="accessories"
            inputProps={{
              id: 'accessories-required',
            }}
            className={classes.selectEmpty}
          >
            <MenuItem value="chargeur">Chargeur iPhone</MenuItem>
            <MenuItem value="écouteurs">Ecouteurs iPhone (uniquement si jamais utilisés)</MenuItem>
            <MenuItem value="box">Boite d'origine</MenuItem>
            <MenuItem value="bill">Facture</MenuItem>
          </Select>
          {/* <FormHelperText>
            Assigner un responsable à cet événement
          </FormHelperText> */}
        {/* </FormControl> */} */}
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
