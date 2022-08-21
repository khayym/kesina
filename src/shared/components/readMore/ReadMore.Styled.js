import { Button } from '@mantine/core';
import styled from 'styled-components'


export const ReadMoreWrap = styled(Button)`
background-color: transparent;
margin-top:0.5rem;
padding: 0;
justify-content: space-between;

p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
}

:active{
    background-color: transparent;
    border:0px;
    text-decoration:none;
}
`