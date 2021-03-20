import React from 'react';

import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    :hover {
        text-decoration: none;
    }
    h1 {
        font-size: 26px;
        text-decoration: none;
        :hover {
            color: green;  
        }
    };
    h2 {
        font-size: 1.2rem;
        color: grey;
      };

`;

const AppHeader = () => {
    return (
        <Header as='a' href='https://kwork.ru/projects' target='_blank'>
            <h1>Fedor Pavlov</h1>
            <h2>5 записей, из них понравилось 0</h2>
        </Header>
    )
}

export default AppHeader;