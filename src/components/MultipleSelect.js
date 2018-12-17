import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const accessories = [
    "Chargeur",
    "Ecouteurs iPhone (si neuf)",
    "Boite d'origine",
    "Facture",
    "Aucun",
];

function getStyles(name, that) {
  return {
    fontWeight:
      that.state.name.indexOf(name) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium,
  };
}

class MultipleSelect extends React.Component {
  state = {
    name: [],
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      name: value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple">Avez-vous des accessoires ?</InputLabel>
          <Select
            multiple
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input id="select-multiple" />}
            MenuProps={MenuProps}
          >
            {accessories.map(accesorie => (
              <MenuItem key={accesorie} value={accesorie} style={getStyles(accesorie, this)}>
                {accesorie}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            Plusieurs réponses possibles
          </FormHelperText>
        </FormControl>
      </div>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MultipleSelect);
