import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import SubmitButtons from './submitButton'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: 18
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(2),
    },
    buttonStyle : {
        marginLeft: '18px'
    }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function MultipleSelect() {
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    function handleChange(event) {
        setPersonName(event.target.value);
    }

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple">Coupon name</InputLabel>
                <Select
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<Input id="select-multiple" />}
                    MenuProps={MenuProps}
                >
                    {names.map(name => (
                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {/* <Button variant="contained" color="default" className={classes.button}>
        <input type="file" />
      </Button> */}
            <input
                accept="image/*"
                className={classes.input}
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
            />
            <label htmlFor="raised-button-file">
                <Button variant="contained" component="span" className={classes.button}>
                    Upload
    <CloudUploadIcon className={classes.rightIcon} />
                </Button>
            </label>
            <SubmitButtons className={classes.button} />
            {/* <form action="/file-upload" class="dropzone">
                <div class="fallback">
                    <input name="file" type="file" multiple />
                </div>
            </form> */}


            {/* <form method="post" encType="multipart/form-data" className="relative">
                <label className="font-normal text-center bg-white border-1 border-black px-2 md:px-4 py-2 cursor-pointer" id="upload-document">
                    <input type="file" name="UploadDocument" className="absolute text-sm leading-tight font-normal w-px h-px opacity-0 z-0 cursor-pointer" accept=".jpg,.pdf"
                        placeholder="RESTORATION_UPLOAD_DOCUMENT"
                    />
                    RESTORATION_CHOOSE_FILE
          </label>
            </form> */}


        </div> 
            )  
    }
    
export default MultipleSelect;



