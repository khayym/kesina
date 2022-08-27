import React, { useRef } from 'react'
import { Lined } from './LinedText.Styled'

export const LinedText = ({ text, left = true, right = true, className, size = 32, reff }) => {
    // const reff = useRef(null)

    return (
        <Lined className={className} size={size} ref={reff} >
            {left && <div />}
            <h2>{text}</h2>
            {right && <div />}
        </Lined>
    )
}
