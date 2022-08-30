import styled from "styled-components";

export const MainPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap:2rem;
    section:nth-child(1) {
        background-image:url(/images/main.png);
        height: 56rem;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        background-size: cover;

        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.tablet}) {
            background-image:url(/images/main2.png);
            /* height:664px; */
            /* height:100%; */
        }
        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}) {
            background-image:url(/images/main3.png);
            background-size: cover;
            height:600px;
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
                text-shadow: 7px 1px 30px rgba(255, 255, 255, 0.25);

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
        /* margin-top: 4.2rem; */
        display: flex;
        flex-direction:column;
        overflow:hidden;

    .section2Grid{
        /* min-height:830px; */
        align-items: center;
        /* min-height:800px; */
    }

        .gridCol1{

            height: 100%;
                @media(max-width:${({ theme: { breakPoints } }) => breakPoints.sm}) {
                    padding-right:24px;
                 
                }
        }

        .gridCol2{
            padding-left:60px;
            padding-right:120px;
            
            h4{
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                /* line-height: 140%; */
                color: #FFFDFB;
                flex: none;
                order: 1;
            }

            @media(max-width:${({ theme: { breakPoints } }) => breakPoints.lg}) {
                padding-left:20px;
                padding-right:24px;
            }

            .sectionOneLinedText2{
                @media(max-width:${({ theme: { breakPoints } }) => breakPoints.lg}) {display: none;}
            }
        }


        .section2Text{
            font-weight: 400;
            font-size: 15px;
            line-height: 140%;
            color: #FFFDFB;
            font-family: 'Montserrat';
        }

        .sectionOneLinedText{
            margin-bottom:50px;
            @media(min-width:${({ theme: { breakPoints } }) => breakPoints.lg}) { display: none;}
        }    
    }


    /* section:nth-child(3){
        border: 1px solid blue;
    } */
`

export const Section3 = styled.section`
      margin-left:7.5rem;
      margin-right:7.5rem;
      margin-bottom:7.5rem;
        display: flex;
        flex-direction: column;
        gap:50px;
      @media(max-width:${({ theme: { breakPoints } }) => breakPoints.lg}) {
        margin-left:1.5rem;
        margin-right:1.5rem;
    }
`
export const Section4 = styled.section`
/* width:100%; */
overflow:hidden;
height:110vh;

@media(max-width:${({ theme: { breakPoints } }) => breakPoints.lg}) {
    height:900px;
}
/* @media(max-width:${({ theme: { breakPoints } }) => breakPoints.md}) {
    height:880px;
} */
@media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}) {
    height:664px;
}
@media(max-width:${({ theme: { breakPoints } }) => breakPoints.xs}) {
    height:340px;
}
/* height:100%; */
`


export const Section5 = styled(Section3)`
    background:url(/icons/nodes.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 805.37px;
    margin-bottom:0rem;
    margin-top:0px;

    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.md}) {
        background:url(/icons/nodes-tablet.svg);
        background-repeat: no-repeat;
          background-size: contain;
         background-position: center;
         margin-top:0px;
    }
    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.xs}) {
        background:url(/icons/nodes-mobile.svg);
        background-repeat: no-repeat;
          background-size: contain;
         background-position: center;
         margin-top:0px;
    }

`

export const Section6 = styled(Section3)`
    display: flex;
    flex-direction: column;
    gap:1rem;
    margin-bottom:4rem;
`

export const Section7 = styled(Section3)`
`

export const NodeSection = styled(Section3)`
 margin-bottom:0px;
 gap:0;
`