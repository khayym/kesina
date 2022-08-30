import styled from "styled-components"
import { List } from '@mantine/core';
import { useRouter } from 'next/router'
import { CutomButton } from "../button/Button";
import { goToTelegram } from "../../../utils/nav";
export const Banner3 = () => {
    const { pathname, push } = useRouter();

    return (
        <Wrap>
            {
                pathname === '/makeup-hair' ? <One id='one' /> : <Pht />
            }

            {
                pathname === '/makeup-hair' ? (
                    <Two id='two'>
                        <h2>Макияж и прическа</h2>
                        <Lists>
                            <Item>Любой образ от меня на мероприятие </Item>
                            <div id='try'>
                                <h5>Стоимость:</h5>
                                <h6>8500 руб</h6>
                            </div>
                            <Item style={{ marginTop: '20px' }}>Свадебный образ от меня </Item>
                            <div id='try'>
                                <h5>Стоимость:</h5>
                                <h6>8500 руб</h6>
                            </div>
                        </Lists>
                        <CutomButton func={() => goToTelegram(push)}>Хочу записаться!</CutomButton>
                    </Two>
                ) : (
                    <Two id='two'>
                        <h2>Стилизация съемки</h2>
                        <Lists>
                            <Item>Макияж</Item>
                            <Item>Прическа</Item>
                            <Item>Составление 2-3 образов для фотосессии</Item>
                            <div id='try'>
                                <h5>Стоимость:</h5>
                                <h6>15000 руб</h6>
                            </div>
                        </Lists>
                        <CutomButton func={() => goToTelegram(push)}>Хочу записаться!</CutomButton>
                    </Two>
                )
            }
        </Wrap>
    )
}

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    min-height:394px;
    /* min-height:394px; */
    display:flex;
    margin-bottom:5rem;
    background: rgba(255, 253, 251, 0.03);
    border: 1px solid #FFFFFF;
    border-radius: 0px 0px 30px 30px;
    gap:4rem;

    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
        flex-direction:column;
        gap:1rem;
    }
`

export const One = styled.div`
    background:url('/images/banner-makeup/uslu.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: content;
    background-position: top;
    border-bottom-right-radius: 20rem !important;
    border-top-right-radius: 20rem !important;
    border-radius: 0px 0px 30px 50px;
    min-height: 100%;
    /* width: 60%; */
    width: 80%;

    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
        height:230px;
        border-radius: 0px;
    }
`
export const Two = styled.div`
    width:100%;
    min-height:100%;
    min-height: 100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;

    button{
        margin-top:22px;
        margin-bottom:22px;
    }

    h2{
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.sm}){
        align-items:center;
    }

`

export const Three = styled.div`
    width:100%;
    height:100%;
    min-height: 100%;
`

export const Lists = styled(List)`
    #try{
        display:flex;
        align-items: center;
        gap: 0.3rem;
        margin-left: 1.2rem;
        margin-top:.75rem;


        h5, h6{
            margin:0;
            padding:0;
            font-family: 'Montserrat';
            font-style: normal;
        }

        h5{
            font-weight:600;
            font-size:16px;
            color:#fff;
        }

        h6{
            font-weight:400;
            font-size:15px;
            font-style:italic;
            color:#FF2E2E;
        }

    }

    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.sm}){
       margin:0.75px 15px;
    }


`


export const Item = styled(Lists.Item)`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 15px;
color: #FFFFFF;

::marker{
    width:7;
    height:7;
}
`


export const Pht = styled(One)`
 background:url('/images/stil/1.png');
`