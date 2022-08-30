import styled from "styled-components";
import { Accordion, Grid, List } from "@mantine/core";


export const Wrap = styled.div`
    background: rgba(255, 253, 251, 0.03);
    border-radius: 30px;
    border:1px solid #fff;
    padding: 0;
    margin: 0;
    display:flex;
    flex-direction:column;

    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
        flex-direction:row;
    }
    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.sm}){
        flex-direction:column;
    }
`


export const ColImage = styled.div`
    /* border: 1px solid #FFFFFF; */
    position:relative;
    display:flex;
    width:100%;
    padding:0;
    margin:0;
    min-height:370px;

    .numberIconClass{
        position:absolute;
        right:40px;
        width:68px;
        height:140px;
        top:50px;
        padding:1rem;
        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){       
        right:0;
        }
    }

    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){       
        min-height:280px;
    }
    
`
export const Div = styled.div`
       border-radius: 60px 300px 300px 300px;
        background-image: ${({ url }) => `url(${url[1]})`};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width:80%;
        /* height:100%; */
        max-height: 461.72px;

        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.sm}){       
            max-height: 461.72px;
            max-height:350px;
            width:90%;
           
            background-image: ${({ url }) => `url(${url[0]})`};
    }

    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
        border-radius: 0;
        border-top-right-radius: 20rem !important;
        border-top-left-radius: 50px !important;
        border-bottom-right-radius: 20rem !important;
    }
    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
        border-radius: 0;
        border-top-right-radius: 20rem !important;
        border-top-left-radius: 70px !important;
        border-bottom-right-radius: 20rem !important;
    }
`

export const ColText = styled.div`
    padding:0 15px;
    display: flex;
    flex-direction:column;
    height: 100%;
   
    #first{
        height: 100%;
    }

    #sec{
        display: none;

        h3{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            color:#fff !important;
            margin:15px 0 12px 0;
            width:100%;
            display:flex;
            gap:10px;
            align-items: center;
        }
    }
    .priceBtn{
        display:flex;
        align-items: center;
        justify-content: center;
        margin-bottom:15px;
    }

    h2{
        font-family: 'Playfair Display';
        font-weight: 700;
        font-size: 28px;
        text-transform: uppercase;
        text-align:center !important;  
        
        @media (max-width:${({ theme: { breakPoints } }) => breakPoints.sm}){
            font-size:20px !important;
        }

    }

    @media(min-width:${({ theme: { breakPoints } }) => breakPoints.sm}){
        
        padding: 0 22px;

        /* h2{
            font-size:20px ;
            text-align:start;
        } */
    }


    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.sm}){
        #first{
            display:none;
        }

        #sec{
            display:block;
        }
    }
  
`


export const Lists = styled(List)`

    h3{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color:#fff !important;
        margin:15px 0 12px 0;
    }
`

export const ListItem = styled(Lists.Item)`
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 15px;
    color: #FFFFFF;

    ::marker{
        width:7;
        height:7;
    }

    
`
export const Price = styled.div`

    margin-top:10px;
    margin-bottom:22px;


    *{
        padding: 0;
        margin: 0;
        font-family: 'Montserrat';
        font-size: 16px;
    }

    h5{
            font-style: italic;
            font-weight: 400 !important; 
            display:flex;
            gap:5px;

    }

    
    span{
            font-style: italic;
            font-weight: 400;
            color: #FF2E2E;
    }

    #title{
        font-weight:600;
        color:#fff;
        font-style:normal;
        margin-right:5px;
    }
`

export const AccordionWrap = styled(Accordion)`
.mantine-Accordion-item{
    border-bottom:0px solid;
}
    .mantine-Accordion-control, .mantine-Accordion-content {
        padding:0;
        margin:0;
    }

    .mantine-Accordion-control{
        :active{
            background-color:transparent;
        }
    }
    li{
        margin-top:0px !important;
    }

    .mantine-Accordion-chevron{
        display:none;
    }

`