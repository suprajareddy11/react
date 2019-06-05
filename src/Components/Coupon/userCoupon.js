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
import SingleUserField from './SingleUserCoupon'
import MultiUserFields from './MultiUserCoupon'

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft : "270px"
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
}));

function userCoupon() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    couponName: "",
    maxUsers: "",
    description: "",
    couponRedemption: "",
    couponPrefix: ""
  });

  const handleChange = name => event => {
      this.userType = '';
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className="container"> 
      <RadioButtonsGroup type="single" />
      {<SingleUserField/>}
      <MultiUserFields/>
      <ContainedButtons />
      <ImportRadioButtons />
      <MultipleSelect />
    </div>
  );
}
 
 export default userCoupon
