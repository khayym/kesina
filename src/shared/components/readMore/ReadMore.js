import React, { useState } from 'react'
import Image from 'next/image';
import { ReadMoreWrap } from './ReadMore.Styled';


function ArrowButton({ style }) {
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
