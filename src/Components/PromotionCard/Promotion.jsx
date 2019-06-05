const promtotionStyles = theme => ({
  small: {
      borderRadius: '10px',
      marginBottom: theme.spacing.unit * 2,
      width: 263,
      height: 121,
      marginTop: 20
  },
  medium: {
    borderRadius: '10px',
    marginBottom: theme.spacing.unit * 2,
    width: 300,
    height: 150,
    marginTop: 20
  },
  large: {
    borderRadius: '10px',
    marginBottom: theme.spacing.unit * 2,
    width: 400,
    height: 150,
    marginTop: 20
  },
  button: {
      boxShadow: 'none',
      textTransform: 'none',
      padding: 10
  },
  container: {
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
      background: "#efefef"
    }
  },
  boxSection: {
    position: 'absolute',
    padding: theme.spacing.unit / 2,
    color: 'white',
    fontSize: theme.spacing.unit * 2
  },
  transparentBoxSection: {
    color: 'inherit',
    fontSize: theme.spacing.unit * 2
  },
  desc: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 4,
    height: '70%',
    marginLeft: 10,
    marginRight: 3
  },
  title: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    // clipPath: 'polygon(0 0,120% 40%,100% 100%,0 100%)'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  icon: {
    height: '17px',
    width: '15px'
  }
});

export default promtotionStyles
