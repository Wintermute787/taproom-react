import React from 'react'
import image1 from './assets/image1.jpg'
import { makeStyles } from '@material-ui/core/styles';

{/*<img src={require('./assets/image1.jpg')} alt="" style={heroStyle}/>*/}

var heroStyle = {
    height: '100vh',
    width: '100vw',

    backgroundColor: "rgba(0,0,0,0.33)",
    zIndex: "10"


};
var heroBox = {
    minHeight: "100%",
    minWidth: '1024px',
    width: "100%",
    height: "auto",
    top: "0",
    left: "0",
    position: "absolute",
    backgroundImage: `url(${image1})`,
    zIndex: '-1',
    backgroundSize: "cover"

};

var heroText = {
    color: 'white',
    zIndex: "14",
    position: "absolute",
    top: "45%",
    left: "20%",
    textTransform: "uppercase",
    letterSpacing: "15px"
}



function Hero() {

    return(
        <div style={heroStyle}>
            <div style={heroBox}></div>
            <h1 style={heroText}>Experience our winter cold brew</h1>
        </div>
    )
}

export default Hero