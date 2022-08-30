import { Indicator } from "@mantine/core"
import styled from "styled-components"

export const Round = () => {
    return (
        <Wrap>
            <div className='left'>
                <Text>Телеведущая и ТВ эксперт в сфере красоты</Text>
                <Text>Преподаватель по макияжу и базовым прическам с 2014 года</Text>
                <Text>Санкт-Петербургские Невские Берега наградили кубком и премией за вклад в развитие индустрии красоты</Text>
            </div>
            <div className='middle' />
            <div className='right'>
                <Text>На моих курсах побывало более 700 учениц с разных стран мира</Text>
                <Text>Была номинирована на премию PUDRA.RU в номинации beauty guru</Text>
                <Text>Опытный преподаватель с большим чувством юмора и необходимой строгостью</Text>
            </div>
        </Wrap>
    )
}


const Text = ({ children }) => {
    return (
        <TextWrapper>
            {/* <di></di> */}
            <Indicator position='middle-start' offset={-15} color='#A91111' size={7}>
                <h4>{children}</h4>

            </Indicator>
        </TextWrapper>
    )
}

const Wrap = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-between;
    margin-bottom:2rem;
    gap:2rem;
    .middle{
        max-width:550px;
        width: 100%;
        border-radius:500px;
        /* height: 100%; */
        height:550px;
        background-image:url('/images/makeup/round.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        @media (max-width:${({ theme: { breakPoints } }) => '613px'}){
        max-width:400px;
        width: 100%;
         max-height:400px;

         }
        @media (max-width:${({ theme: { breakPoints } }) => '450px'}){
        max-width:300px;
        width: 100%;
         max-height:300px;

         }
        @media (max-width:${({ theme: { breakPoints } }) => '350px'}){
        max-width:250px;
        width: 100%;
         max-height:250px;

         }
    }

    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
        flex-direction:column;
        gap:0rem;
    }

    .right, .left {
        margin-left:1rem;
        @media (max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
        width: 100%;
        }
    }
`

const TextWrapper = styled.div`
    max-width:380px;
    align-items: center;
    h4{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 140%;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
        h4{font-size:14px;}
       
    }

    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
        max-width: 100%;
    }
  
`