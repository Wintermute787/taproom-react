import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));



export default function NewKegListForm(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    let _name = null;
    let _brand = null;
    let _alc = null;
    let _description = null;
    let _image = null;

    function HandleNewKegFormSubmit(event){
        event.preventDefault();
        props.onNewKegCreation({name: _name.value, brand: _brand.value, alc: _alc.value, description: _description.value, image: _image.value, id: v4()});
            _name.value = '';
            _brand.value = '';
            _alc.value = '';
            _description.value = '';
            _image.value = '';
    }
    return(
        <div>
            <form onSubmit={HandleNewKegFormSubmit} className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="name"
                    label="Name"
                    className={classes.textField}
                    inputProps={{ref: input => _name = input}}
                    margin="normal"
                />
                <TextField
                    id="brand"
                    label="Brand"
                    className={classes.textField}
                    inputProps={{ref: input => _brand = input}}
                    margin="normal"
                />
                <TextField
                    id="alc"
                    label="Alc%"
                    className={classes.textField}
                    inputProps={{ref: input => _alc = input}}
                    margin="normal"
                />
                <TextField
                    id="description"
                    label="Description"
                    className={classes.textField}
                    inputProps={{ref: input => _description = input}}
                    margin="normal"
                />
                <TextField
                    id="image"
                    label="Image"
                    className={classes.textField}
                    inputProps={{ref: input => _image = input}}
                    margin="normal"
                />
                <Button type="submit" className={classes.button} variant="contained" color="primary">Submit</Button>
            </form>
        </div>
    )
}

NewKegListForm.propTypes = {
    onNewKegCreation: PropTypes.func
}

