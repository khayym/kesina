import styled from 'styled-components'
import { Box } from '@mantine/core';

export const LentStyled = styled(Box)`
    height: 601.13px;
    max-width: 840px;
    max-height: 601px;
    min-width: 296px;
    min-height: 211px;
    background-image: url('/images/lent1.png');
    border-top-right-radius: 20rem !important;
    border-bottom-right-radius: 20rem !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.lg}) {
        max-height: 397px;
    }

    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.sm}) {
        max-height: 211px;
    }
`