import React from 'react'
import { Lined } from './LinedText.Styled'

export const LinedText = ({ text, left = true, right = true, className, size = 32, seef }) => {
    return (
        <Lined className={className} size={size} ref={seef} >
            {left && <div />}
            <h2>{text}</h2>
            {right && <div />}
        </Lined>
    )
}
