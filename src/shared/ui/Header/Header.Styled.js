import styled from "styled-components";

export const HeaderContainer = styled.header`
    /* border: 1px solid #fff; */
    display: flex;
    justify-content:space-between;
    padding:40px 120px;
    align-items: center;
    width:-webkit-fill-available;
    max-width:1358px;
    background:transparent;
    position:absolute;
    top:0;
    z-index:1;


    a {
        cursor: pointer;
        color: ${({ path }) => path !== '/' ? '#fff' : '#000'};
        font-weight:500;
        transition: all 0.3s ease-in-out;

        :hover{
            color:#FF2E2E;
            
        }

        :active{
            color:#A91111;
        }
    }
   
    @media(max-width:1200px) {
        padding:25px 24px;
        }

    .linksGroup{
      
        display: flex;
        gap:63px;

        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.xs}) {
            display: none;
        }
        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.md}) {
            gap:30px;
        }
        @media(max-width:614px) {
            gap:15px;
        }
    }

    div:nth-child(2) {
        display: none;
        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.xs}) {
            display:block ;
        }
    }
`