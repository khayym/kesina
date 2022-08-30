import styled from "styled-components";


export const SwipperWrapper = styled.div`
    /* background-color: #ffffff37; */
    margin:61px 120px 0 120px; 
    /* height:320px; */

    .swiper-scrollbar{
        background-color: transparent;
    }

    .mySwiper{
        height:370px;

        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.xs}) { 
            height:250px;
         }
    }
    .swiper-scrollbar-horizontal{
        background-color: transparent;
        border:1px solid #fff;
        color:red;
        display: flex;
        align-items: center;

        @media(max-width:${({ theme: { breakPoints } }) => breakPoints.sm}) { 
           width:95%;
         }
    }

    .swiper-scrollbar-drag{
        width: 288px;
        height: 14px;
        background: #FFFFFF;
    }

    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.lg}) { 
                margin:61px 24px 0 24px; 
    }
    @media(max-width:${({ theme: { breakPoints } }) => breakPoints.sm}) { 
                margin:61px 0 0 24px; 
    }
`