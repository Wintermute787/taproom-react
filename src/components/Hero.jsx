import React from 'react'
import image1 from './assets/image1.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



var heroStyle = {
    height: '93vh',
    width: '100vw',

    backgroundColor: "rgba(0,0,0,0.46)",
    zIndex: "10"


};
var heroBox = {
    minHeight: "100%",
    minWidth: '1024px',
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    position: "absolute",
    backgroundImage: `url(${image1})`,
    zIndex: '-1',
    backgroundSize: "cover"

};

var heroText = {
    color: 'white',
    fontWeight: "100",
    fontSize: "3rem",
    zIndex: "14",
    position: "absolute",
    top: "40%",
    left: "20%",
    textTransform: "uppercase",
    letterSpacing: "15px"
};



const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        top: "50%",
        left: "45%",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    input: {
        display: 'none',
    },
}));



function Hero() {
    const classes = useStyles();
    return(
        <div style={heroStyle}>
            <div style={heroBox}></div>
            <h1 style={heroText}>Experience our winter cold brew</h1>
            <Button variant="contained" color="secondary" className={classes.button} size={'large'}>
                Try us out!
            </Button>
        </div>
    )
}

export default Hero