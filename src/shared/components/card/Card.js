import Image from 'next/image'
import React from 'react'
import YouTube from 'react-youtube'
import { CardWrapper } from './Card.Styled'


export const ImageCard = ({ src }) => {
    return (
        <CardWrapper>
            <YouTube
                videoId={src}
                className={'youtube-card'}              // defaults -> ''
            />
        </CardWrapper>
    )
}

