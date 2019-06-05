import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  buttonStyle : {
      marginLeft: '18px'
  }
}));

function ContainedButtons() {
  const classes = useStyles();

  return (
      <div className={classes.buttonStyle}>
    <Button variant="contained" color="primary" className={classes.button}>
       Cancel
    </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Create Coupon
      </Button>
</div>
  );
}

export default ContainedButtons;
