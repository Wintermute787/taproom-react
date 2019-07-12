import React from 'react';
import CustomerTopContent from './CustomerTopContent'
import CustomerMidContent from './CustomerMidContent'
import KegList from './KegList'
import StaticKegList from './StaticKegList'

export default function Customer(props) {
    return(
        <div>
            <CustomerTopContent/>
            <CustomerMidContent/>
            <StaticKegList/>
            <KegList
            kegList={props.kegList}/>
        </div>
    )
}
