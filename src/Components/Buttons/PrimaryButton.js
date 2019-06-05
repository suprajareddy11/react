import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Colors from '../../theme/Colors';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    height: theme.spacing.unit * 5
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  progress: {
    position: 'absolute'
  },
  containedPrimary: {
    backgroundColor: Colors.primaryBlue,
    '&:hover': {
      backgroundColor: Colors.lowlightBlue
    }
  },
  containedSecondary: {
    backgroundColor: Colors.primaryOrange,
    '&:hover': {
      backgroundColor: Colors.lowlightOrange
    },
    '&:hover :focused': {
      backgroundColor: Colors.lowlightOrange
    }
  }
});

function PrimaryButton(props) {
  const { 
    classes, 
    title, 
    IconLeft, 
    IconRight, 
    variant, 
    color, 
    disabled, 
    onClick,
    loading,
    ...rest
  } = props;

  return (
    <Button 
      variant={variant}
      color={color} 
      disabled={disabled || loading} 
      onClick={onClick} 
      className={classes.button} 
      classes={{disabled: classes.disabled, containedPrimary: classes.containedPrimary, containedSecondary: classes.containedSecondary, focusVisible: classes.focusVisible}} 
      {...rest}
    >
      {IconLeft ? <IconLeft className={classes.leftIcon} style={{visibility: loading ? 'hidden' : 'visible'}} /> : null}
      <span style={{visibility: loading ? 'hidden' : 'visible'}}>
        {title}
      </span>
      {IconRight ? <IconRight className={classes.rightIcon} style={{visibility: loading ? 'hidden' : 'visible'}} /> : null}
      {loading ? <CircularProgress size={20} thickness={5} color='inherit' className={classes.progress} /> : null}

    </Button>
  );
}

PrimaryButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
  disabled: false,
  loading: false
}

PrimaryButton.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  iconLeft: PropTypes.any, 
  iconRight: PropTypes.any, 
  variant: PropTypes.string, 
  color: PropTypes.string,
  disabled: PropTypes.bool, 
  onClick: PropTypes.func,
  loading: PropTypes.bool
};


export default withStyles(styles)(PrimaryButton);