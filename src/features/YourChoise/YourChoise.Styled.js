import styled from "styled-components";

export const Wrap = styled.div`
   margin-bottom:1rem;
`

export const Container = styled.div`
   
    margin: 0 120px;
    .bannerDiv1{
    background-clip:inherit;
    border:0px;
  }

  .nodeWrapContainer{
    p{
        font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 15px;
    }
  }

  @media (max-width:${({ theme: { breakPoints } }) => breakPoints.lg}){
    margin: 0 24px;
}

`