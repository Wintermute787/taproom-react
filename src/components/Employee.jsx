import React from 'react'
import KegList from './KegList'
import NewKegListForm from './NewKegListForm'
import StaticKegList from './StaticKegList'
import styled from 'styled-components';

const Header = styled.p`
    text-align: center;
    font-size: 2rem;
    margin: 2rem 0;
    text-transform: uppercase;
    font-weight: 100;
`;

const Wrapper = styled.div`
    margin-top: 2rem;
`;


export default function Employee(props) {
    return(
        <div>
            <Header>Add a new Beer to Tap Room</Header>
            <NewKegListForm
            onNewKegCreation={props.onNewKegCreation}/>
            <Wrapper>
            <StaticKegList/>
            </Wrapper>
            <KegList
            kegList={props.kegList}/>
        </div>
    )
}
