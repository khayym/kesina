import styled from "styled-components";

export const ContainerStyed = styled.div`
border: 1px solid #fff;
margin-left:7.5rem;
margin-right:7.5rem;

@media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    margin-left:1.5rem;
    margin-right:1.5rem;
}
`