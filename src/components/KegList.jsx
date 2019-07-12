import React from 'react';
import Keg from './Keg';
import Deschutes1 from './assets/Deschutes1.png';
import Allagash1 from './assets/allagash1.jpg';
import Coniston1 from './assets/coniston1.png';
import Stone1 from './assets/Stone1.png';
import Boulevard1 from './assets/Boulevard1.jpg';
import newBelgium1 from './assets/newBelgium1.jpg'
import Grid from './Grid.css'
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'




function KegList(props) {
    return(
        <div className='wrapper'>

            {props.kegList.map( (keg)=>
            <Keg className='wrapper'
                name={keg.name}
                brand={keg.brand}
                alc={keg.alc}
                description={keg.description}
                image={keg.image}
                key={keg.id}/>
                )}
        </div>
    )
}

KegList.propTypes = {
    kegList: PropTypes.array
}

export default KegList;
