import React from 'react';
import CustomerTopContent from './CustomerTopContent'
import CustomerMidContent from './CustomerMidContent'
import KegList from './KegList'
import StaticKegList from './StaticKegList'
import Spacer from './Spacer'
import styled from 'styled-components';
import ReactPlayer from 'react-player'


const Wrapper = styled.div`
    margin-top: 2rem;
`;


export default function Customer(props) {
    return(
        <div>
            <Wrapper/>
            <CustomerTopContent/>
            <Wrapper/>
            <CustomerMidContent/>
            <Wrapper/>
            <Spacer>

            </Spacer>
            <Wrapper/>
            <StaticKegList/>
            <Wrapper/>
            <KegList
            kegList={props.kegList}/>
        </div>
    )
}
