import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
    return (
        <Wrap style={{ border: '1px solid red' }}>
            <Div>
                <h2>Ksenia Shapor</h2>
                <p className='outhor'>2022 © Все права защищены</p>
            </Div>
            <div className='fo0terTexts'>
                <div id='links'>
                    <h3>услуги и обучения</h3>
                    <div>
                        <Link href="/makeup-hair"><a>Make-up & Hair</a></Link>
                        <Link href="/stil"><a>Стиль</a></Link>
                        <Link href="/your-choise"><a>выбирай себя</a></Link>
                    </div>
                </div>
                <div id='email'>
                    <h3>связаться</h3>
                    <a to='javascript:void(0)'
                        onClick={() => window.location = 'mailto:kseniashaportv@mail.ru'}>
                        kseniashaportv@mail.ru
                    </a>
                </div>
                <div id='icon'>
                    <Image src='/icons/upArrow.svg' alt='Arrow icon up' width={34} height={37} />
                </div>
            </div>
        </Wrap>
    )
}


export const Wrap = styled.footer`
    border: 1px solid red;
    background: #FFF9F2;
    border-radius: 0px 500px 0px 0px;
    min-height: 394px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    .fo0terTexts{
        border:1px solid #e40404;
        color:#000;
        display: flex;
        align-items: center;
        /* gap:12.125rem; */
        width: 50%;
        justify-content: space-between;

        @media (max-width:${({ theme: { breakPoints } }) => breakPoints.sm}){
            width: 80%;
            flex-direction: column;
        }

        h3{
            font-family: 'Philosopher';
            font-weight: 700;
            font-size: 15px;
            text-transform: uppercase;
        }

        h4,a{
            font-family: 'Montserrat';
            font-weight: 400;
            font-size: 13px;
            color:#000;
        }
    }

    #links{
        border:1px solid red;
        div{
            display:flex;
            flex-direction:column;
            gap:12px;
        }
    }

    #email{
        border:1px solid blue;
        a{
            cursor:pointer;
        }

        
    }


    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.lg}){
        flex-direction: column;
        align-items:flex-start;
        padding-left:24px;
    }
  
`

export const Div = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;

    h2{
    font-family: 'Philosopher';
    font-weight: 400;
    font-size: 50px;
    line-height: 56px;
    text-transform: uppercase;
    color: #A91111;
    margin: 0 0 40px 0;
    }

    .outhor{
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 13px;
        color: #000000;
    }
`