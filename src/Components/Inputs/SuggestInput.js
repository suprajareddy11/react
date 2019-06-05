
import React from 'react';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextInput from './TextInput';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  input: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 14,
    paddingRight: 4
  },
  inputContainer: {
    width: '100%'
  },
  valueContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  },
  container: {
    width: '100%'
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16
  },
  paper: {
    position: 'absolute',
    zIndex: 2,
    left: 0,
    right: 0
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextInput
      className={props.selectProps.classes.inputContainer}
      InputLabelProps={{
        shrink: props.hasValue ? props.hasValue : undefined
      }}
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      label={props.selectProps.label}
      {...props.selectProps.textFieldProps}
      margin="normal"
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps} noWrap>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

class IntegrationReactSelect extends React.Component {
  state = {
    single: null,
    multi: null
  };

  handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes, theme, options, onChange, value, label, className } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit'
        }
      })
    };

    return (
      <div className={className}>
        <Select
          className={classes.container}
          classes={classes}
          styles={selectStyles}
          options={options}
          components={components}
          value={value}
          onChange={onChange}
          placeholder=''
          label={label}
          isClearable
        />
      </div>
    );
  }
}

IntegrationReactSelect.defaultProps = {
  width: '100%'
}

export default withStyles(styles, { withTheme: true })(IntegrationReactSelect);