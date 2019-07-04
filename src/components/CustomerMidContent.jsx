import React from 'react'
import Grid from './Grid.css'
import beer2 from './assets/beer2.jpg'
import beer3 from './assets/beer3.jpg'

export default function CustomerMidContent() {
    return(
        <div className='body2'>
            <div className='side1'>
                <span className='textContent' >Come in and see what's on tap!</span>
            </div>
            <div className='side2'>
                <span className='textContent'>The brew is better with friends</span>
            </div>
        </div>
    )
}