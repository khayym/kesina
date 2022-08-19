import React from 'react'
import { StyledLent, Img } from './Lent.Styled';

export const Lent = ({ url, variant = 1 }) => {
    return (
        <StyledLent className='customLent' variant={variant}>
            <Img url={url} variant={variant} />
        </StyledLent>
    )
}
