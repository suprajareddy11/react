import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  cssLabel: {
    '&$cssFocused': {
      color: '#1977D3',
      transform: 'translate(8px, -16px) scale(0.75)'
    },
    '&$labelError': {
      color: '#e74517'
    },
    '&$shrink': {
      transform: 'translate(8px, -16px) scale(0.75)'
    },
    left: 8,
    transform: 'translate(8px, 9px) scale(1)'
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#1977D3'
    },
    '&$outlineError $notchedOutline': {
      borderColor: '#e74517'
    },
    '&$outlineDisabled $notchedOutline': {
      borderColor: 'transparent',
      backgroundColor: '#efefef'
    }
  },
  formHelper: {
    margin: '4px 14px 0'
  },
  cssFocused: {},
  notchedOutline: {
    borderRadius: 30,
    height: 36
  },
  input: {
    padding: '7px 16px',
    zIndex: 1
  },
  shrink: {},
  outlineDisabled: {},
  outlineError: {},
  labelError: {}
};

function TextInput(props) {
  const {classes} = props
  

  return (
    <TextField
      {...props}
      InputLabelProps={{...props.InputLabelProps,
        classes: {
          shrink: classes.shrink,
          root: classes.cssLabel,
          focused: classes.cssFocused,
          error: classes.labelError
        }
        
      }}
      InputProps={{...props.InputProps,
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
          input: classes.input,
          disabled: classes.outlineDisabled,
          error: classes.outlineError
        },
        notched: false
      }}
      FormHelperTextProps={{...props.FormHelperTextProps,
        classes: {
          root: classes.formHelper
        }
      }}
      variant="outlined"
    />
  );
}

export default withStyles(styles, { withTheme: true })(TextInput);