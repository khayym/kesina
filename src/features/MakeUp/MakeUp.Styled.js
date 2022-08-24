import styled from "styled-components";

export const MakeUpWrap = styled.div`


`


export const Container = styled.div`
    margin: 0 120px;

    section:nth-child(1){
        h2{
            line-height:4rem;
        }


       
    }

    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.lg}){
        margin: 0 24px;
    }

    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.sm}){
        section:first-child {
            h2{
                font-size:32px;
                line-height:2.2rem;
            }
        }
    }


    section:nth-child(3){
        width:100%;
        position:relative;
        height:800px;
    }

`