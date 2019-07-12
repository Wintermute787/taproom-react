import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
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
        <Container maxWidth='sm'>
        <div className={classes.root}>
            <Grid container spacing={3}>
                <form onSubmit={HandleNewKegFormSubmit} className={classes.container} noValidate autoComplete="off">
                    <Grid item xs={3}>
                        <TextField
                            id="name"
                            label="Name"
                            className={classes.textField}
                            inputProps={{ref: input => _name = input}}
                            margin="normal"
                        />
                    </Grid>
                    <Grid xs={3}>
                        <TextField
                            id="brand"
                            label="Brand"
                            className={classes.textField}
                            inputProps={{ref: input => _brand = input}}
                            margin="normal"
                        />
                    </Grid>
                    <Grid xs={3}>
                        <TextField
                            id="alc"
                            label="Alc%"
                            className={classes.textField}
                            inputProps={{ref: input => _alc = input}}
                            margin="normal"
                        />
                    </Grid>
                    <Grid xs={6}>
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            className={classes.textField}
                            inputProps={{ref: input => _description = input}}
                            margin="normal"
                        />
                    </Grid>
                    <Grid xs={6}>
                        <TextField
                            id="image"
                            label="Image"
                            className={classes.textField}
                            inputProps={{ref: input => _image = input}}
                            margin="normal"
                        />
                    </Grid>
                    <Button type="submit" className={classes.button} variant="contained" color="primary">Submit</Button>
                </form>
            </Grid>
        </div>
    </Container>
    )
}

NewKegListForm.propTypes = {
    onNewKegCreation: PropTypes.func
}

