import styled, { css } from "styled-components";

const v = {
    1: {
        lent: {
            width: "100%",
            height: "601.12px",
            maxWidth: "840px",
            border: 0,
            topRadius: "20rem",
            bottomRadius: "20rem",

            tablet: {
                maxWidth: "554.76px",
                height: "397px",
            },

            mobile: {
                width: '100%',
                height: "211px",
            }
        },
        img: {
            topRadius: "20rem",
            bottomRadius: "20rem",
        }
    }
}

export const Img = styled.div`
        /* border: 1px solid red; */
        width: 100%;
        height: 100%;
        background-size: cover;
        background-image: ${({ url }) => `url(${url})`};

        ${({ variant }) => css`
        border-top-right-radius: ${v[variant].img.topRadius};
        border-bottom-right-radius: ${v[variant].img.bottomRadius};

       
   `}

`
export const StyledLent = styled.div`
        /* border:0;
        max-width: 840px;
        width: 100%;
        height: 601.12px;
        border-top-right-radius: 20rem;
        border-bottom-right-radius: 20rem; */

        ${({ variant }) => css`
        border:${v[variant].lent.border};
        width: ${v[variant].lent.width};
        max-width: ${v[variant].lent.maxWidth};
        height: ${v[variant].lent.height};
        border-top-right-radius: ${v[variant].lent.topRadius};
        border-bottom-right-radius: ${v[variant].lent.bottomRadius};

        @media(max-width:${({ theme: { breakPoints }, variant }) => breakPoints.tablet}) {
            /* width: ${v[variant].lent.tablet.width}; */
            max-width: ${v[variant].lent.tablet.maxWidth};
            width: 100%;
            height: ${v[variant].lent.tablet.height};
        }

        @media(max-width:${({ theme: { breakPoints }, variant }) => breakPoints.mobile}) {
            /* width: ${v[variant].lent.tablet.width}; */
            width: 100%;
            max-width: ${v[variant].lent.mobile.width};
            height: ${v[variant].lent.mobile.height};
        }
   `}
`