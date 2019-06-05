import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

function ImportRadioButtons() {
  const classes = useStyles();
  const [value, setValue] = React.useState('import');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="Coupon"
          name="import"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="import" control={<Radio />} label="Import" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="Coupon"
          name="export"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="export"
            control={<Radio/>}
            label="Export"
          />
         
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default ImportRadioButtons;
