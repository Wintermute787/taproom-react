import React from 'react';
import CustomerTopContent from './CustomerTopContent'
import CustomerMidContent from './CustomerMidContent'
import KegList from './KegList'

export default function Customer(props) {
    return(
        <div>
            <CustomerTopContent/>
            <CustomerMidContent/>
            <KegList/>
        </div>
    )
}
