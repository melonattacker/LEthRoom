import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './img/LEthRoom_logo_960.png';
import './App.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    marginRight: 810,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function AppTop(props) {
  const { classes } = props;
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <img src={logo} width="40" height="40" ></img>
          </IconButton>
          <Typography className={classes.grow} id="title" variant="h6" color="inherit" >
            LEthRoom
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppTop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppTop);