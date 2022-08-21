import styled from "styled-components";

export const Lined = styled.div`
    display: flex;
    align-items: center;
    gap:26px;

    h2{
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 600;
        font-size: ${({ size }) => size}px;
        line-height: 43px;
        text-transform: uppercase;
        color: #FFFDFB;
    }

    div{
        flex-grow: 1;
        height:2px;
        background:#fff;
    }

   
`