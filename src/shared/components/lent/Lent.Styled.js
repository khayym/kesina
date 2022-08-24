import styled, { css } from "styled-components";

export const LentWrap = styled.div`
    width:100%;
    height:100%;
    background-image: ${({ url }) => `url(${url[2]})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    ${({ position }) => position === 'right' ?
        css`
            border-top-right-radius: 20rem !important;
            border-bottom-right-radius: 20rem !important;
        `
        : css`
         border-top-left-radius: 20rem !important;
         border-bottom-left-radius: 20rem !important;
        `
    }

    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
        background-image: ${({ url }) => `url(${url[1]})`};
    }
    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
        background-image: ${({ url }) => `url(${url[0]})`};
    }
`