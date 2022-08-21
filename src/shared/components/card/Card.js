import Image from 'next/image'
import React from 'react'
import { CardWrapper } from './Card.Styled'


export const ImageCard = ({ src }) => {
    return (
        <CardWrapper>
            <Image src={src} alt={src.toString()} layout='fill'
                objectFit='cover' />
        </CardWrapper>
    )
}

