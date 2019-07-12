import React from 'react'
import styled from 'styled-components';
import Bar1 from './assets/bar1.jpg'


const InWrap = styled.div`
    height: 15rem;
    background-color: rgba(245, 0, 86, 0.3);
     z-index: 2;
`;

const Wrapper = styled.div`
height: 15rem;
z-index: 1;
background-image: url(${Bar1});
max-width:100%;
max-height:100%;
background-position: center;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

const Text = styled.p`
    height: 100%;
    color: white;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
    
`;

export default function Spacer() {
    return(
        <div>
            <Wrapper>
                <InWrap>
                    <Text>Check our on brews on Tap</Text>
                </InWrap>
            </Wrapper>
        </div>
    )
}
