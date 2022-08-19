import styled, { css } from "styled-components";

const variants = {
    primary: {
        bg: '#A91111',
        color: '#FFFFFF',
        border: '2px solid #A91111',
        hover: '#880f0f',
        active: '#740d0d'
    },
    secondary: {
        bg: "#272727",
        color: '#fff',
        border: '2px solid #fff',
        hover: "#1a1919",
        active: "#111010"
    },
};

export const StyledButton = styled.button`
    font-size: 16px;
    font-weight: 600;
    padding:16px 37.5px;
    border-radius: 25px;
    font-family: 'Montserrat';
    cursor: pointer;

    :hover {
       background-color: ${props => variants[props.variant].hover}; 
       transition: all 0.3s ease-in-out;
       box-shadow: '0px 8px 16px rgba(34, 0, 106, 0.24)';
       border:${props => variants[props.variant].border};  
    }

    :active{
        background-color: ${props => variants[props.variant].active}; 
    }
    ${({ variant }) => css`
       background-color: ${variants[variant].bg};
       color: ${variants[variant].color};
      border: ${variants[variant].border};
   `}
`