import styled from "styled-components";

export const Lined = styled.div`
    display: flex;
    align-items: center;
    gap:26px;
    justify-content: center;
    margin-top:1.5rem;
    margin-bottom:1.5rem;
    h2{
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 600;
        font-size: ${({ size }) => size}px;
        /* line-height: 55px; */
        text-transform: uppercase;
        color: #FFFDFB;
        text-align: center;

        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
            font-size:32px;
        }


        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
            font-size:22px;
        }
    }

    div{
        flex-grow: 1;
        height:2px;
        background:#fff;
        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
            display: none;
        }
    }

   
`