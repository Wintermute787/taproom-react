import React from 'react'
import image1 from './assets/image1.jpg'
import { makeStyles } from '@material-ui/core/styles';

var heroStyle = {
    height: '100vh',
    width: '100vw',
    objectFit: 'cover',
    position: "relative"
};
var heroBox = {
    position: "absolute",
    top: "50%",
    left: "35%"

}


function Hero() {

    return(
        <div>
            <img src={require('./assets/image1.jpg')} alt="" style={heroStyle}/>
            <div style={heroBox}>
                <h1>Experience our winter cold brew</h1>
            </div>
        </div>
    )
}

export default Hero