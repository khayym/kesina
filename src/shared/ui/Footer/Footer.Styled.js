import styled from 'styled-components'

export const Wrap = styled.footer`
    max-width:1600px;
    width: 100%;
    min-height:394px;
    background: #FFF9F2;
    border-radius: 0px 500px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;


    #icon{
        align-self: center;
    }

    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
            height:420px;
            border-radius: 0px 200px 0px 0px;
    }
    @media (max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
            height:491px;
           
    }

    .outhor{
        font-weight:500;
    }
    .div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 120px;

        @media (max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
            flex-direction: column;
            align-items: flex-start;
        }
        @media (max-width:${({ theme: { breakPoints } }) => breakPoints.sm}){
            padding-left:24px;

            #icon{
                display:none;
            }

            h2{
                font-size: 28px;
            }
        }
    }
   

    h2{
        font-family: 'Philosopher';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        text-transform: uppercase;
        color: #A91111;
    }

    h3{ 
        font-family: 'Philosopher';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        text-transform: uppercase;
        color: #000000;
    }

    a, p{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #000000;
    }

    section:nth-child(1) {
        width: 70%;
      
        div{
            display:flex;
            align-items: center;
            gap: 0.4em;

            a{
                font-weight:bold;
            }

            @media(max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
                /* display:none; */
                width: 80%;
            }
            @media(max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
                display:none;
                /* width: 100%; */
            }
        }
    }


    section:nth-child(2){
        display: flex;
        width: 100%;
        justify-content:space-between;
        /* align-items:center; */

        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.sm}){
            align-items:flex-start;
        }

        .links div{
            
                display: flex;
                flex-direction:column;
                gap:12px;
        }

        #email{
            height:100%;
        }

        #email div{
            display:flex;
            align-items: center;
            gap: 0.4em;
            display:none;
            a{
                font-weight:bold;
            }

            @media(max-width:${({ theme: { breakPoints } }) => breakPoints.md}){
                display:flex;
            }
        }

        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.mobile}){
                flex-direction:column;

            }
    }

`