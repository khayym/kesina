import styled from "styled-components";

export const SectionOne = styled.section`
    height:52rem;
    width:100%;
    position: relative;
    display:flex;
    align-items: center;
    gap:90px;

    .makeUpSecionDivOne, .hClass , .hClass div:first-child{
        display:flex;
        flex-direction:column;
 
    }

    .hClass div:first-child{
        justify-content:center !important;
 
    }


    .makeUpSecionDivOne{
        max-width:770px;
        width: 100%;
        height: 592px;
        min-width:400px;
        right: 0;
        z-index:-1;
        @media (max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
            max-height:500px;
            
        }
    }
    .hClass{
        margin-left:120px;
        align-items:flex-start;
        gap:70px;
        height:70%;
        div:first-child {
        gap:30px;
        max-width: 616px;
        width: 100%;
        height: 100%;;
        }
    }

    .hClass div:first-child{
        justify-content:flex-end;
        height: 100%;
    }


    h1{
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 600;
    font-size: 75px;
    text-transform: uppercase;
    color: #FFF7EF;
    margin:0;
    }



    h4{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #FFFFFF;
    margin:0;
    max-width:486px;

    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
        font-size:24px;
    }
    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.sm}){
        font-size:24px;
    }
    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
        font-size:17px;
    }
    }


    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.lg}){
        .hClass{
            margin-left:24px;
        }
    }


    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
        h1{
            font-size: 42px;
        }

        h3{
            font-size: 20px;
        }

        gap:20px;

    }


    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.sm}){
        gap:0px;
        .makeUpSecionDivOne {position: absolute; right: 0; width:80%; min-width:320px;}
    }
    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
        .arrowDownIcon {display: none !important;}
        height:42rem;
    }
`
