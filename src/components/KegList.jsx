import React from 'react';
import Keg from './Keg';
import Grid from './Grid.css'
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
