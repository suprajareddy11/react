import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TextInput from '../../Components/Inputs/TextInput';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputContainer: {
    padding: theme.spacing(3, 2),
    width: 500
  }
});

class CreateMultiUserCoupon extends Component {
  render() {
    const {classes} = this.props
    
    return (
      <div className={classes.root}>
        
        <Paper className={classes.inputContainer}>
          <Typography variant='h2'>
            Create a Multiple-User Coupon
          </Typography>
          <TextInput 
            label='Coupon Code'
            placeholder='Enter a coupon code, letters and digits only'
            required
            onChange={()=>{}}
            fullWidth
            margin="normal"
          />
          <TextInput 
            label='Reason'
            required
            onChange={()=>{}}
            fullWidth
            margin="normal"
          />
          <TextInput 
            label='Max uses across all users'
            placeholder='Leave blank for unlimited'
            onChange={()=>{}}
            fullWidth
            margin="normal"
          />
          <Typography variant='caption'>
            After creating this coupon you can use it in a condition in a promotion
          </Typography>
          <div>
            <PrimaryButton title='Cancel' color='secondary' />
            <PrimaryButton title='Create Coupon Now' />
          </div>
          
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(CreateMultiUserCoupon);