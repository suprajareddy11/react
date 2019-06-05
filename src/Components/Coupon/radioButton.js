import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import SingleUserField from './SingleUserCoupon'
import MultiUserFields from './MultiUserCoupon'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0),
    flexDirection: 'row'
  },
}));

function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState('singleUserCoupon');
  let userType;

  function handleChange(event) {
    setValue(event.target.value);

    userType = (event.target.value == "singleUserCoupon") ? <SingleUserField /> : <MultiUserFields />;
    debugger
  };

  return (
    <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="Coupon"
            name="singleUserCoupon"
            className={classes.group}
            value={value}
            onChange={handleChange}>
            <FormControlLabel value="singleUserCoupon" control={<Radio />} label="Single User Coupon" />
            <FormControlLabel value="multiUserCoupon"control={<Radio />} label="Multi User Coupon"/>
          </RadioGroup>
        </FormControl> 
        <div>{userType}</div>  
    </div>
  );
}

export default RadioButtonsGroup;
