import styled from "styled-components"

export const Round = () => {
    return (
        <Wrap>
            <div className='left'>
                <Text>Телеведущая и ТВ эксперт в сфере красоты</Text>
                <Text>Телеведущая и ТВ эксперт в сфере красоты</Text>
                <Text>Телеведущая и ТВ эксперт в сфере красоты</Text>
            </div>
            <div className='middle' />
            <div className='right'>
                <Text>Телеведущая и ТВ эксперт в сфере красоты</Text>
                <Text>Телеведущая и ТВ эксперт в сфере красоты</Text>
                <Text>Телеведущая и ТВ эксперт в сфере красоты</Text>
            </div>
        </Wrap>
    )
}


const Text = ({ children }) => {
    return (
        <TextWrapper>
            <div></div>
            <h4>{children}</h4>
        </TextWrapper>
    )
}

const Wrap = styled.div`
    border: 1px solid #fff;
    display:flex;
    align-items: center;
    justify-content:space-between;
    margin-bottom:2rem;
    
    .middle{
        width:550px;
        border-radius:500px;
        height:550px;
        background-image:url('/images/makeup/round.png');
        background-repeat: no-repeat;
        background-size: cover;
        @media (max-width:${({ theme: { breakPoints } }) => '613px'}){
        width:100%;
            max-height:350px;
         }
    }

    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
        flex-direction:column;
    }

    .right, .left {
        margin-left:1rem;
    }
`

const TextWrapper = styled.div`
    max-width:380px;
    display:flex;
    align-items: center;
    gap:20px;

    div{
        width: 7px;
        height: 7px;
        background: #A91111;
        border-radius:10rem;
    }
    h4{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 140%;
        text-transform: uppercase;
        color: #FFFFFF;
    }
`