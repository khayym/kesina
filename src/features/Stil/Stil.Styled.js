import styled from "styled-components";

export const Wrap = styled.div`
    margin-bottom:5rem;
`

export const Container = styled.div`
  margin: 0 120px;


  .bannerDiv1{
    background-clip:inherit;
    border:0px;
    /* background-size: contain; */
    background-position: top !important;
   
  }

  .licenceLine1{
      display:none;
      width:100%;
      @media (max-width:${({ theme: { breakPoints } }) => breakPoints.lg}){
        display:block !important;
       }   
    }

  .licence{

    display:flex;
    align-items: center;
    margin-bottom:3rem;

    .licenceText{
      max-width:580px;
    }

    p{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      color: #FFFFFF;
      margin-top:4.375rem;
    }

    h2{
      font-family: 'Playfair Display';
      font-style: normal;
      font-weight: 600;
      font-size: 60px;
      text-transform: uppercase;
      color: #FFFFFF;
    }

    .licenceImage{
      width: 100%;
      position: relative;
      display:flex;
      align-items: center;

    }

    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.lg}){
      flex-direction: column;

      p{
        text-align: center;
      }

      h2{
        display:none;
      }
    }
  }

@media (max-width:${({ theme: { breakPoints } }) => breakPoints.lg}){
    margin: 0 24px;
}

`