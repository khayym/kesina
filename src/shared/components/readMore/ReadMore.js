import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import { Button } from '@mantine/core';

function ArrowButton({ style }) {
    console.log(style)
    return <Image src='/icons/downArrow.svg' width={10} height={5} alt='Arrow icon' id='arrowIcon' style={style} />
}

export const ReadMore = () => {
    const [rt, setRt] = useState(0);
    return (
        <ReadMoreWrap rightIcon={<ArrowButton style={{ transform: `rotate(${rt}deg)`, transition: '.3s ease-in-out' }} />} onClick={() => rt === 0 ? setRt(180) : setRt(0)}>
            Читать далее
        </ReadMoreWrap>
    )
}
const ReadMoreWrap = styled(Button)`
    background-color: transparent;
    display: flex;
    align-items: center;
    gap:10px;
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