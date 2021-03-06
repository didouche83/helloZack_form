import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import logo from '../logos/header.png';
import './Header.css';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Header = (props) => {
  const { classes } = props;
    return(
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="navbar">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <a href="https://www.hellozack.fr" >
              <img className="headerLogo" src={logo} alt="logo" />
            </a>
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <p className="title">
            Estimation du prix de votre iPhone
            </p>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
