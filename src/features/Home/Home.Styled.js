import styled from "styled-components";

export const MainPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap:4rem;
    section:nth-child(1) {
        /* border:.0625rem solid #fff; */
        background-image:url(/images/main.png);
        height: 56rem;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        background-size: cover;

        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.tablet}) {
            background-image:url(/images/main2.png);
        }
        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}) {
            background-image:url(/images/main3.png);
        }

    
        div:nth-child(1){
            margin-left:7.5rem;
            position:absolute;
            top:19rem;
            width: -webkit-fill-available;
            @media(max-width:900px) {
                margin-left:25px
            }


            h1{
                margin-top:0;
                
                margin-bottom:2.2rem;
                font-weight: 600;
                font-size: 75px;
                color: #111111;
                font-family: 'Playfair Display';
                text-transform: uppercase;
                text-shadow: 75px -7px 30px rgba(255, 255, 255, 0.25);

                @media(max-width:${({ theme: { breakPoints } }) => breakPoints.tablet}) {
                    color: #fff;
                }

                
                @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}) {
                    font-size: 28px;
                }
            }

            h3{
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                color: #000000;
                margin-bottom:55px;
                @media(max-width:${({ theme: { breakPoints } }) => breakPoints.tablet}) {
                    color: #fff;
                }

                @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}) {
                    font-size: 16px;
                }
            }
        }
    }

    section:nth-child(2) {
        border: 1px solid yellow;
        margin-top: 4.2rem;
        display: flex;
        flex-direction:column;
        
        .section1{
            display: flex;
            /* align-items: center; */
            width: 100%;

            .sec-lent{
                border: 1px solid #11dbff;
                width: 100%;
            }

            p{
                width:100%;
            }

        @media (max-width:${({ theme: { breakPoints } }) => breakPoints.tablet}) {
            flex-direction: column;
        }
        }
    }
`