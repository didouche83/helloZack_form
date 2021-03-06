import React from 'react';
import {Link} from 'react-router-dom';

import './Form.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SimpleSelect from './SimpleSelect';
import MultipleSelect from './MultipleSelect';

class Form extends React.Component {
  state = {
    capacity: '',
    promotional:'',
    mail:''
  };

  formInformations = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClose = () => {
    this.props.onOpen();
  };

  render() {
    const { openOrNot, name } = this.props;
    const { capacity, promotional, mail } = this.state;
    return (
      <div>
        <Dialog
          open={openOrNot}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Questionnaire qualité</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Nous vous invitons à répondre à ces quelques questions afin d'avoir une estimation de la valeur de votre {name}.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="capacity"
              label="Quelle est sa capacité en Go ?"
              type="email"
              name="capacity"
              value={capacity}
              onChange={this.formInformations}
              placeholder="32Go, 64Go, 256Go..."
              fullWidth
              required
            />
            <FormHelperText>
            Merci de noter une valeur numérique
          </FormHelperText>
          <SimpleSelect />
          <MultipleSelect />
          <TextField
              autoFocus
              margin="dense"
              id="promotional"
              label="Un code promotionnel ?"
              type="promotional"
              name="promotional"
              value={promotional}
              onChange={this.formInformations}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="mail"
              label="Votre adresse mail ?"
              type="mail"
              placeholder="Vous recevrez notre proposition sur cette adresse."
              name="mail"
              value={mail}
              onChange={this.formInformations}
              fullWidth
              required
            />
            </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Annuler
            </Button>
            <Link className="validation" to="/questionnaire_validé">
            <Button  color="primary">
              Valider
            </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Form;
