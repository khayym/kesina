import styled, { css } from "styled-components";

const variants = {
    primary: {
        bg: '#A91111',
        color: '#fff',
        border: '#A91111',
        hoverBorder: '#A30909',
        activeBorder: '#9B0909',
        hoverBg: '#A30909',
        activeBg: '#9B0909',
    },
    secondary: {
        bg: 'transparent',
        color: '#fff',
        border: '#fff',
        hoverBorder: '#A30909',
        activeBorder: '#9B0909',
        hoverBg: 'transparent',
        activeBg: 'transparent',
    }

};

export const StyledButton = styled.button`
    font-size: 16px;
    font-weight: 600;
    padding:16px 37.5px;
    border-radius: 25px;
    font-family: 'Montserrat';
    cursor: pointer;

    :hover {
       background-color: ${props => variants[props.variant].hoverBg}; 
       transition: all 0.3s ease-in-out;
       box-shadow: '0px 8px 16px rgba(34, 0, 106, 0.24)';
       border:${props => `2px solid ${variants[props.variant].hoverBorder}`};  
    }

    :active{
        background-color: ${props => variants[props.variant].activeBg}; 
        border:${props => `2px solid ${variants[props.variant].borderActive}`};  
    }
    ${({ variant }) => css`
       background-color: ${variants[variant].bg};
       color: ${variants[variant].color};
       border:${props => `2px solid ${variants[props.variant].border}`};  
   `}
`