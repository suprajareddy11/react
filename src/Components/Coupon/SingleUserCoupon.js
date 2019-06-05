import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { Grid } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import RadioButtonsGroup from './radioButton'
import ContainedButtons from './Button'
import ImportRadioButtons from './importRadio'
import MultipleSelect from './Dropdown'
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing * 4,
    width: 200,
    wordWrap: "break-word"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
  // spacing: {
  //   marginLeft : 270
  // }
}));

function SingleUserField() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    couponName: "",
    maxUsers: "",
    description: "",
    couponRedemption: "",
    couponPrefix: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container>
          <Grid item lg={6} sm={7} xs={7}>
            <TextField
              required
              id="standard-name"
              label="Coupon Code"
              placeholder="Enter coupon group name, letters and digits only.This is used in condition"
              className={classes.textField}
              value={values.name}
              onChange={handleChange("name")}
              margin="normal"
            />

            <TextField
              required
              id="standard-coupon"
              label="Assign Date"
              placeholder="Leave blank for unlimited"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-users"
              required
              label="AutoUse"
              placeholder="Customer facing for use in menus of coupons to pick from"
              value={values.multiline}
              onChange={handleChange("multiline")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-redemption"
              label="Coupon Group"
              placeholder="One user can use this coupon so many times."
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-prefix"
              label="Create Date"
              placeholder="Letters and Digits"
              className={classes.textField}
              margin="normal"
            />
             <TextField
              id="standard-prefix"
              label="Expiry Date"
              placeholder="Letters and Digits"
              className={classes.textField}
              margin="normal"
            />
             <TextField
              id="standard-prefix"
              label="LockOn FirstUse"
              placeholder="Letters and Digits"
              className={classes.textField}
              margin="normal"
            />
             <TextField
              id="standard-prefix"
              label="Member Limit"
              placeholder="Letters and Digits"
              className={classes.textField}
              margin="normal"
            />
             <TextField
              id="standard-prefix"
              label="Start Date"
              placeholder="Letters and Digits"
              className={classes.textField}
              margin="normal"
            />
             <TextField
              id="standard-prefix"
              label="Member Id"
              placeholder="Letters and Digits"
              className={classes.textField}
              margin="normal"
            />
             <TextField
              id="standard-prefix"
              label="Total Limit"
              placeholder="Letters and Digits"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
        </Grid>
      </form>
      <ContainedButtons />
      <ImportRadioButtons />
      <MultipleSelect />
    </div>
  );
}
 
 export default SingleUserField;
